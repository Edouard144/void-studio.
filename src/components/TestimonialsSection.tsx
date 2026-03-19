import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  { name: "KEZA Delice", product: "SmartSCCO — Fintech Platform", quote: "Before SmartSCCO, our cooperative ran on notebooks and trust. VOID STUDIO built us a system that handles everything — loans, wallets, fraud alerts — with precision I never thought possible for our size. They did not just build software. They transformed how we operate." },
  { name: "Happy David", product: "MediSafe — Hospital Management", quote: "MediSafe changed everything for our facility. Patient records, appointments, billing — all in one system that actually works. The team was professional, responsive, and delivered exactly what they promised." },
  { name: "KANEZA Amandine", product: "UmurageTrust — Real Estate", quote: "Finding property in Rwanda used to mean endless WhatsApp messages and unverified listings. UmurageTrust gave us a platform we could actually trust. The search experience is flawless." },
  { name: "ISAAC Princieux", product: "StayAwake — Developer Tool", quote: "As a developer hosting on free tiers, downtime was killing my projects. StayAwake solved it completely — set it up in minutes, and my sites have been online ever since." },
  { name: "NKUNDA Isabella", product: "Partner & Collaborator", quote: "Working alongside VOID STUDIO on multiple projects has shown me what a world-class team looks like. Their attention to detail and the quality of their output is consistently exceptional." },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-void">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono-accent text-dim">11 // TESTIMONIALS</span>
          <h2 className="text-3xl md:text-5xl font-display text-foreground mt-4">
            Client <span className="text-gold">Signals</span>
          </h2>
          <p className="font-body text-lg text-dim mt-3">Words from those who trusted the void.</p>
          <div className="gold-line-left w-24 mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              className="card-void p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
            >
              <span className="text-5xl text-primary font-body leading-none">"</span>
              <p className="font-body text-foreground/80 text-base mt-2 leading-relaxed">{t.quote}</p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-display text-sm text-foreground tracking-wider">{t.name}</p>
                <span className="font-mono-accent text-primary text-[11px]">{t.product}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
          {testimonials.slice(3).map((t, i) => (
            <motion.div
              key={t.name}
              className="card-void p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 + 0.15 * i }}
            >
              <span className="text-5xl text-primary font-body leading-none">"</span>
              <p className="font-body text-foreground/80 text-base mt-2 leading-relaxed">{t.quote}</p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-display text-sm text-foreground tracking-wider">{t.name}</p>
                <span className="font-mono-accent text-primary text-[11px]">{t.product}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
