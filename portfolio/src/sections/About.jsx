import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src="/image.jpg" alt="Profile"
          className="w-56 h-56 rounded-2xl object-cover shadow-[0_10px_30px_rgba(0,0,0,0.35)] mx-auto md:mx-0"
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className="mt-3 text-white/70">
            I’m an AI/ML student at PES University passionate about building intuitive, interactive experiences.
            I blend model prototyping with 3D and motion to simplify complex systems. Focused on AI, web development,
            and making tech feel human.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
