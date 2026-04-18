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
    <section className={`min-h-dvh flex items-center ${className ?? ""}`} id={id}>
      {children}
    </section>
  );
}
