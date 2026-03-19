import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, PenTool, Cpu, Box, Smartphone, Cloud, Gamepad2 } from "lucide-react";

const services = [
  { icon: Layers, title: "Digital Products", tag: "FULLSTACK", desc: "We take your idea from concept to a fully deployed web or mobile product. End-to-end — design, development, testing, and launch. Nothing outsourced." },
  { icon: PenTool, title: "Brand & Design Systems", tag: "DESIGN", desc: "Your brand is your first impression. We craft complete visual identities — logo, design system, UI kit, and website — built to command respect in any market globally." },
  { icon: Cpu, title: "AI-Powered Solutions", tag: "AI // ML", desc: "We embed intelligence into your products. From smart dashboards and recommendation engines to automation pipelines and AI chatbots — we make your software think." },
  { icon: Box, title: "Immersive 3D Experiences", tag: "3D // WEBGL", desc: "We build experiences that stop people mid-scroll. Interactive 3D product visualizers, immersive web environments, and spatial interfaces." },
  { icon: Smartphone, title: "Mobile Applications", tag: "MOBILE", desc: "Cross-platform and native mobile apps built for performance, elegance, and scale. iOS and Android. Products that users keep coming back to." },
  { icon: Cloud, title: "DevOps & Cloud", tag: "DEVOPS // CLOUD", desc: "We architect the foundation your product runs on. CI/CD pipelines, containerized deployments, cloud scaling, and monitoring." },
  { icon: Gamepad2, title: "Game Development", tag: "GAMING", desc: "From indie games to serious simulations and gamified applications — we build interactive digital worlds that engage and retain users." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding gold-grid-bg" ref={ref}>
      <div className="container-void">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono-accent text-dim">04 // SERVICES</span>
          <h2 className="text-3xl md:text-5xl font-display text-foreground mt-4">
            What We <span className="text-gold">Build</span>
          </h2>
          <p className="font-body text-lg text-dim mt-3">Seven disciplines. One studio. Infinite possibilities.</p>
          <div className="gold-line-left w-24 mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="card-void p-8 group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <div className="flex items-start justify-between mb-6">
                <service.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                <span className="badge-void text-[11px]">{service.tag}</span>
              </div>
              <h3 className="font-display text-xl text-foreground tracking-wide">{service.title}</h3>
              <p className="font-body text-dim mt-3 text-base leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
