export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/20 blur-3xl -top-40 -left-32" />

      <div className="absolute w-[500px] h-[500px] rounded-full bg-secondary/20 blur-3xl bottom-0 -right-20" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">

        <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-6">
          AI Creative Production Studio
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          TURN IDEAS
          <br />
          INTO VISUAL IMPACT.
        </h1>

        <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          We turn ideas into visual impact through AI-powered creative production.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <button className="bg-primary hover:opacity-90 transition px-8 py-4 rounded-xl font-semibold">
            Start a Project
          </button>

          <button className="border border-white/20 hover:border-primary transition px-8 py-4 rounded-xl">
            View Our Work
          </button>

        </div>

        <div className="mt-16 text-gray-400">
          Human Imagination × AI Production × Creative Direction
        </div>

      </div>

    </section>
  );
}
