import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, BarChart2, ShieldCheck, Headphones, Lock, MessageCircle, Receipt, CreditCard } from "lucide-react";

const promises = [
  { icon: Clock, title: "First Prototype in 7 Days", desc: "Within one week of project start, you receive a working prototype. Not a mockup — a real, clickable, functional first version." },
  { icon: BarChart2, title: "Weekly Progress Updates", desc: "Every Friday, you receive a written progress report and access to the latest build. No surprises. Full visibility." },
  { icon: ShieldCheck, title: "You Own Everything", desc: "On final payment, full source code ownership transfers to you. No lock-in. No subscriptions. No hidden dependencies." },
  { icon: Headphones, title: "30-Day Post-Launch Support", desc: "Every project includes 30 days of free support after launch. Bugs fixed. Questions answered. Adjustments made." },
  { icon: Lock, title: "NDA on Request", desc: "Your idea is safe with us. We sign Non-Disclosure Agreements before any sensitive project discussion — at no extra cost." },
  { icon: MessageCircle, title: "24-Hour Response Guarantee", desc: "We respond to every client message within 24 hours — guaranteed. Weekdays and weekends." },
  { icon: Receipt, title: "Transparent Pricing", desc: "No hidden fees. No surprise invoices. The price agreed at project start is the price you pay." },
  { icon: CreditCard, title: "Staged Payment Structure", desc: "50% to begin. 50% on delivery. No full payment upfront. No payment before you are satisfied." },
];

const CommitmentSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding gold-grid-bg" ref={ref}>
      <div className="container-void">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono-accent text-dim">08 // COMMITMENT</span>
          <h2 className="text-3xl md:text-5xl font-display text-foreground mt-4">
            Our <span className="text-gold">Commitment</span>
          </h2>
          <p className="font-body text-lg text-dim mt-3">What every VOID STUDIO client is guaranteed.</p>
          <div className="gold-line-left w-24 mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {promises.map((p, i) => (
            <motion.div
              key={p.title}
              className="card-void p-6 group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
            >
              <p.icon className="w-5 h-5 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-sm text-foreground tracking-wider">{p.title}</h3>
              <p className="font-body text-dim text-sm mt-2">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
