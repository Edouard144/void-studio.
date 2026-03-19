import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import teamEdouard from "@/assets/team-edouard.jpg";
import teamTehila from "@/assets/team-tehila.jpg";
import teamGeofrey from "@/assets/team-geofrey.jpg";
import teamHerve from "@/assets/team-herve.jpg";
import teamBright from "@/assets/team-bright.jpg";

const team = [
  { name: "TUYUBAHE Edouard", role: "Mobile & Backend Developer", tagline: "Architects the systems that power everything you see.", skills: "Node.js // Express.js // React Native // PostgreSQL", image: teamEdouard },
  { name: "RUZINDANA Tehila", role: "Frontend Developer & Designer", tagline: "Transforms complex ideas into interfaces people love.", skills: "React.js // Next.js // Figma // Tailwind CSS", image: teamTehila },
  { name: "KAYINAMURA K. Geofrey", role: "Senior Backend Developer", tagline: "Engineers the infrastructure that never breaks.", skills: "Java // Spring Boot // PostgreSQL // System Design", image: teamGeofrey },
  { name: "NDIZEYE Herve", role: "Frontend, 3D & Design", tagline: "Brings the third dimension to every digital experience.", skills: "Three.js // Blender // React // UI/UX Design", image: teamHerve },
  { name: "SUN Bright", role: "DevOps & Cloud Engineer", tagline: "Ensures every system we build runs flawlessly at scale.", skills: "Docker // AWS // CI/CD // Linux // Kubernetes", image: teamBright },
];

const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="section-padding" ref={ref}>
      <div className="container-void">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono-accent text-dim">09 // TEAM</span>
          <h2 className="text-3xl md:text-5xl font-display text-foreground mt-4">
            Meet The <span className="text-gold">Architects</span>
          </h2>
          <div className="gold-line-left w-24 mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="card-void p-6 group text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              {/* Hexagonal avatar placeholder */}
              <div className="w-20 h-20 mx-auto mb-4 border-2 border-primary/30 group-hover:border-primary rounded-full flex items-center justify-center transition-all duration-500 bg-surface">
                <span className="font-display text-lg text-primary">
                  {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </span>
              </div>
              <h3 className="font-display text-sm text-foreground tracking-wider">{member.name}</h3>
              <p className="font-mono-accent text-primary mt-1 text-[11px]">{member.role}</p>
              <p className="font-body text-dim text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 italic">
                "{member.tagline}"
              </p>
              <div className="flex flex-wrap justify-center gap-1 mt-3">
                {member.skills.split(" // ").map(s => (
                  <span key={s} className="font-mono-accent text-[9px] text-dim">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
