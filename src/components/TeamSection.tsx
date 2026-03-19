import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, MessageCircle } from "lucide-react";
import teamEdouard from "@/assets/team-edouard.jpg";
import teamTehila from "@/assets/team-tehila.jpg";
import teamGeofrey from "@/assets/team-geofrey.jpg";
import teamHerve from "@/assets/team-herve.jpg";
import teamBright from "@/assets/team-bright.jpg";

const team = [
  { name: "KAYINAMURA K. Geofrey", role: "Senior Backend Developer", tagline: "Engineers the infrastructure that never breaks.", skills: "Springboot // PostgreSQL // neonDB // Express.js // Node.js // Java // Django // Python", image: teamGeofrey, github: "#", whatsapp: "#" },
  { name: "NDIZEYE Herve", role: "Embedded Systems Architect", tagline: "Brings the third dimension to every digital experience.", skills: "Embedded Systems Architecture // Blender // PhotoShop // Logo Design // UI/UX Design", image: teamHerve, github: "#", whatsapp: "#" },
  { name: "RUZINDANA Tehila", role: "Frontend Developer & Designer", tagline: "Transforms complex ideas into interfaces people love.", skills: "React.js // Next.js // Figma // Tailwind CSS", image: teamTehila, github: "#", whatsapp: "#" },
  { name: "SUN Bright", role: "DevOps & Cloud Engineer", tagline: "Ensures every system we build runs flawlessly at scale.", skills: "Docker // AWS // CI/CD // Linux // Kubernetes", image: teamBright, github: "#", whatsapp: "#" },
  { name: "TUYUBAHE Edouard", role: "Mobile & Backend Developer", tagline: "Architects the systems that power everything you see.", skills: "Node.js // Express.js // React.js // React Native // Swift // WordPress // PostgreSQL // MongoDB", image: teamEdouard, github: "#", whatsapp: "#" },
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
              className="card-void p-6 group text-center flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <div className="w-20 h-20 mx-auto mb-4 border-2 border-primary/30 group-hover:border-primary rounded-full overflow-hidden transition-all duration-500">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-sm text-foreground tracking-wider">{member.name}</h3>
              <p className="font-mono-accent text-primary mt-1 text-[11px]">{member.role}</p>
              <p className="font-body text-dim text-sm mt-3 italic">
                "{member.tagline}"
              </p>
              <div className="flex flex-wrap justify-center gap-1 mt-auto">
                {member.skills.split(" // ").map(s => (
                  <span key={s} className="font-mono-accent text-[9px] text-dim">{s}</span>
                ))}
              </div>
              <div className="flex justify-center gap-3 mt-auto pt-3">
                <a href={member.github} className="text-dim hover:text-primary transition-colors">
                  <Github size={14} />
                </a>
                <a href={member.whatsapp} className="text-dim hover:text-primary transition-colors">
                  <MessageCircle size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
