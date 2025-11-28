import { ReactNode, forwardRef } from 'react';
import { useScrollAnimation, animationClasses, AnimationType } from '../hooks/useScrollAnimation';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}

export function ScrollAnimation({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className = '',
  threshold = 0.1,
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold });
  const animationClass = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={`${isVisible ? animationClass.visible : animationClass.hidden} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Stagger animation wrapper for lists
interface StaggerAnimationProps {
  children: ReactNode[];
  animation?: AnimationType;
  staggerDelay?: number;
  className?: string;
  itemClassName?: string;
}

export function StaggerAnimation({
  children,
  animation = 'fadeInUp',
  staggerDelay = 100,
  className = '',
  itemClassName = '',
}: StaggerAnimationProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const animationClass = animationClasses[animation];

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`${isVisible ? animationClass.visible : animationClass.hidden} ${itemClassName}`}
          style={{ transitionDelay: `${index * staggerDelay}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
