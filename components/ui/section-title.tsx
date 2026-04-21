import PlainBtn from "../plain-btn";

type PropsType = {
  title: string;
  className?: string;
  number: number;
};

export default function SectionTitle(props: PropsType) {
  const { title, className, number } = props;

  return (
    <div className={`flex items-end gap-3 mb-10 ${className ?? ""}`}>
      <span className="text-lightTeal text-xs font-mono">
        0
        {number == 0 ? (
          <PlainBtn step={2}>{number}</PlainBtn>
        ) : (
          number
        )}
        .
      </span>
      <h2 className="lg:text-5xl text-4xl capitalize text-white">
        {title}
      </h2>
      <div className="w-[30%] h-px bg-white/10" id="gray-line" />
    </div>
  );
}
