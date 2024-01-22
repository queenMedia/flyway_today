import { useEffect, useRef, useState } from 'react';

function useIntersectionObserver(targetRef, options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        } else {
          setIsIntersecting(false);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    const targetElement = targetRef.current;

    if (targetElement) {
      observer.observe(targetElement);

      return () => {
        observer.disconnect();
      };
    }
  }, [targetRef, options]);

  return isIntersecting;
}

export default useIntersectionObserver;
