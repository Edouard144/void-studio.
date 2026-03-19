import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const posts = [
  { title: "How We Built a Fintech Platform in 8 Weeks", category: "CASE STUDY", date: "March 2026", read: "5 min read", excerpt: "Building SmartSCCO taught us that fintech is not about features — it is about trust. Here is how we approached security, fraud detection, and data integrity from day one." },
  { title: "Why African Startups Need Better Backend Infrastructure", category: "ENGINEERING", date: "February 2026", read: "4 min read", excerpt: "Most African startups fail not because of bad ideas but because their technical foundation cannot scale. Here is what we have learned building systems for the East African market." },
  { title: "The Real Cost of Bad Software for Your Business", category: "BUSINESS", date: "January 2026", read: "3 min read", excerpt: "Cheap software always costs more in the long run. We break down the real financial and reputational cost of poorly built digital products." },
];

const BlogSection = () => {
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
          <span className="font-mono-accent text-dim">13 // TRANSMISSIONS</span>
          <h2 className="text-3xl md:text-5xl font-display text-foreground mt-4">
            Trans<span className="text-gold">missions</span>
          </h2>
          <p className="font-body text-lg text-dim mt-3">Insights from the engineers building the future.</p>
          <div className="gold-line-left w-24 mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              className="card-void group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
            >
              <div className="h-40 bg-surface flex items-center justify-center relative overflow-hidden">
                <span className="font-display text-sm text-primary/20 tracking-widest px-4 text-center">{post.title}</span>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="badge-void text-[10px]">{post.category}</span>
                  <span className="font-mono-accent text-dim text-[11px]">{post.read}</span>
                </div>
                <h3 className="font-display text-base text-foreground tracking-wide leading-snug">{post.title}</h3>
                <p className="font-body text-dim text-sm mt-3">{post.excerpt}</p>
                <p className="font-mono-accent text-dim text-[11px] mt-4">{post.date}</p>
                <a href="#" className="inline-block font-mono-accent text-primary text-[12px] mt-4 hover:underline transition-all">
                  READ TRANSMISSION →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
