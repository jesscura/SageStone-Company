import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

// Shared observer cache for performance optimization
// Uses a Map to cache observers by their configuration key
const observerCache = new Map<string, IntersectionObserver>();
const elementCallbacks = new Map<Element, (entry: IntersectionObserverEntry) => void>();
const observerRefCounts = new Map<string, number>();

function getObserverKey(threshold: number, rootMargin: string): string {
  return `${threshold}-${rootMargin}`;
}

function getSharedObserver(
  threshold: number,
  rootMargin: string
): IntersectionObserver {
  const key = getObserverKey(threshold, rootMargin);
  
  if (!observerCache.has(key)) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const callback = elementCallbacks.get(entry.target);
          if (callback) {
            callback(entry);
          }
        });
      },
      { threshold, rootMargin }
    );
    observerCache.set(key, observer);
    observerRefCounts.set(key, 0);
  }
  
  // Increment reference count
  observerRefCounts.set(key, (observerRefCounts.get(key) || 0) + 1);
  
  return observerCache.get(key)!;
}

function releaseObserver(threshold: number, rootMargin: string): void {
  const key = getObserverKey(threshold, rootMargin);
  const refCount = (observerRefCounts.get(key) || 1) - 1;
  
  if (refCount <= 0) {
    // No more references, clean up the observer
    const observer = observerCache.get(key);
    if (observer) {
      observer.disconnect();
      observerCache.delete(key);
      observerRefCounts.delete(key);
    }
  } else {
    observerRefCounts.set(key, refCount);
  }
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = useCallback((entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
      if (triggerOnce && ref.current) {
        const observer = observerCache.get(getObserverKey(threshold, rootMargin));
        if (observer) {
          observer.unobserve(ref.current);
        }
        elementCallbacks.delete(ref.current);
      }
    } else if (!triggerOnce) {
      setIsVisible(false);
    }
  }, [triggerOnce, threshold, rootMargin]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = getSharedObserver(threshold, rootMargin);
    elementCallbacks.set(element, handleIntersection);
    observer.observe(element);

    return () => {
      observer.unobserve(element);
      elementCallbacks.delete(element);
      // Release the observer reference when component unmounts
      releaseObserver(threshold, rootMargin);
    };
  }, [threshold, rootMargin, handleIntersection]);

  return { ref, isVisible };
}

// Animation variants for different effects
export const animationClasses = {
  fadeIn: {
    hidden: 'opacity-0',
    visible: 'opacity-100 transition-opacity duration-700 ease-out',
  },
  fadeInUp: {
    hidden: 'opacity-0 translate-y-8',
    visible: 'opacity-100 translate-y-0 transition-all duration-700 ease-out',
  },
  fadeInDown: {
    hidden: 'opacity-0 -translate-y-8',
    visible: 'opacity-100 translate-y-0 transition-all duration-700 ease-out',
  },
  fadeInLeft: {
    hidden: 'opacity-0 -translate-x-8',
    visible: 'opacity-100 translate-x-0 transition-all duration-700 ease-out',
  },
  fadeInRight: {
    hidden: 'opacity-0 translate-x-8',
    visible: 'opacity-100 translate-x-0 transition-all duration-700 ease-out',
  },
  scaleIn: {
    hidden: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100 transition-all duration-700 ease-out',
  },
  slideInUp: {
    hidden: 'opacity-0 translate-y-12',
    visible: 'opacity-100 translate-y-0 transition-all duration-700 ease-out',
  },
};

export type AnimationType = keyof typeof animationClasses;
