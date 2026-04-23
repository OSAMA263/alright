"use client";

import { useToast } from "@/context/toast-context";

type PropsType = {
  children: React.ReactNode;
  step: 0 | 1 | 2;
  className?: string;
};

export default function PlainBtn(props: PropsType) {
  const { step, children, className } = props;
  const { setMessage } = useToast();

  function stepsHandler() {
    const stored = JSON.parse(localStorage.getItem("steps") ?? "[]");

    // check if step already exists
    if (stored.includes(step)) return;

    // add step
    localStorage.setItem("steps", JSON.stringify([...stored, step]));

    // show toast based on how many steps exist AFTER update
    setMessage(mesg[stored.length]);
  }

  return (
    <button onClick={stepsHandler} className={` ${className ?? ""}`}>
      {children}
    </button>
  );
}

const mesg = [
  "The worst that could happen is dying?, which freeing you from this world.",
  "The chase is better than the catch.",
  "Hint: we all look the same but we are not.",
];
