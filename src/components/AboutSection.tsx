import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-panel" ref={ref}>
      <div className="container-void">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono-accent text-dim">02 // ABOUT</span>
          <h2 className="text-3xl md:text-5xl font-display text-foreground mt-4">
            Who We <span className="text-gold">Are</span>
          </h2>
          <div className="gold-line-left w-24 mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-body text-xl text-foreground/80 leading-relaxed">
              VOID STUDIO is a global digital studio based in Kigali, Rwanda. 
              We are the only studio in East Africa combining Backend, Mobile, AI, 
              3D and DevOps under one roof — delivering complete digital products, not just code.
            </p>
            <p className="font-body text-lg text-dim mt-6 leading-relaxed">
              We are a registered team of professionals based in Rwanda, building for clients globally.
              Founded in 2023, we have delivered over 10 projects across fintech, healthcare, real estate, 
              and developer tools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-void p-8 flex items-center"
          >
            <blockquote className="font-body text-xl italic text-foreground/70">
              <span className="text-gold text-4xl leading-none">"</span>
              We don't just write code. We architect solutions that transform how organizations 
              operate. Every line of code serves a purpose. Every system we build is designed to last.
              <span className="text-gold text-4xl leading-none">"</span>
              <footer className="font-mono-accent text-dim mt-4 not-italic">
                — VOID STUDIO MANIFESTO
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
