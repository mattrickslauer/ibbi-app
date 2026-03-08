"use client";

import { useEffect, useRef, useState } from "react";

export default function RevealSection({
  children,
  className = "",
  animation = "animate-fade-up",
}: {
  children: React.ReactNode;
  className?: string;
  animation?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${visible ? animation : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}
