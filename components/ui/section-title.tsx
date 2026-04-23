import MotionEle from "./animated-ele";
import PlainBtn from "./plain-btn";

type PropsType = {
  title: string;
  className?: string;
  number: number;
  y?: boolean;
};

export default function SectionTitle(props: PropsType) {
  const { title, className, number, y } = props;

  return (
    <MotionEle
      speed={0.7}
      opacity
      y={y ? 20 : 0}
      x={y ? 0 : -30}
      className={`flex items-end gap-3 mb-10 ${className ?? ""}`}
    >
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
    </MotionEle>
  );
}
