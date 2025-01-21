'use client'
// Import necessary React hooks and components
import React, { use, useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
// Define cursor colors
const CURSOR_COLORS: { [key: string]: string } = {
    "h1": "green-400",
    "button": "orange-500",
    "default": "sky-500"
};
// Main CustomCursor component
const CustomCursor = () => {
    // Reference to the cursor element
    const cursorRef = useRef(null);
    // State to track cursor position
    const [position, setPosition] = useState({ x: 0, y: 0 });
    // State to track cursor color
    const [cursorColor, setCursorColor] = useState("black");
    // State to track click event
    const [contactClick, setcontactClick] = useState(0);
    const radius = 50; // Circle radius
    const text = "CLICK  TO BEGAN  "; // Your text content
    useEffect(() => {
        // Event listener for mouse movement
        interface MousePosition {
            x: number;
            y: number;
        }

        const handleMouseMove = (e: MouseEvent): void => {
            const newPosition: MousePosition = {
                x: e.clientX,
                y: e.clientY
            };
            setPosition(newPosition);
        };

        // Event listener for mouseover (hover) on HTML elements
        const handleMouseOver = (e: MouseEvent) => {
            // Get the HTML tag name
            const className = (e.target as HTMLElement).classList;
            const tagName = (e.target as HTMLElement).tagName;
            // Set cursor color based on the tag, default to "sky-500"
            if (className.contains('background') && tagName === 'SECTION') {
                setCursorColor('black')
            }
            if (tagName === 'BUTTON') {
                setCursorColor('transparent');
            }
            else if (!className.contains('background') && tagName === 'SECTION') {
                setCursorColor('white');
            }

            if (className.contains('contact') && tagName === 'SECTION') {
                setcontactClick(1);
            }
            else if (!className.contains('contact') && tagName === 'SECTION') {
                setcontactClick(0);
            }

            console.log(tagName, className);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);
        // Cleanup event listeners on component unmount


        const textElements = document.querySelectorAll(".circle-letter");
        const angleStep = 360 / textElements.length;

        textElements.forEach((el, index) => {
            const angle = index * angleStep; // Calculate angle for each letter
            gsap.to(el, {
                x: radius * Math.cos((angle * Math.PI) / 180),
                y: radius * Math.sin((angle * Math.PI) / 180),
                rotation: angle, // Rotate each letter to face outward
                transformOrigin: "center", // Duration for one full rotation
                // repeat: -1,
            });
        });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);
    return (
        <>
            <div
            // style={{ top: position.y, left: position.x }}
            // ref={cursorRef}
            // className={`fixed pointer-events-none transition-all -translate-x-1/2 -translate-y-1/2 z-50 ease-in duration-100 rounded-full w-3 h-3 bg-${cursorColor}`}
            />
            <div
                style={{ top: position.y, left: position.x, borderColor: cursorColor }}
                ref={cursorRef}
                className={`p-0 fixed pointer-events-none transition-all -translate-x-1/2 -translate-y-1/2 z-50 ease-in duration-200 rounded-full w-6 h-6 border-2 `}

            >
                <div
                    className="circle-text-container relative w-[200px] h-[200px] rounded-full"
                    style={{ position: "relative", opacity: contactClick }}
                >
                    {text.split("").map((letter, index) => (
                        <span
                            key={index}
                            className="circle-letter absolute text-lg text-black font-bold"
                        >
                            {letter}
                        </span>
                    ))}
                </div>

            </div>
        </>
    );
};

export default CustomCursor;