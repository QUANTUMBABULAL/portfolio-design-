import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Robot({ url }) {
  const group = useRef();
  const { scene } = useGLTF(url);

  // track mouse globally
  const mouseRef = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseRef.current = { x, y };
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // initial scale
  useEffect(() => {
    if (group.current) {
      group.current.scale.set(1.75, 1.75, 1.75); // slightly bigger
    }
  }, []);

  const BASE_Y_OFFSET = -1.2; // lower the robot globally
  const lerp = (a, b, t) => a + (b - a) * t;

  // section breakpoints
  const computeBreaks = () => ({
    hero: 0,
    about: window.innerHeight * 0.85,
    skills: window.innerHeight * 1.8,
    projects: window.innerHeight * 2.8,
    contact: window.innerHeight * 3.6,
  });
  const breaks = useRef(computeBreaks());
  useEffect(() => {
    const onResize = () => (breaks.current = computeBreaks());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useFrame((state) => {
    if (!group.current) return;

    const t = state.clock.getElapsedTime();
    const mouse = mouseRef.current;
    const yScroll = window.scrollY;
    const b = breaks.current;

    // floating around BASE_Y_OFFSET
    const baseY = Math.sin(t * 1.2) * 0.12 + BASE_Y_OFFSET;
    group.current.position.y = lerp(group.current.position.y, baseY, 0.08);

    // look at pointer
    const targetYRot = mouse.x * 0.6;
    const targetXRot = -mouse.y * 0.35;
    group.current.rotation.y = lerp(group.current.rotation.y, targetYRot, 0.09);
    group.current.rotation.x = lerp(group.current.rotation.x, targetXRot, 0.09);

    // scroll moods
    let targetScale = 1.75;
    let targetZ = 0;

    if (yScroll > b.about && yScroll <= b.skills) {
      group.current.rotation.x = lerp(group.current.rotation.x, -0.3, 0.06);
      group.current.position.y = lerp(group.current.position.y, baseY - 0.15, 0.06);
    } else if (yScroll > b.projects && yScroll <= b.contact) {
      group.current.rotation.y += 0.01;
      targetScale = 1.85;
      targetZ = -0.1;
    } else if (yScroll > b.contact) {
      group.current.rotation.x = lerp(group.current.rotation.x, 0.18, 0.06);
    }

    const s = group.current.scale.x;
    const ns = lerp(s, targetScale, 0.08);
    group.current.scale.set(ns, ns, ns);
    group.current.position.z = lerp(group.current.position.z, targetZ, 0.08);
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

// preload model for faster loading
useGLTF.preload("/robot.glb");
