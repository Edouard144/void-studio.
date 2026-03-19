const Terms = () => (
  <div className="min-h-screen bg-background">
    <div className="container-void py-32">
      <a href="/" className="font-mono-accent text-primary text-[12px] hover:underline">← Back to Home</a>
      <h1 className="font-display text-4xl text-foreground mt-8 tracking-wider">Terms of Service</h1>
      <div className="gold-line-left w-24 mt-4" />
      <div className="font-body text-foreground/70 mt-10 space-y-6 max-w-3xl text-base leading-relaxed">
        <p>Last updated: March 2026</p>
        <p>These terms govern your use of the VOID STUDIO website and services. By engaging our services, you agree to these terms.</p>
        <h2 className="font-display text-xl text-foreground tracking-wider pt-4">Services</h2>
        <p>VOID STUDIO provides digital product development, design, and consulting services as described in individual project agreements.</p>
        <h2 className="font-display text-xl text-foreground tracking-wider pt-4">Payment</h2>
        <p>Payment structure is 50% upon project initiation and 50% upon delivery and approval. All prices are in USD unless otherwise agreed.</p>
        <h2 className="font-display text-xl text-foreground tracking-wider pt-4">Intellectual Property</h2>
        <p>Upon full payment, all source code, designs, and assets created for your project transfer entirely to you. VOID STUDIO retains no ownership rights.</p>
        <h2 className="font-display text-xl text-foreground tracking-wider pt-4">Contact</h2>
        <p>Questions about these terms? Contact us at <a href="mailto:void.studio@gmail.com" className="text-primary hover:underline">void.studio@gmail.com</a>.</p>
      </div>
    </div>
  </div>
);

export default Terms;
