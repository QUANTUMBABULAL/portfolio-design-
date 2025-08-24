import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="text-white/70 mt-3">Let’s collaborate on something awesome.</p>
          <div className="mt-6 space-y-2">
            <a href="mailto:chinmaisukumar@gmail.com" className="block hover:text-cyan-300 transition">chinmaisukumar@gmail.com</a>
            <a target="_blank" href="https://github.com/QUANTUMBABULAL" className="block hover:text-cyan-300 transition">GitHub:https://github.com/QUANTUMBABULAL</a>
            <a target="_blank" href="https://www.linkedin.com/in/chinmai-as-7882b024b/?originalSubdomain=in" className="block hover:text-cyan-300 transition">LinkedIn:https://www.linkedin.com/in/chinmai-as</a>
          </div>
        </div>
        <motion.form
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          onSubmit={(e) => { e.preventDefault(); alert("Sent! (Wire up EmailJS/Formspree later)"); }}
        >
          <label className="block text-sm mb-2">Name</label>
          <input className="w-full mb-4 px-4 py-2 rounded-xl bg-black/40 border border-white/10 outline-none" required />
          <label className="block text-sm mb-2">Email</label>
          <input type="email" className="w-full mb-4 px-4 py-2 rounded-xl bg-black/40 border border-white/10 outline-none" required />
          <label className="block text-sm mb-2">Message</label>
          <textarea className="w-full mb-6 px-4 py-2 rounded-xl bg-black/40 border border-white/10 outline-none min-h-[120px]" required />
          <button className="px-5 py-3 rounded-2xl bg-cyan-400/15 border border-cyan-300/40 hover:bg-cyan-400/25 transition">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
