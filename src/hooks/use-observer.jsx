import { useState, useCallback, useRef, useEffect } from "react";

export function useObserver() {
  const [visibleSectionId, setVisibleSectionId] = useState("");
  const [targets, setTargets] = useState({});
  const rootRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSectionId(entry.target.id);
          }
        });
      },
      { root: rootRef.current, rootMargin: "0px 0px -90% 0px" }
    );
    Object.keys(targets).forEach((key) => {
      observer.observe(targets[key]);
    });
    return () => observer.disconnect();
  }, [targets]);

  const addObserverTarget = useCallback((target) => {
    setTargets((prev) => ({ ...prev, [target.key]: target.target }));
  }, []);

  const scrollToTarget = useCallback(
    (targetKey) => {
      const target = targets[targetKey];
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
    [targets]
  );

  return { rootRef, addObserverTarget, visibleSectionId, scrollToTarget };
}
