export default function GlowingCircle({
  className,
}: {
  className: string;
}) {
  return (
    <div
      style={{
        background:
          "radial-gradient(circle, rgb(0, 203, 176, 0.1),transparent 70%)",
      }}
      className={className ?? ""}
    />
  );
}
