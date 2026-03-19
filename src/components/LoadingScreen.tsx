import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 700),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 4000),
      setTimeout(() => setPhase(4), 7000),
    ];
    const done = setTimeout(onComplete, 10000);
    return () => { timers.forEach(clearTimeout); clearTimeout(done); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-center flex flex-col items-center">
            <motion.img
              src="/logoonloading.png"
              alt="vStudio Logo"
              className="w-32 md:w-48 h-auto mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: phase >= 1 ? 1 : 0, scale: phase >= 1 ? 1 : 0.8 }}
              transition={{ duration: 0.6 }}
            />
            <motion.h1
              className="font-display text-3xl md:text-5xl tracking-[0.2em] text-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 1 ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            >
              VSTUDIO
            </motion.h1>
            <motion.div
              className="mx-auto mt-4 gold-line"
              initial={{ width: 0 }}
              animate={{ width: phase >= 2 ? 200 : 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ height: 1 }}
            />
            <motion.p
              className="font-body text-lg text-dim mt-4 tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 3 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              We Build From The Void.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
