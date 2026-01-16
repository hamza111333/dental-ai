import { InlineWidget } from "react-calendly";
import { useEffect, useRef, useState } from "react";

export function StableCalendly() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true); // only mount when visible
          observer.disconnect(); // stop observing
        }
      },
      {
        threshold: 0.25,
        rootMargin: "200px", // load slightly before visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="min-h-[700px]">
      {show && (
        <InlineWidget
          url="https://calendly.com/hamza-vegeta750/30min"
          styles={{
            height: "700px",
            width: "100%",
          }}
        />
      )}
    </div>
  );
}
