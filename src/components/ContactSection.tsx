import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Mail, MapPin, MessageCircle, Clock } from "lucide-react";

const serviceOptions = ["Digital Product", "Mobile App", "Brand & Design", "AI Solution", "3D Experience", "DevOps", "Game Dev"];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [kigaliTime, setKigaliTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString("en-US", { timeZone: "Africa/Kigali", hour: "2-digit", minute: "2-digit", hour12: true });
      setKigaliTime(time);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const toggleService = (s: string) => {
    setSelectedServices(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container-void">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono-accent text-dim">14 // CONTACT</span>
          <h2 className="text-3xl md:text-5xl font-display text-foreground mt-4">
            Initiate a <span className="text-gold">Mission</span>
          </h2>
          <p className="font-body text-lg text-dim mt-3">Tell us what you need to build. We will tell you how.</p>
          <div className="gold-line-left w-24 mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-primary" strokeWidth={1.5} />
              <div>
                <p className="font-mono-accent text-dim text-[11px] uppercase">Email</p>
                <a href="mailto:void.studio@gmail.com" className="font-body text-lg text-foreground hover:text-primary transition-colors">
                  void.studio@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MessageCircle className="w-5 h-5 text-primary" strokeWidth={1.5} />
              <div>
                <p className="font-mono-accent text-dim text-[11px] uppercase">WhatsApp</p>
                <a href="https://wa.me/250791980789" target="_blank" rel="noopener noreferrer" className="font-body text-lg text-foreground hover:text-primary transition-colors">
                  +250 791 980 789
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-primary" strokeWidth={1.5} />
              <div>
                <p className="font-mono-accent text-dim text-[11px] uppercase">Location</p>
                <p className="font-body text-lg text-foreground">Kigali, Rwanda</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-5 h-5 text-primary" strokeWidth={1.5} />
              <div>
                <p className="font-mono-accent text-dim text-[11px] uppercase">Kigali Time</p>
                <p className="font-body text-lg text-foreground">{kigaliTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="font-mono-accent text-success">ACCEPTING NEW PROJECTS</span>
            </div>
            <div className="card-void p-6 mt-6">
              <p className="font-body text-dim italic">
                "We respond to every message within 24 hours — guaranteed. 
                From first message to project brief takes less than 48 hours."
              </p>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {submitted ? (
              <div className="card-void p-12 text-center">
                <h3 className="font-display text-2xl text-primary">MISSION RECEIVED</h3>
                <p className="font-body text-foreground/70 mt-4">We will contact you within 24 hours.</p>
              </div>
            ) : (
              <>
                {/* Step indicator */}
                <div className="flex items-center gap-2 mb-8">
                  {[1, 2, 3].map(s => (
                    <div key={s} className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full transition-colors ${s <= step ? "bg-primary" : "bg-border"}`} />
                      {s < 3 && <div className={`w-8 h-px ${s < step ? "bg-primary" : "bg-border"}`} />}
                    </div>
                  ))}
                  <span className="font-mono-accent text-dim ml-2 text-[11px]">STEP {step} OF 3</span>
                </div>

                {step === 1 && (
                  <div>
                    <p className="font-display text-sm text-foreground tracking-wider mb-6">SELECT SERVICES NEEDED</p>
                    <div className="flex flex-wrap gap-3">
                      {serviceOptions.map(s => (
                        <button
                          key={s}
                          onClick={() => toggleService(s)}
                          className={`font-mono-accent text-[12px] px-4 py-3 border transition-all duration-300 ${
                            selectedServices.includes(s)
                              ? "border-primary text-primary bg-primary/5"
                              : "border-border text-dim hover:border-primary/50"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => setStep(2)}
                      className="btn-gold mt-8"
                      disabled={selectedServices.length === 0}
                    >
                      <span>Continue</span>
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <p className="font-display text-sm text-foreground tracking-wider mb-4">PROJECT DETAILS</p>
                    <div>
                      <input
                        type="text"
                        placeholder="Project name or working title"
                        className="w-full bg-transparent border-b border-border focus:border-primary outline-none pb-3 font-body text-foreground transition-colors placeholder:text-dim"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Describe your project"
                        rows={4}
                        className="w-full bg-transparent border-b border-border focus:border-primary outline-none pb-3 font-body text-foreground transition-colors placeholder:text-dim resize-none"
                      />
                    </div>
                    <div>
                      <select className="w-full bg-transparent border-b border-border focus:border-primary outline-none pb-3 font-body text-foreground transition-colors appearance-none">
                        <option value="" className="bg-card">Estimated budget</option>
                        <option value="500-800" className="bg-card">$500 – $800</option>
                        <option value="1000-1500" className="bg-card">$1,000 – $1,500</option>
                        <option value="1600-3000" className="bg-card">$1,600 – $3,000</option>
                        <option value="discuss" className="bg-card">Let's discuss</option>
                      </select>
                    </div>
                    <div className="flex gap-4">
                      <button onClick={() => setStep(1)} className="btn-white">
                        <span>Back</span>
                      </button>
                      <button onClick={() => setStep(3)} className="btn-gold">
                        <span>Continue</span>
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <p className="font-display text-sm text-foreground tracking-wider mb-4">YOUR DETAILS</p>
                    <input
                      type="text"
                      placeholder="Full name"
                      className="w-full bg-transparent border-b border-border focus:border-primary outline-none pb-3 font-body text-foreground transition-colors placeholder:text-dim"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full bg-transparent border-b border-border focus:border-primary outline-none pb-3 font-body text-foreground transition-colors placeholder:text-dim"
                    />
                    <input
                      type="tel"
                      placeholder="WhatsApp number"
                      className="w-full bg-transparent border-b border-border focus:border-primary outline-none pb-3 font-body text-foreground transition-colors placeholder:text-dim"
                    />
                    <div className="flex gap-4 mt-4">
                      <button onClick={() => setStep(2)} className="btn-white">
                        <span>Back</span>
                      </button>
                      <button onClick={() => setSubmitted(true)} className="btn-gold">
                        <span>Launch Mission</span>
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
