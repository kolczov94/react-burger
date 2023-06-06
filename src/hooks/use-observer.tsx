import { useState, useCallback, useRef, useEffect } from "react";

export type TAddObserverTarget = (target: {
  key: string;
  target: HTMLElement;
}) => void;

export type TScrollToTarget = (targetKey: string) => void;

export const useObserver = () => {
  const [visibleSectionId, setVisibleSectionId] = useState<string>("");
  const [targets, setTargets] = useState<{ [name: string]: HTMLElement }>({});
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
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

  const addObserverTarget = useCallback<TAddObserverTarget>((target) => {
    setTargets((prev) => ({ ...prev, [target.key]: target.target }));
  }, []);

  const scrollToTarget = useCallback(
    (targetKey: string): void => {
      const target = targets[targetKey];
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
    [targets]
  );

  return { rootRef, addObserverTarget, visibleSectionId, scrollToTarget };
};
