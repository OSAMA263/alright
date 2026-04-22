import Image from "next/image";

export default function Loading() {
  return (
      <div
        className="h-dvh w-full items-center justify-center flex"
      >
        <Image
          src="/loading-icon.gif"
          width={60}
          height={60}
          alt="loading"
          unoptimized
          loading="eager"
        />
      </div>
  );
}
