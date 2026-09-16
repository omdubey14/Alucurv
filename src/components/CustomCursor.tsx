"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true); // default true until verified client-side

  // Fast GPU-accelerated motion coordinates without triggering React re-renders on mousemove
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Outer ring spring: smooth, fluid inertial lag for organic luxury feel
  const ringX = useSpring(mouseX, { stiffness: 320, damping: 28, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 320, damping: 28, mass: 0.5 });

  // Center dot spring: ultra-responsive for exact zero-latency pointer accuracy
  const dotX = useSpring(mouseX, { stiffness: 1800, damping: 65, mass: 0.1 });
  const dotY = useSpring(mouseY, { stiffness: 1800, damping: 65, mass: 0.1 });

  useEffect(() => {
    // Disable on touch / mobile devices
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouch) {
      setIsTouchDevice(true);
      return;
    }

    setIsTouchDevice(false);
    document.body.classList.add("has-custom-cursor");

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest(
        "a, button, [role='button'], input, textarea, select, label, .cursor-ew-resize, .cursor-pointer, [data-cursor]"
      );

      if (interactiveEl) {
        setIsHovered(true);
        const cursorData = interactiveEl.getAttribute("data-cursor");
        if (cursorData) {
          setCursorText(cursorData);
        } else if (interactiveEl.classList.contains("cursor-ew-resize")) {
          setCursorText("DRAG");
        } else {
          setCursorText("");
        }
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);

    const onMouseLeave = () => {
      setIsVisible(false);
      setIsMouseDown(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice) return null;

  const hasText = Boolean(cursorText);

  return (
    <>
      {/* 1. Precision Pinpoint Center Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isVisible ? (hasText ? 0 : 1) : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.9)]"
          animate={{
            scale: isMouseDown ? 0.6 : isHovered ? 0.75 : 1,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>

      {/* 2. Fluid Architectural Trailing Halo / Context Pill */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform flex items-center justify-center select-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
      >
        <motion.div
          className="rounded-full flex items-center justify-center overflow-hidden"
          animate={{
            width: hasText ? 76 : isHovered ? 52 : 34,
            height: hasText ? 76 : isHovered ? 52 : 34,
            scale: isMouseDown ? 0.85 : 1,
            backgroundColor: hasText
              ? "rgba(10, 12, 14, 0.92)"
              : isHovered
              ? "rgba(212, 175, 55, 0.12)"
              : "rgba(212, 175, 55, 0.04)",
            borderColor: hasText
              ? "rgba(212, 175, 55, 0.85)"
              : isHovered
              ? "rgba(212, 175, 55, 0.7)"
              : "rgba(212, 175, 55, 0.4)",
            borderWidth: "1px",
            boxShadow: hasText
              ? "0 0 25px rgba(212, 175, 55, 0.3), inset 0 0 15px rgba(212, 175, 55, 0.1)"
              : isHovered
              ? "0 0 16px rgba(212, 175, 55, 0.25)"
              : "0 0 8px rgba(212, 175, 55, 0.08)",
            backdropFilter: isHovered || hasText ? "blur(4px)" : "blur(0px)",
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 28,
          }}
        >
          {hasText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="font-mono text-[9px] font-bold tracking-[0.2em] text-[#d4af37] uppercase text-center px-2 pointer-events-none"
            >
              {cursorText}
            </motion.span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
};
