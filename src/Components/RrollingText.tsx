import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RollingText: React.FC = () => {
    const textRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!textRef.current || !containerRef.current) return;

        gsap.to(textRef.current, {
            x: '-20%',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const text = "FULL STACK DEVELOPER | WEB3 | FITNESS | ";

    return (
        <div ref={containerRef} className="h-[10vw] w-full flex items-center overflow-hidden bg-black text-[#FEFEFF]">
            <div ref={textRef} className="flex whitespace-nowrap text-[7vw] font-semibold gap-2">
                {[...Array(2)].map((_, index) => (
                    <div key={index}>
                        {text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RollingText;
