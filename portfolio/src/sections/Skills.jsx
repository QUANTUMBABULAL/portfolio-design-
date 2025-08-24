import { motion } from "framer-motion";

const skills = [
  "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas",
  "React", "Three.js", "R3F", "Framer Motion", "Tailwind"
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center hover:border-cyan-300/50 hover:bg-cyan-400/10 transition"
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              {s}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
