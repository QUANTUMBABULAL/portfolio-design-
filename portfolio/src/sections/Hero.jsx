import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center">
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-24 md:pt-32">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          Hi, I’m <span className="text-cyan-400">Chinmai</span> —{" "}
          <span className="text-fuchsia-400">AI/ML</span> student crafting intelligent, playful UIs.
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl text-white/70"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.05 }}
        >
          Robot mascot reacts to your pointer and transforms as you scroll. Scroll down to see it think, show off, and wave 👋
        </motion.p>

        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
        >
          <a href="#projects" className="px-5 py-3 rounded-2xl bg-cyan-400/15 border border-cyan-300/40 hover:bg-cyan-400/25 transition">View Projects</a>
          <a href="#contact" className="px-5 py-3 rounded-2xl border border-white/15 hover:bg-white/10 transition">Contact Me</a>
        </motion.div>
      </div>
    </section>
  );
}
