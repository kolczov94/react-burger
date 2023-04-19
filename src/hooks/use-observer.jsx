import { useState, useMemo } from "react";

export function useObserver(rootElement) {
  const [visibleSectionId, setVisibleSectionId] = useState("");

  const observer = useMemo(() => {
    console.log("RENDER OBS")
    return new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSectionId(entry.target.id);
          }
        });
      },
      {
        root: rootElement,
        rootMargin: "0px 0px -90% 0px",
        threshold: 0,
      }
    );
  }, [rootElement]);

  return { observer, visibleSectionId };
}
