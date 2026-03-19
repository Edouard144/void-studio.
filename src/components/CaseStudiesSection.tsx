import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const caseStudies = [
  {
    num: "01",
    project: "SmartSCCO — Fintech Infrastructure",
    client: "Savings Cooperative Organization",
    challenge: "A cooperative managing hundreds of members manually with paper records — loans tracked in notebooks, fraud undetected, no audit trail.",
    solution: "Built a complete digital banking platform with automated loan processing, real-time wallet management, fraud detection algorithms, SMS notifications, and a full admin dashboard.",
    result: "100% elimination of manual record errors. Loan approval time reduced from days to minutes. Full audit trail on every transaction.",
    stack: "Express.js // PostgreSQL // React // TypeScript // JWT // Bcrypt",
    timeline: "8 weeks",
  },
  {
    num: "02",
    project: "UmurageTrust — Real Estate Marketplace",
    client: "Real Estate Platform, Rwanda",
    challenge: "Property buyers and sellers had no trusted digital platform. Listings were shared via WhatsApp groups — no verification, no search, no standardized process.",
    solution: "Engineered a high-concurrency PostgreSQL database with a seamless Next.js frontend, advanced filtering, user verification, and full RESTful API with Swagger documentation.",
    result: "First structured real estate marketplace in Rwanda. Verified listings with zero duplicates. Time-to-find reduced by 80%.",
    stack: "Node.js // PostgreSQL // Next.js // REST APIs",
    timeline: "10 weeks",
  },
  {
    num: "03",
    project: "StayAwake — Developer Infrastructure Tool",
    client: "Developers using free-tier hosting (global)",
    challenge: "Free hosting platforms put inactive apps to sleep after 15 minutes. No existing tool solved this server-side.",
    solution: "Built a server-side pinger with JWT authentication, multi-site management, custom ping intervals, and a node-cron scheduler that runs independently of the browser.",
    result: "Zero downtime for registered sites. Browser-independent — works 24/7. Adopted by developers globally within weeks.",
    stack: "Node.js // Express // NeonDB // node-cron // JWT",
    timeline: "3 weeks",
  },
];

const CaseStudiesSection = () => {
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
          <span className="font-mono-accent text-dim">06 // CASE STUDIES</span>
          <h2 className="text-3xl md:text-5xl font-display text-foreground mt-4">
            Case <span className="text-gold">Studies</span>
          </h2>
          <p className="font-body text-lg text-dim mt-3">Not just what we built — but why it worked.</p>
          <div className="gold-line-left w-24 mt-4" />
        </motion.div>

        <div className="space-y-20 mt-16">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.num}
              className={`grid md:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * i }}
            >
              {/* Image placeholder */}
              <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="card-void h-64 flex items-center justify-center relative">
                  <span className="font-display text-2xl text-primary/20 tracking-widest">
                    {cs.project.split("—")[0].trim()}
                  </span>
                  <span className="badge-void text-[10px] absolute top-4 right-4">{cs.timeline}</span>
                </div>
              </div>

              {/* Content */}
              <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                <span className="font-mono-accent text-primary text-sm">CASE STUDY {cs.num}</span>
                <h3 className="font-display text-2xl text-foreground mt-2 tracking-wide">{cs.project}</h3>
                <p className="font-mono-accent text-dim text-[11px] mt-1">{cs.client}</p>

                <div className="mt-6 space-y-4">
                  <div>
                    <p className="font-mono-accent text-dim text-[11px] uppercase mb-1">Challenge</p>
                    <p className="font-body text-dim text-base">{cs.challenge}</p>
                  </div>
                  <div>
                    <p className="font-mono-accent text-dim text-[11px] uppercase mb-1">Solution</p>
                    <p className="font-body text-foreground/80 text-base">{cs.solution}</p>
                  </div>
                  <div>
                    <p className="font-mono-accent text-dim text-[11px] uppercase mb-1">Result</p>
                    <p className="font-body text-primary text-base">{cs.result}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {cs.stack.split(" // ").map(t => (
                    <span key={t} className="font-mono-accent text-[10px] text-dim border border-border px-2 py-0.5">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
