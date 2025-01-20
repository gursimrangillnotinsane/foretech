"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useWindowSize } from "@studio-freight/hamo";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Parallax({ className, children, speed = 1, id = "parallax", scale = .5 }) {
    const trigger = useRef();
    const target = useRef();
    const timeline = useRef();
    const { width: windowWidth } = useWindowSize();
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const y = windowWidth * speed * 0.1;
        timeline.current = gsap.timeline({
            scrollTrigger: {
                id: id,
                trigger: trigger.current,
                scrub: true,
                start: "top bottom",
                end: "bottom top",
                onUpdate: (e) => {
                    // setY(e.progress * y)
                    const scaleValue = gsap.utils.interpolate(1, scale, e.progress); // Smoothly interpolate scale
                    gsap.set(target.current, {
                        transform: `translate3d(0, ${e.progress * y}px, 0) scale(${scaleValue})`,

                    });
                },
            },
        });

        return () => {
            timeline?.current?.kill();
        };
    }, [id, speed, windowWidth]);
    return (
        <div ref={trigger} className={className}>
            <div ref={target}>{children}</div>
        </div>
    );
}