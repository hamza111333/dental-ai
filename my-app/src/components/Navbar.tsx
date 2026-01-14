import { Link } from "wouter";
// import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";
import { Button } from "./ui/button";
export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center group-hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900">
              LoopCore<span className="text-indigo-600">AI</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('features')} className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              Capabilities
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              How it Works
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              Benefits
            </button>
          </div>

          <Button 
            onClick={() => scrollToSection('book-demo')}
            className="hidden md:flex bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20"
          >
            Book Demo
          </Button>
        </div>
      </div>
    </nav>
  );
}
