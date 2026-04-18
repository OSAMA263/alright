type PropsType = {
  title: string;
  className?: string;
  number: number;
};

export default function SectionTitle(props: PropsType) {
  const { title, className, number } = props;

  return (
    <div className={`flex items-end gap-3 ${className ?? ""}`}>
      <span className="text-lightTeal text-xs">0{number}.</span>
      <h2 className="lg:text-5xl text-4xl capitalize text-white">{title}</h2>
      <div className="w-full h-px bg-white/10 self-center" />
    </div>
  );
}
