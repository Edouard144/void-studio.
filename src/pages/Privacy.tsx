const Privacy = () => (
  <div className="min-h-screen bg-background">
    <div className="container-void py-32">
      <a href="/" className="font-mono-accent text-primary text-[12px] hover:underline">← Back to Home</a>
      <h1 className="font-display text-4xl text-foreground mt-8 tracking-wider">Privacy Policy</h1>
      <div className="gold-line-left w-24 mt-4" />
      <div className="font-body text-foreground/70 mt-10 space-y-6 max-w-3xl text-base leading-relaxed">
        <p>Last updated: March 2026</p>
        <p>VOID STUDIO ("we", "us") respects your privacy. This policy explains how we collect, use, and protect your personal information when you use our website or services.</p>
        <h2 className="font-display text-xl text-foreground tracking-wider pt-4">Information We Collect</h2>
        <p>We collect information you provide directly: name, email, phone number, and project details submitted through our contact form. We also collect basic analytics data (page views, referrer) to improve our website.</p>
        <h2 className="font-display text-xl text-foreground tracking-wider pt-4">How We Use Your Information</h2>
        <p>We use your information solely to respond to your inquiries, deliver our services, and improve our website. We never sell your data to third parties.</p>
        <h2 className="font-display text-xl text-foreground tracking-wider pt-4">Contact</h2>
        <p>For privacy concerns, contact us at <a href="mailto:void.studio@gmail.com" className="text-primary hover:underline">void.studio@gmail.com</a>.</p>
      </div>
    </div>
  </div>
);

export default Privacy;
