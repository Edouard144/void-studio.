import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "How long does a typical project take?", a: "Depends on scope. A focused landing page takes 1–2 weeks. A full web application takes 4–8 weeks. An enterprise system can take 8–12 weeks. We give you a precise timeline in the project brief before work begins — and we stick to it." },
  { q: "Do you work with international clients?", a: "Absolutely. We work with clients globally. All communication is in English (and French on request). Payments accepted internationally via bank transfer or mobile money." },
  { q: "What is your payment structure?", a: "50% to initiate the project. 50% on delivery and your approval. No full upfront payment. No payment before you are satisfied with the final result." },
  { q: "Who owns the code after delivery?", a: "You do. 100%. On final payment, all source code, assets, and intellectual property transfer entirely to you. No licensing fees. No ongoing payments. No lock-in." },
  { q: "Do you sign NDAs?", a: "Yes. We sign Non-Disclosure Agreements before discussing any sensitive project. We treat your idea with the same confidentiality we would want for our own." },
  { q: "What if we need changes after launch?", a: "All projects include a post-launch support period (14–60 days depending on tier) for bug fixes and minor adjustments. Major new features are scoped as a new project." },
  { q: "Can we start with a small project to test?", a: "Yes — and we encourage it. Our SURFACE tier is designed exactly for this. Build something small together first, see how we work, then scale up." },
  { q: "Do you offer maintenance contracts?", a: "Yes. After the post-launch support period, we offer monthly maintenance packages. Ask us for details when starting your project." },
  { q: "What technologies do you specialize in?", a: "Our core stack is Node.js, Express, PostgreSQL, React, Next.js, React Native, Spring Boot on the backend/mobile side — with Docker and cloud infrastructure handled by our DevOps specialist." },
  { q: "How do we get started?", a: "Fill in the contact form or message us on WhatsApp. We respond within 24 hours with a discovery call invitation. From first message to project brief takes less than 48 hours." },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-padding bg-panel" ref={ref}>
      <div className="container-void max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono-accent text-dim">12 // FAQ</span>
          <h2 className="text-3xl md:text-5xl font-display text-foreground mt-4">
            Common <span className="text-gold">Questions</span>
          </h2>
          <div className="gold-line-left w-24 mt-4" />
        </motion.div>

        <div className="mt-12 space-y-0">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className={`border-b border-border ${open === i ? "border-l-2 border-l-primary pl-4" : "pl-4"} transition-all`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
            >
              <button
                className="w-full flex items-center justify-between py-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-body text-lg text-foreground pr-4">{faq.q}</span>
                {open === i ? (
                  <Minus className="w-5 h-5 text-primary shrink-0" strokeWidth={1.5} />
                ) : (
                  <Plus className="w-5 h-5 text-primary shrink-0" strokeWidth={1.5} />
                )}
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="font-body text-foreground/70 text-base pb-6 leading-relaxed">{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
