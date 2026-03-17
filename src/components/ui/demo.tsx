import { MetallicTiltCard } from "@/components/ui/metallic-tilt-card";

export default function DemoOne() {
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <MetallicTiltCard metal="gold" width={420} />
    </div>
  );
}
