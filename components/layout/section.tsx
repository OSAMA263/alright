type PropTypes = {
  children: React.ReactNode;
  id: string;
  className?: string;
};

export default function Section({
  children,
  id,
  className,
}: PropTypes) {
  return (
    <section className={`py-4 min-h-dvh flex items-center relative ${className ?? ""}`} id={id}>
      {children}
    </section>
  );
}
