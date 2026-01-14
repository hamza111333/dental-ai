// import { Navbar } from "@/components/Navbar";
// import { FeatureCard } from "@/components/FeatureCard";
// import { Button } from "@/components/ui/button";
import { Navbar } from "../components/Navbar";
import { Button } from "../components/ui/button";
// import { FeatureCard } from "../components/FeatureCard";
import { InlineWidget } from "react-calendly";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { 
  Phone, 
  CalendarCheck, 
  Clock, 
  Users, 
  Activity, 
  BrainCircuit, 
  ArrowRight, 
  CheckCircle2,
  Sparkles,
  MessageSquare,
  Calendar,
  UserCheck,
  X,
  Play
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "../components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export default function Home() {
  const [animationStep, setAnimationStep] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const steps = [
    { id: 'calls', label: 'Handling Calls' },
    { id: 'answering', label: 'AI Answering Calls', icon: Phone, text: "Inbound calls from Patients..." },
    { id: 'queries', label: 'AI Answering Queries', icon: MessageSquare, text: "Explaining insurance coverage..." },
    { id: 'booking', label: 'AI Booking Appointments', icon: Calendar, text: "Scheduling Dr. Smith for Tuesday..." },
    { id: 'rescheduling', label: 'AI Rescheduling', icon: CalendarCheck, text: "Moving appointments to Friday..." },
    { id: 'ending', label: 'Call Completed', icon: UserCheck, text: "Syncing details to practice management..." },
    { id: 'roi', label: 'Revenue Recovered', icon: Sparkles, text: "Profitability & Efficiency Secured" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

//   const scrollToContact = () => {
//     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
//   };

  return (
    <div className="min-h-screen bg-slate-50 font-body selection:bg-primary/20 selection:text-primary-foreground">
      {/* Top Highlight Bar */}
      {/* <div className="bg-slate-900 text-white py-10 px-4 hidden md:block border-b border-slate-800 shadow-sm relative z-50"> */}
        {/* <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.1em]">
              AI-Powered Revenue Recovery
            </span>
            <div className="h-4 w-px bg-slate-700 mx-2" />
            <span className="text-teal-400 text-[10px] font-black uppercase tracking-widest">
              Cost Effective Solution
            </span>
          </div>
          <div className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-slate-300">
            <span className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 hover:border-primary/30 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              Used by dozens of practices
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-teal-400" />
              24/7 Availability
            </span>
            <span className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-teal-400" />
              Cost recovered in weeks
            </span>
            <span className="flex items-center gap-2 text-primary">
              <CheckCircle2 className="w-4 h-4" />
              HIPAA compliant
            </span>
          </div>
        </div> */}
      {/* </div> */}
      <Navbar />
      <main className="pt-20">
        <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
            <DialogContent 
            className="max-w-4xl p-0 overflow-hidden bg-black border-none shadow-2xl rounded-2xl"
            aria-describedby={undefined}
            >
            <VisuallyHidden.Root>
                <DialogTitle>LoopCore AI Demo Video</DialogTitle>
            </VisuallyHidden.Root>
            <DialogHeader className="absolute top-4 right-4 z-50">
                <DialogClose className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors">
                <X className="w-5 h-5" />
                </DialogClose>
            </DialogHeader>
            <div className="relative aspect-video w-full bg-black">
                {isVideoModalOpen && (
                <video 
                    key="demo-video-production"
                    src="/demo.mp4" 
                    autoPlay 
                    muted
                    playsInline
                    controls 
                    preload="auto"
                    className="w-full h-full object-contain"
                >
                    Your browser does not support the video tag.
                </video>
                )}
            </div>
            </DialogContent>
        </Dialog>

        {/* Hero Section */}
        <section className="relative h-[calc(100vh-113px)] min-h-[700px] flex items-center overflow-hidden bg-white">
            <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
            </div>

            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"> */}
            {/* <div className="max-w-screen-2xl mx-auto px-8 lg:px-16 relative z-10 w-full"> */}
            <div className="max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-20 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center"
                >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 shadow-xl mb-8 self-start group hover:border-indigo-500/50 transition-colors">
                    <Sparkles className="w-4 h-4 text-indigo-500 fill-indigo-500 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">AI-Powered Revenue Recovery</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
                    Never Miss a <br/>
                    <span className="text-gradient">Patient Call</span> Again.
                </h1>
                
                <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
                    Our 24/7 AI receptionist answers calls, books appointments, and manages your waitlist naturally — just like your best staff member.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <Button 
                    size="lg" 
                    onClick={() => document.getElementById('book-demo')?.scrollIntoView({ behavior: 'smooth' })}
                    className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all hover:scale-105"
                    >
                    Book Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={() => setIsVideoModalOpen(true)}
                    className="h-14 px-8 text-lg rounded-full bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700"
                    >
                    <Play className="w-5 h-5 mr-2 fill-primary text-primary" />
                    Listen to Demo
                    </Button>
                </div>

                <div className="flex flex-wrap items-center gap-8 text-sm font-medium text-slate-500">
                    <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Used by dozens of practices</span>
                    </div>
                    <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>24/7 Availability</span>
                    </div>
                    <div className="flex items-center gap-2 text-indigo-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>HIPAA Complaint</span>
                    </div>
                    <div className="flex items-center gap-2 text-indigo-600">
                    <Sparkles className="w-5 h-5" />
                    <span>Cost recovered in weeks</span>
                    </div>
                </div>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex justify-center lg:justify-end items-center"
                >
                {/* Decorative visual for AI Receptionist concept */}
                <div className="relative z-10 bg-white rounded-[2rem] shadow-2xl shadow-indigo-500/10 border border-slate-100 p-2 w-full max-w-[640px]">
                    {/* Simulated Dashboard UI */}
                    <div className="bg-slate-50 rounded-[1.8rem] overflow-hidden border border-slate-100">
                    <div className="h-12 border-b border-slate-200 flex items-center px-6 gap-2 bg-white">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-amber-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    
                    <div className="p-4">
                        <div className="flex flex-col items-center mb-4 text-center">
                        <h2 className="text-xl lg:text-2xl font-display font-bold text-slate-900 leading-tight mb-1">
                            Highly Efficient <br/>
                            <span className="text-gradient">Highly Cost Effective</span>
                        </h2>
                        <div className="h-0.5 w-8 bg-primary/20 rounded-full mb-3" />
                        
                        <div className="flex items-center justify-between w-full px-2">
                            <div className="text-left">
                            <h4 className="text-sm font-black text-indigo-600 uppercase tracking-widest leading-tight">
                                Handling Multiple Calls <br/>
                                <span className="text-slate-900">Simultaneously</span>
                            </h4>
                            <p className="text-[10px] text-slate-400 font-bold">Today, Oct 24</p>
                            </div>
                            <span className="px-1.5 py-0.5 rounded-full bg-green-100 text-green-700 text-[8px] font-bold animate-pulse uppercase tracking-wider">
                            Active Now
                            </span>
                        </div>
                        </div>

                        <div className="space-y-2 px-2 h-[240px] flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            {animationStep === 0 ? (
                                <motion.div
                                key="calls"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-2"
                                >
                                {[
                                    { id: 1, name: "New Patient Inquiry", delay: 0 },
                                    { id: 2, name: "Appointment Request", delay: 0.5 },
                                    { id: 3, name: "General Question", delay: 1 }
                                ].map((call) => (
                                    <motion.div 
                                    key={call.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: call.delay, duration: 0.5 }}
                                    className="relative flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm border border-slate-100 group"
                                    >
                                    <div className="relative">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 relative z-10">
                                        <Phone className="w-4 h-4" />
                                        </div>
                                        <motion.div 
                                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute inset-0 bg-blue-400 rounded-full"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between mb-1">
                                        <span className="text-xs font-semibold text-slate-900">{call.name}</span>
                                        <span className="text-[10px] text-slate-400">0:4{call.id}</span>
                                        </div>
                                        <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                                        <motion.div 
                                            className="h-full bg-indigo-500"
                                            initial={{ width: "0%" }}
                                            animate={{ width: "60%" }}
                                            transition={{ duration: 2, repeat: Infinity, delay: call.delay }}
                                        />
                                        </div>
                                    </div>
                                    </motion.div>
                                ))}
                                </motion.div>
                            ) : (
                            <motion.div
                                key={steps[animationStep].id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-2xl border border-primary/10 shadow-inner"
                            >
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                                {(() => {
                                    const Icon = steps[animationStep].icon;
                                    return Icon ? <Icon className="w-8 h-8" /> : null;
                                })()}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{steps[animationStep].label}</h3>
                                <p className="text-sm text-slate-600 italic">"{steps[animationStep].text}"</p>
                                <div className="mt-6 flex gap-1">
                                {steps.slice(1).map((_, i) => (
                                    <div 
                                    key={i} 
                                    className={`h-1.5 rounded-full transition-all duration-500 ${
                                        i + 1 <= animationStep ? 'w-4 bg-primary' : 'w-1.5 bg-slate-200'
                                    }`} 
                                    />
                                ))}
                                </div>
                            </motion.div>
                            )}
                        </AnimatePresence>
                        </div>

                        <div className="mt-4 pt-4 border-t border-slate-200 grid grid-cols-3 gap-2 px-2 pb-2">
                        <div className="p-2 rounded-lg bg-indigo-50 border border-indigo-100 flex flex-col items-center justify-center text-center">
                            <div className="text-[8px] text-indigo-600 font-bold uppercase mb-0.5 whitespace-nowrap">Appt Booked</div>
                            <div className="text-sm font-bold text-indigo-900">+14</div>
                        </div>
                        <div className="p-2 rounded-lg bg-teal-50 border border-teal-100 flex flex-col items-center justify-center text-center">
                            <div className="text-[8px] text-teal-600 font-bold uppercase mb-0.5 whitespace-nowrap">Waitlist</div>
                            <div className="text-sm font-bold text-teal-900">3</div>
                        </div>
                        <div className="p-2 rounded-lg bg-red-50 border border-red-100 flex flex-col items-center justify-center text-center">
                            <div className="text-[8px] text-red-600 font-bold uppercase mb-0.5 whitespace-nowrap">Missed</div>
                            <div className="text-sm font-bold text-red-900">0</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                {/* Floating elements */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-100 z-20 hidden sm:flex"
                >
                    <BrainCircuit className="w-8 h-8 text-indigo-500" />
                </motion.div>
                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-6 -left-6 bg-white px-4 py-2 rounded-xl shadow-xl border border-slate-100 z-20 flex items-center gap-2 whitespace-nowrap"
                >
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-xs font-bold text-slate-700">System Operational</span>
                </motion.div>
                </motion.div>
            </div>
            </div>
        </section>

        {/* Why Clinics Choose Us Section */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
        {/* <div className="max-w-screen-2xl mx-auto px-8 lg:px-16 relative z-10 w-full"> */}
            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
            <div className="max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-20 relative z-10 w-full">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6">
                Why Clinics Choose Us
                </h2>
                <p className="text-xl text-slate-600">
                The modern standard for patient communication and revenue optimization.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[
                { 
                    title: "Zero Missed Calls", 
                    desc: "Every call is answered instantly — no voicemail, no lost patients.",
                    icon: Phone
                },
                { 
                    title: "Multiple Calls, One System", 
                    desc: "Handles several patients at the same time. No hold queues. No overload.",
                    icon: BrainCircuit
                },
                { 
                    title: "Consistently Human", 
                    desc: "Always calm, friendly, and professional — trained once, never forgets.",
                    icon: Sparkles
                },
                { 
                    title: "Always Available", 
                    desc: "Patients reach your clinic 24/7 — evenings, weekends, holidays.",
                    icon: Clock
                },
                { 
                    title: "A Full Front Desk, Automated", 
                    desc: "Appointment booking, rescheduling, reminders — without new hires.",
                    icon: Users
                },
                { 
                    title: "Revenue-Positive by Design", 
                    desc: "Recovers missed appointments and pays for itself within weeks.",
                    icon: Activity
                }
                ].map((item, i) => (
                <motion.div 
                    key={i}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-md hover:shadow-2xl hover:shadow-indigo-500/10 transition-all group"
                >
                    <div className="w-16 h-16 rounded-3xl bg-indigo-50 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-6">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
                </motion.div>
                ))}
            </div>
            </div>
        </section>

        {/* Benefits / Stats */}
        <section id="benefits" className="py-24 bg-indigo-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            
            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> */}
            <div className="max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-20 relative z-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-indigo-800/50">
                <div className="p-4">
                <div className="text-5xl font-display font-bold text-indigo-300 mb-4">30%</div>
                <p className="text-lg text-indigo-100">Reduction in administrative overhead costs</p>
                </div>
                <div className="p-4">
                <div className="text-5xl font-display font-bold text-teal-300 mb-4">0</div>
                <p className="text-lg text-indigo-100">Missed calls — every patient gets answered</p>
                </div>
                <div className="p-4">
                <div className="text-5xl font-display font-bold text-indigo-300 mb-4">24/7</div>
                <p className="text-lg text-indigo-100">Patient support coverage</p>
                </div>
                <div className="p-4">
                <div className="text-5xl font-display font-bold text-teal-300 mb-4">100%</div>
                <p className="text-lg text-indigo-100">Automated call handling</p>
                </div>
                <div className="p-4">
                <div className="text-5xl font-display font-bold text-indigo-300 mb-4">3X</div>
                <p className="text-lg text-indigo-100">More appointments booked</p>
                </div>
            </div>
            </div>
        </section>

        {/* Impact Highlight Section */}
        <section className="bg-slate-900 py-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
            >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                <Activity className="w-8 h-8 text-primary" />
                </div>
                <p className="text-3xl lg:text-5xl font-display italic text-white leading-tight mb-8">
                "17 appointments recovered last month — calls that would've otherwise <span className="text-primary font-bold">gone unanswered.</span>"
                </p>
                <div className="h-px w-24 bg-slate-700 mb-8" />
                <p className="text-xl text-indigo-200 font-medium">
                That's the difference between a <span className="text-slate-400">good month</span> and a <span className="text-white font-bold underline decoration-primary decoration-4 underline-offset-8 uppercase tracking-widest">great one.</span>
                </p>
            </motion.div>
            </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
                <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-widest mb-6 border border-slate-200">
                    Professional Operations
                </div>
                <h2 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 leading-tight mb-8">
                    More Than Just An <br/>
                    <span className="text-gradient">Answering Service</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                    Our AI system acts as a high-performance extension of your team, handling complex scheduling, triage, and patient inquiries with clinical precision.
                </p>
                </div>
                <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                {[
                    { title: "Smart Triage", icon: BrainCircuit, desc: "Instantly routes urgent patient needs." },
                    { title: "Auto-Sync", icon: CalendarCheck, desc: "Real-time calendar integration." },
                    { title: "Natural Voice", icon: Phone, desc: "Indistinguishable from human staff." },
                    { title: "Zero Latency", icon: Activity, desc: "Sub-second response times." }
                ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </section>

        {/* How it Works / Demo Flow */}
        <section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                <h2 className="text-4xl font-display font-bold text-slate-900 mb-8">
                    How It Works
                </h2>
                
                <div className="space-y-10">
                    {[
                    { title: "Call Comes In", desc: "Patient calls your practice number. AI picks up instantly, even when your staff is busy." },
                    { title: "Intelligent Conversation", desc: "The AI greets the patient, understands their intent, and answers questions naturally." },
                    { title: "Action Taken", desc: "Whether booking an appointment or taking a message, the task is completed immediately." },
                    { title: "Schedule Updated", desc: "All details are logged and your schedule is updated automatically." }
                    ].map((step, i) => (
                    <div key={i} className="flex gap-6 group">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center font-bold text-primary shadow-sm group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all">
                        {i + 1}
                        </div>
                        <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </div>

                <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
                    <div className="space-y-6">
                    <div className="flex justify-start">
                        <div className="bg-slate-100 rounded-2xl rounded-tl-none p-4 max-w-[80%] text-slate-700">
                        Hi, I'd like to schedule an appointment for next Tuesday.
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="bg-primary text-white rounded-2xl rounded-tr-none p-4 max-w-[80%] shadow-lg shadow-primary/20">
                        I can help with that. Are you a new or returning patient?
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <div className="bg-slate-100 rounded-2xl rounded-tl-none p-4 max-w-[80%] text-slate-700">
                        Returning patient. My name is John Doe.
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="bg-primary text-white rounded-2xl rounded-tr-none p-4 max-w-[80%] shadow-lg shadow-primary/20">
                        Thanks, John. I see Dr. Smith has an opening at 2:00 PM next Tuesday. Should I book that for you?
                        </div>
                    </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm font-medium text-slate-500">AI Active Listening</span>
                    </div>
                    <div className="text-xs text-slate-400 font-mono">Latency: 45ms</div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* Calendly Integration Section */}
        <section id="book-demo" className="py-24 bg-white relative">
            <div className="max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-20 relative z-10 w-full">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">
                Book Your Live Demo
                </h2>
                <p className="text-lg text-slate-600">
                Schedule a 15-minute call to see how LoopCore AI can transform your practice's front desk.
                </p>
            </div>
            
            <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl min-h-[700px]">
                <InlineWidget 
                url="https://calendly.com/hamza-vegeta750/30min"
                styles={{
                    height: '700px',
                    width: '100%'                }}
                />
            </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                <Activity className="w-6 h-6 text-indigo-500" />
                <span className="font-display font-bold text-xl text-white">
                    LoopCore<span className="text-indigo-500">AI</span>
                </span>
                </div>
                <div className="text-sm">
                © 2026 LoopCoreAI. All rights reserved.
                </div>
                <div className="flex gap-6 text-sm font-medium">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
            </div>
        </footer>
      </main>
    </div>
  );
}
