import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="px-5 py-3 rounded-xl bg-black/60 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
        <p className="text-cyan-300 font-medium">Loading… {progress.toFixed(0)}%</p>
      </div>
    </Html>
  );
}
