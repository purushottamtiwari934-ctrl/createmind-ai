export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        <div className="text-2xl font-bold tracking-tight">
          CreateMind <span className="text-violet-500">AI</span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm">

          <a href="#">Home</a>

          <a href="#">Work</a>

          <a href="#">Services</a>

          <a href="#">Studio</a>

          <a href="#">Pricing</a>

          <a href="#">Contact</a>

        </nav>

        <button className="bg-violet-600 hover:bg-violet-500 px-5 py-3 rounded-xl font-medium transition">
          Start a Project
        </button>

      </div>
    </header>
  );
}
