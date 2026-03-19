import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "SURFACE",
    price: "$500 – $800",
    label: "For focused, well-defined projects",
    timeline: "2–3 weeks",
    popular: false,
    features: [
      "Discovery call + project brief",
      "UI/UX design",
      "Development + testing",
      "Deployment to production",
      "14 days post-launch support",
      "Source code handover",
      "Basic documentation",
    ],
  },
  {
    name: "DEEP",
    price: "$1,000 – $1,500",
    label: "For complete product builds",
    timeline: "4–6 weeks",
    popular: true,
    features: [
      "Everything in SURFACE",
      "Full backend API + database",
      "Authentication + security",
      "Admin dashboard",
      "Mobile responsive",
      "API documentation (Swagger)",
      "30 days post-launch support",
      "Staging environment access",
      "Full system documentation",
    ],
  },
  {
    name: "ABYSS",
    price: "$1,600 – $3,000",
    label: "For enterprise and complex systems",
    timeline: "8–12 weeks",
    popular: false,
    features: [
      "Everything in DEEP",
      "AI/ML feature integration",
      "DevOps + cloud infrastructure",
      "CI/CD pipeline",
      "Advanced security + fraud detection",
      "Performance optimization",
      "3D elements (if required)",
      "60 days post-launch support",
      "Dedicated project manager",
      "Weekly video call updates",
      "Full technical handover session",
    ],
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="section-padding bg-panel" ref={ref}>
      <div className="container-void">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono-accent text-dim">10 // PRICING</span>
          <h2 className="text-3xl md:text-5xl font-display text-foreground mt-4">
            Investment <span className="text-gold">Tiers</span>
          </h2>
          <p className="font-body text-lg text-dim mt-3">Transparent pricing. No surprises. Ever.</p>
          <div className="gold-line-left w-24 mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={`card-void p-8 relative ${tier.popular ? "border-primary" : ""} ${tier.popular ? "md:scale-105" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
            >
              {tier.popular && (
                <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              )}
              {tier.popular && (
                <span className="badge-void text-[10px] absolute top-4 right-4">MOST POPULAR</span>
              )}
              <h3 className="font-display text-xl text-foreground tracking-wider">{tier.name}</h3>
              <div className="font-display text-3xl text-primary mt-4">{tier.price}</div>
              <p className="font-body text-dim mt-2">{tier.label}</p>
              <span className="inline-block font-mono-accent text-dim text-[11px] border border-border px-2 py-0.5 mt-3">
                {tier.timeline}
              </span>

              <div className="gold-line mt-6" />

              <ul className="mt-6 space-y-3">
                {tier.features.map(f => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                    <span className="font-body text-foreground/80 text-base">{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn-gold w-full text-center mt-8 block">
                <span>Start This Mission</span>
              </a>
            </motion.div>
          ))}
        </div>

        <p className="font-body text-dim text-center mt-10">
          All prices in USD. Payment: 50% start / 50% delivery.{" "}
          <a href="#contact" className="text-primary hover:text-primary-glow transition-colors">Need something custom? Let's talk →</a>
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
