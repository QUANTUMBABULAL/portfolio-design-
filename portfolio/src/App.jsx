import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Robot from "./components/Robot";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />

      {/* 3D stage behind content */}
      <div className="fixed inset-0">
        <Canvas
          camera={{ position: [0, 1.4, 4], fov: 50 }}
          gl={{ antialias: true }}
          // keep pointer events OFF so your page is clickable
          style={{ pointerEvents: "none" }}
        >
          {/* starry background */}
          <Stars
            radius={60}
            depth={50}
            count={1500}
            factor={4}
            saturation={0}
            fade
            speed={0.25}
          />
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <Suspense fallback={<Loader />}>
            <Robot url="/robot.glb" />
          </Suspense>
        </Canvas>

        {/* soft radial vignette + gradient tint */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_30%,rgba(0,242,255,0.10),transparent),linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_65%,rgba(0,0,0,0.9)_100%)]" />
      </div>

      {/* content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
