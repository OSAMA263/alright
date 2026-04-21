"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ToastContextType = {
  message: string | null;
  setMessage: (message: string) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [message, setMessage] = useState<string | null>(null);
useEffect(()=>{
console.log(message)

},[message])
  return (
    <ToastContext.Provider value={{ message, setMessage }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);

  if (!ctx) {
    throw new Error("useToast must be used inside ToastProvider");
  }

  return ctx;
}
