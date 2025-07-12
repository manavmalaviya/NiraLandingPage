import { useEffect, useState } from "react";

export function useScrollOffset() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollContainer = document.getElementById("scrollable-div");
    if (!scrollContainer) return;

    function handleScroll() {
      const offset = scrollContainer?.scrollTop || 0;
      setScrolled(offset > 30);
    }
    scrollContainer?.addEventListener("scroll", handleScroll);
    return () => {
      scrollContainer?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrolled;
}
