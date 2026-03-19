const Footer = () => {
  return (
    <footer className="border-t border-primary/20">
      <div className="container-void py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-lg text-foreground tracking-[0.2em]">VOID STUDIO</h3>
            <p className="font-body text-dim mt-3">"We Build From The Void."</p>
            <p className="font-mono-accent text-dim text-[11px] mt-2">Kigali, Rwanda — Global.</p>
            <p className="font-mono-accent text-dim text-[11px] mt-1">Founded 2023</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono-accent text-dim text-[11px] uppercase mb-4">Navigation</p>
            {["About", "Services", "Our Work", "Team", "Pricing", "Contact"].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="block font-body text-foreground/70 hover:text-primary transition-colors mb-2"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Services */}
          <div>
            <p className="font-mono-accent text-dim text-[11px] uppercase mb-4">Services</p>
            {["Digital Products", "Mobile Applications", "AI Solutions", "3D Experiences", "DevOps & Cloud", "Game Development"].map(s => (
              <p key={s} className="font-body text-foreground/70 mb-2">{s}</p>
            ))}
          </div>

          {/* Connect */}
          <div>
            <p className="font-mono-accent text-dim text-[11px] uppercase mb-4">Connect</p>
            <a href="mailto:void.studio@gmail.com" className="block font-body text-foreground/70 hover:text-primary transition-colors mb-2">
              void.studio@gmail.com
            </a>
            <a href="https://wa.me/250791980789" className="block font-body text-foreground/70 hover:text-primary transition-colors mb-2">
              +250 791 980 789
            </a>
            <a href="https://github.com/VoidStudio" className="block font-body text-foreground/70 hover:text-primary transition-colors mb-2">
              GitHub
            </a>
            <a href="https://linkedin.com/company/void-studio" className="block font-body text-foreground/70 hover:text-primary transition-colors mb-2">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary/10">
        <div className="container-void py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono-accent text-dim text-[11px]">
            © 2026 VOID STUDIO. All rights reserved. Built from the Void — Kigali, Rwanda.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="font-mono-accent text-dim text-[11px] hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="font-mono-accent text-dim text-[11px] hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
