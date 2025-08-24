import { motion } from "framer-motion";

const projects = [
  { title: "Vision Classifier", desc: "CNN with Grad-CAM visualization.", tags: ["PyTorch", "React"] },
  { title: "RAG Chat", desc: "Retrieval-augmented QA on PDFs.", tags: ["LangChain", "FAISS"] },
  { title: "Pose Estimator", desc: "Real-time keypoint tracking demo.", tags: ["TF.js", "WebGL"] },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-400/10 transition"
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-white/70 mt-2">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
