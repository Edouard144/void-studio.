import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const stats = [
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "", label: "Specialist Engineers" },
  { value: 3, suffix: "+", label: "Years Building" },
  { value: 100, suffix: "%", label: "Completion Rate" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-breathe overflow-hidden">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,hsl(var(--primary)/0.04),transparent_70%)]" />
      
      <div className="container-void relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="font-mono-accent text-dim uppercase">Now Accepting Projects</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-foreground leading-[1.1] max-w-4xl">
            We Build From{" "}
            <span className="text-gold">The Void.</span>
          </h1>

          <p className="font-body text-xl md:text-2xl text-dim mt-6 max-w-2xl">
            From Nothing. To Everything.
          </p>

          <p className="font-body text-lg text-foreground/70 mt-4 max-w-2xl leading-relaxed">
            The only studio in East Africa combining Backend, Mobile, AI, 3D and DevOps 
            under one roof — delivering complete digital products, not just code.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a href="#contact" className="btn-gold">
              <span>Start a Mission</span>
            </a>
            <a href="#work" className="btn-white">
              <span>View Our Work</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-border">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.2 + i * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl md:text-4xl font-display text-gold">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-mono-accent text-dim mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
