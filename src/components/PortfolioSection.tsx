import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import stayAwakeImg from "@/assets/StayAwake.png";
import gerayoImg from "@/assets/Gerayo.png";
import edrixImg from "@/assets/edrix.png";
import smartSccoImg from "@/assets/smartssco.png";
import gymImg from "@/assets/gym.png";

const projects = [
  { name: "SmartSCCO", category: "Fintech // Web Application", tag: "FULLSTACK", desc: "Complete digital banking platform for savings cooperatives — loans, wallets, fraud detection.", stack: "Express.js // PostgreSQL // React // TypeScript", status: "LIVE", image: smartSccoImg },
  { name: "StayAwake", category: "Developer Tools // SaaS", tag: "FULLSTACK", desc: "Server-side uptime tool keeping free-tier hosted sites alive 24/7.", stack: "Node.js // NeonDB // node-cron", status: "LIVE", image: stayAwakeImg },
  { name: "Gerayo", category: "Transport // Mobile Development", tag: "MOBILE", desc: "Helping drivers manage their cars efficiently with alerts and accident notification to Police.", stack: "React Native // NeonDB // Springboot // GPS Tracking", status: "LIVE", image: gerayoImg },
  { name: "UmurageTrust", category: "Real Estate // Marketplace", tag: "FULLSTACK", desc: "Premium real estate marketplace connecting buyers and sellers across Rwanda.", stack: "Node.js // PostgreSQL // Next.js", status: "LIVE", image: null },
  { name: "MediSafe", category: "Healthcare // Management", tag: "BACKEND", desc: "Hospital management system digitizing patient records, appointments and billing.", stack: "Node.js // PostgreSQL // React", status: "LIVE", image: null },
  { name: "EDRIX Mission Control", category: "DevOps // Dashboard", tag: "FULLSTACK", desc: "Multi-tenant DevOps dashboard with webhooks, analytics, job tracking and billing.", stack: "React 18 // TypeScript // Node.js // SQLite", status: "LIVE", image: edrixImg },
  { name: "FitZone Pro", category: "Fitness // Web Application", tag: "FULLSTACK", desc: "Modern, responsive website for a gym and sauna facility with smooth animations, responsive design, and interactive elements.", stack: "Next.js // TypeScript // Tailwind CSS // Node.js // Express.js // Radix UI // Framer Motion", status: "LIVE", image: gymImg },
];

const filters = ["ALL", "FULLSTACK", "BACKEND", "MOBILE", "DESIGN"];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("ALL");

  const filtered = active === "ALL" ? projects : projects.filter(p => p.tag.includes(active));

  return (
    <section id="work" className="section-padding bg-panel" ref={ref}>
      <div className="container-void">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono-accent text-dim">05 // PORTFOLIO</span>
          <h2 className="text-3xl md:text-5xl font-display text-foreground mt-4">
            Our <span className="text-gold">Work</span>
          </h2>
          <p className="font-body text-lg text-dim mt-3">Problems solved. Systems built. Results delivered.</p>
          <div className="gold-line-left w-24 mt-4" />
        </motion.div>

        <div className="flex flex-wrap gap-3 mt-10">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-mono-accent px-4 py-2 border transition-all duration-300 ${
                active === f ? "border-primary text-primary" : "border-border text-dim hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filtered.map((project, i) => (
            <motion.div
              key={project.name}
              className="card-void group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              {/* Placeholder image area */}
              <div className="relative h-48 bg-surface flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="font-display text-xl text-primary/30 tracking-widest">{project.name}</span>
                )}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500" />
                {project.status === "IN PROGRESS" && (
                  <div className="absolute inset-0 border-2 border-primary/30 animate-pulse" />
                )}
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-lg text-foreground">{project.name}</h3>
                    <p className="font-mono-accent text-dim mt-1">{project.category}</p>
                  </div>
                  <span className="badge-void text-[10px]">{project.status}</span>
                </div>
                <p className="font-body text-dim text-base mt-3">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.split(" // ").map(t => (
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

export default PortfolioSection;
