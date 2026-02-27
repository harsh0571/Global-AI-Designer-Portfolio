import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations.
 * Returns [ref, isVisible] — attach the ref to any element.
 */
export function useScrollReveal(options = {}) {
    const { threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = options;
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(el); // Only animate once
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return [ref, isVisible];
}

/**
 * ScrollReveal wrapper component.
 * Wraps children with a fade-in-up animation that triggers on scroll.
 */
export function ScrollReveal({ children, delay = 0, className = '', ...props }) {
    const [ref, isVisible] = useScrollReveal();

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
                ...props.style,
            }}
            {...props}
        >
            {children}
        </div>
    );
}

/**
 * Staggered scroll reveal for grid items.
 * Each child gets a progressively longer delay.
 */
export function StaggerReveal({ children, baseDelay = 0, stagger = 0.1, className = '' }) {
    const [ref, isVisible] = useScrollReveal();

    return (
        <div ref={ref} className={className}>
            {Array.isArray(children)
                ? children.map((child, i) => (
                    <div
                        key={i}
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                            transition: `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${baseDelay + i * stagger}s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${baseDelay + i * stagger}s`,
                        }}
                    >
                        {child}
                    </div>
                ))
                : children}
        </div>
    );
}
