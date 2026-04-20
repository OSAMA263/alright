type PropTypes = {
  children: React.ReactNode;
  className?: string;
};

export default function PageContainer({
  children,
  className,
}: PropTypes) {
  return (
    <div
      className={`2xl:w-[65%] space-y-14! xl:w-[75%] lg:w-[85%] w-[95%] mx-auto ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
