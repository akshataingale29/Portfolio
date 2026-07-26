import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, Cloud, Server, LayoutDashboard, Briefcase, FileUp, 
  Globe, Monitor, Cpu, 
  Activity, HeartPulse, CalendarDays
} from "lucide-react";

interface FloatingProps {
  children?: React.ReactNode;
  delay?: number;
  yOffset?: number;
  duration?: number;
  className?: string;
}

const FloatingElement = ({ children, delay = 0, yOffset = 10, duration = 3, className = "" }: FloatingProps) => (
  <motion.div
    animate={{ y: [0, -yOffset, 0] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const GlowCircle = ({ className, delay = 0 }: { className?: string, delay?: number }) => (
  <motion.div
    animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute rounded-full blur-2xl ${className}`}
  />
);

export const SecureDataIllustration = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-navy via-[#071324] to-[#0A192F] overflow-hidden flex items-center justify-center">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grain.png')] opacity-10 mix-blend-overlay"></div>
      <GlowCircle className="w-32 h-32 bg-cyan/20 top-4 left-4" />
      <GlowCircle className="w-40 h-40 bg-electric/20 bottom-4 right-4" delay={2} />
      
      {/* Grid lines */}
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(100, 255, 218, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 255, 218, 0.03) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {/* Central Shield */}
        <FloatingElement className="relative z-20 flex items-center justify-center">
          <div className="absolute inset-0 bg-cyan/20 blur-xl rounded-full"></div>
          <div className="w-20 h-20 rounded-2xl border border-cyan/30 bg-navy/60 backdrop-blur-md flex items-center justify-center shadow-[0_0_15px_rgba(100,255,218,0.2)]">
            <ShieldCheck className="text-cyan w-10 h-10" />
          </div>
        </FloatingElement>

        {/* Orbiting Elements */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-40 h-40 rounded-full border border-dashed border-cyan/20"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 p-1.5 rounded-lg border border-cyan/30 bg-navy/80">
            <Cloud className="text-cyan/80 w-4 h-4" />
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 p-1.5 rounded-lg border border-cyan/30 bg-navy/80">
            <Server className="text-cyan/80 w-4 h-4" />
          </div>
        </motion.div>

        {/* Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              x: (Math.random() - 0.5) * 100,
              y: (Math.random() - 0.5) * 100
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export const JobPortalIllustration = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#0A192F] via-[#0D223B] to-[#112240] overflow-hidden flex items-center justify-center">
      <GlowCircle className="w-32 h-32 bg-blue-500/20 top-0 right-0" delay={1} />
      
      <div className="relative z-10 w-4/5 h-3/5">
        <FloatingElement yOffset={5} className="w-full h-full relative">
          {/* Main Dashboard Window */}
          <div className="absolute inset-0 rounded-xl border border-blue-400/20 bg-navy/70 backdrop-blur-sm overflow-hidden flex flex-col shadow-2xl">
            {/* Window Header */}
            <div className="h-4 border-b border-blue-400/20 bg-black/20 flex items-center px-2 gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400/50"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400/50"></div>
            </div>
            
            {/* Dashboard Content */}
            <div className="flex-1 p-3 flex gap-3">
              {/* Sidebar */}
              <div className="w-1/3 flex flex-col gap-2">
                <div className="h-6 rounded bg-blue-400/10 flex items-center px-2">
                  <LayoutDashboard className="w-3 h-3 text-blue-400/70" />
                  <div className="ml-2 h-1 w-8 bg-blue-400/30 rounded"></div>
                </div>
                <div className="h-4 rounded bg-white/5"></div>
                <div className="h-4 rounded bg-white/5"></div>
              </div>
              
              {/* Main Content Area */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex gap-2">
                  <div className="flex-1 h-12 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-blue-400/80" />
                  </div>
                  <div className="flex-1 h-12 rounded bg-cyan/10 border border-cyan/20 flex items-center justify-center">
                    <FileUp className="w-5 h-5 text-cyan/80" />
                  </div>
                </div>
                {/* List Items */}
                <div className="flex-1 rounded bg-black/20 border border-white/5 p-2 flex flex-col gap-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-3 w-full bg-blue-400/10 rounded flex items-center px-1 gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400/30"></div>
                      <div className="h-1 w-12 bg-white/10 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FloatingElement>
      </div>
    </div>
  );
};

export const CybeorchIllustration = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-bl from-[#050B14] via-[#0A192F] to-[#112240] overflow-hidden flex items-center justify-center">
      <GlowCircle className="w-48 h-48 bg-electric/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      {/* Network Nodes Background */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          d="M20,50 L80,20 L150,70 L220,30" 
          stroke="var(--cyan)" strokeWidth="1" fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </svg>

      <div className="relative z-10 flex items-center justify-center">
        <FloatingElement yOffset={8} duration={4} className="relative">
          {/* Main Holographic Globe/Monitor */}
          <div className="w-24 h-24 rounded-full border border-electric/40 bg-electric/5 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(100,255,218,0.15)] relative overflow-hidden">
            <Globe className="text-electric w-12 h-12 opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-electric/20 to-transparent"></div>
          </div>
          
          {/* Floating UI Cards */}
          <motion.div 
            className="absolute -right-10 -top-4 w-16 h-12 rounded border border-cyan/30 bg-navy/80 backdrop-blur-md flex items-center justify-center"
            animate={{ y: [0, -5, 0], x: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Cpu className="text-cyan w-5 h-5" />
          </motion.div>
          
          <motion.div 
            className="absolute -left-8 -bottom-4 w-14 h-14 rounded-full border border-blue-400/30 bg-navy/80 backdrop-blur-md flex items-center justify-center"
            animate={{ y: [0, 5, 0], x: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <Monitor className="text-blue-400 w-6 h-6" />
          </motion.div>
        </FloatingElement>
      </div>
    </div>
  );
};

export const DoctorIllustration = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#021124] to-[#0A192F] overflow-hidden flex items-center justify-center">
      <GlowCircle className="w-36 h-36 bg-teal-400/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      {/* Heartbeat Line SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.polyline
          points="0,50 30,50 40,20 50,80 60,50 100,50"
          fill="none"
          stroke="var(--cyan)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-3">
        <FloatingElement yOffset={6} duration={3.5} className="flex gap-4">
          {/* Main Card */}
          <div className="w-16 h-20 rounded-xl border border-teal-400/30 bg-navy/70 backdrop-blur-md flex flex-col items-center justify-center gap-2 shadow-[0_0_15px_rgba(45,212,191,0.15)]">
            <Activity className="text-teal-400 w-6 h-6" />
            <div className="w-8 h-1 bg-teal-400/30 rounded"></div>
            <div className="w-6 h-1 bg-teal-400/30 rounded"></div>
          </div>
          
          {/* Secondary Card */}
          <div className="w-16 h-20 rounded-xl border border-blue-400/30 bg-navy/70 backdrop-blur-md flex flex-col items-center justify-center gap-2 mt-4 shadow-[0_0_15px_rgba(96,165,250,0.15)]">
            <CalendarDays className="text-blue-400 w-6 h-6" />
            <div className="w-8 h-1 bg-blue-400/30 rounded"></div>
            <div className="flex gap-1">
               <div className="w-2 h-2 rounded-full bg-cyan/50"></div>
               <div className="w-2 h-2 rounded-full bg-cyan/50"></div>
            </div>
          </div>
        </FloatingElement>
        
        {/* Floating cross icon */}
        <motion.div 
          className="absolute right-6 top-6 p-2 rounded-full border border-teal-400/20 bg-teal-400/5"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <HeartPulse className="text-teal-400 w-5 h-5" />
        </motion.div>
      </div>
    </div>
  );
};
