import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const badges = [
  { num: 10, suffix: "+", label: "Projects Delivered" },
  { num: 5, suffix: "", label: "Specialist Engineers" },
  { num: 3, suffix: "", label: "Years Building" },
  { num: 100, suffix: "%", label: "Completion Rate" },
  { num: 5, suffix: "", label: "Industries Served" },
  { num: 24, suffix: "h", label: "Response Guarantee" },
  { num: 30, suffix: "", label: "Day Post-Launch Support" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const TrustBadges = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 border-y border-border overflow-hidden" ref={ref}>
      <div className="container-void">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono-accent text-dim">03 // TRUST</span>
          <h2 className="text-2xl md:text-3xl font-display text-foreground mt-3">
            Why Clients <span className="text-gold">Trust Us</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-4 mt-10">
          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              className="card-void px-6 py-4 flex-1 min-w-[140px]"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i }}
            >
              <div className="text-2xl font-display text-primary">
                <Counter target={b.num} suffix={b.suffix} />
              </div>
              <p className="font-mono-accent text-dim text-[11px] mt-1">{b.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
