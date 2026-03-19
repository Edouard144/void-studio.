import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((window.scrollY / total) * 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
};

const FloatingElements = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight * 0.5);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <ScrollProgress />
      
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        )}
        <a
          href="https://wa.me/250791980789"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-success/90 text-background flex items-center justify-center hover:ring-2 hover:ring-primary transition-all duration-300 rounded-full"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle size={20} />
        </a>
      </div>
    </>
  );
};

export default FloatingElements;
