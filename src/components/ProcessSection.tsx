import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Discovery & Alignment", duration: "Day 1–3", desc: "We start by understanding your vision, goals, users, and constraints. A 30-minute discovery call followed by a written project brief.", deliverable: "Signed project brief + technical scope document" },
  { num: "02", title: "Architecture & Design", duration: "Day 3–7", desc: "We design the system architecture, database schema, and UI/UX wireframes before writing a single line of code.", deliverable: "System architecture doc + UI wireframes" },
  { num: "03", title: "Development & Testing", duration: "Week 2 → Launch", desc: "We build in sprints with weekly progress updates. You have access to a staging environment from day one.", deliverable: "Weekly builds + staging access + test reports" },
  { num: "04", title: "Deployment & Handover", duration: "Final week", desc: "We deploy to production, run final QA, and hand over full source code, documentation, and a recorded walkthrough.", deliverable: "Live deployment + source code + documentation" },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-panel" ref={ref}>
      <div className="container-void">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono-accent text-dim">07 // PROCESS</span>
          <h2 className="text-3xl md:text-5xl font-display text-foreground mt-4">
            How We <span className="text-gold">Work</span>
          </h2>
          <p className="font-body text-lg text-dim mt-3">A proven system built for precision and results.</p>
          <div className="gold-line-left w-24 mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mt-16 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-primary to-primary/20"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{ transformOrigin: "left" }}
            />
          </div>
          
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + 0.2 * i }}
            >
              <div className="text-5xl font-display text-primary mb-4">{step.num}</div>
              <span className="font-mono-accent text-dim text-[11px] border border-border px-2 py-0.5">
                {step.duration}
              </span>
              <h3 className="font-display text-lg text-foreground mt-4 tracking-wide">{step.title}</h3>
              <p className="font-body text-dim text-base mt-3">{step.desc}</p>
              <p className="font-body text-primary italic text-sm mt-4">{step.deliverable}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
