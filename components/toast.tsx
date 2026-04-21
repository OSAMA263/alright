/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useToast } from "@/context/toast-context";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Toast() {
  const [steps, setSteps] = useState([]);
  const { message } = useToast();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // get the steps form the LS
    const data = JSON.parse(localStorage.getItem("steps") ?? "[]");
    setSteps(data);

    if (!message) return;

    setVisible(true);
    const timer = setTimeout(
      () => setVisible(false),
      steps?.length === 3 ? 1000 * 60 * 10 : 1000 * 10,
    );

    return () => clearTimeout(timer);
  }, [message, steps.length]);

  return (
    <AnimatePresence>
      {visible && message && (
        <motion.div
          initial={{ y: "200%" }}
          animate={{ y: "0%" }}
          exit={{ y: "200%" }}
          transition={{ duration: 0.5 }}
          className="fixed w-fit z-50 bg-darkerTeal font-normal right-4 p-2 px-3 rounded bottom-4 flex items-center gap-2"
        >
          <span className="text-darkTeal text-xs font-semibold font-mono">{`${steps?.length}/3`}</span>
          {steps?.length === 3 ? (
            <>
              {message}
              <Link
                className="text-darkTeal underline"
                href="https://osama263.github.io/Portfolio/"
              >
                good luck
              </Link>
            </>
          ) : (
            message
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
