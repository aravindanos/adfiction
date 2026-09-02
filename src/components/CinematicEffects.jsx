import { useEffect, useRef } from "react";

import "../styles/cinematic-effects.css";

function CinematicEffects() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const lightRef = useRef(null);

  useEffect(() => {
    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let followerX = mouseX;
    let followerY = mouseY;

    let animationFrame;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      if (lightRef.current) {
        lightRef.current.style.transform =
          `translate3d(${mouseX - 250}px, ${mouseY - 250}px, 0)`;
      }
    };

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;

      if (followerRef.current) {
        followerRef.current.style.transform =
          `translate3d(${followerX}px, ${followerY}px, 0)`;
      }

      animationFrame =
        requestAnimationFrame(animate);
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    animationFrame = requestAnimationFrame(
      animate
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div
        ref={lightRef}
        className="mouse-light"
      />

      <div
        ref={followerRef}
        className="custom-cursor-follower"
      />

      <div
        ref={cursorRef}
        className="custom-cursor"
      />
    </>
  );
}

export default CinematicEffects;