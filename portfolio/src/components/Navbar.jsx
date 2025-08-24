export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <nav className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 text-lg font-semibold tracking-wide">
        <img
  src="/image.jpg"
  alt="Profile"
  className="w-8 h-8 object-cover rounded-full"
/>

          CHINMAI<span className="text-cyan-400">.</span>
        </a>
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:text-cyan-300 transition">About</a>
          <a href="#skills" className="hover:text-cyan-300 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-300 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-300 transition">Contact</a>
        </div>
      </nav>
      <div className="h-px w-full bg-white/10" />
    </header>
  );
}