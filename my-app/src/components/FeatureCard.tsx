import { type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-primary/20 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
