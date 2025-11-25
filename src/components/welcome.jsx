import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const FONT_WEIGHTS = {
  MIN: { min: 100, max: 400, default: 100 },
  MAX: { min: 400, max: 900, default: 400 },
};

const setupTextHover = (container, type) => {
  if (!container) return () => {};
  const spans = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = (letter, weight, duration = 0.25) => {
    gsap.to(letter, {
      fontVariationSettings: `'wght' ${weight}`,
      duration: duration,
      ease: "power2.out",
    });
  };

  const handelMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;
    spans.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const letterCenter = l + w / 2 - left;
      const distance = Math.abs(mouseX - letterCenter);
      const intensity = Math.exp(-(distance ** 2) / 20000);
      animateLetter(letter, min + (max - min) * intensity);
    });
  };
  const handleMouseLeave = () =>
    spans.forEach((letter) => animateLetter(letter, base, 0.3));
  container.addEventListener("mousemove", handelMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);
  return () => {
    container.removeEventListener("mousemove", handelMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const renderText = (text, baseWeight = 400, className) => {
  return [...text].map((char, index) => {
    return (
      <span
        key={index}
        className={className}
        style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    );
  });
};

const Welcome = () => {
  const titleRef = React.useRef(null);
  const subTitleRef = React.useRef(null);
  useGSAP(() => {
    const TitleCleanup = setupTextHover(titleRef.current, "MAX");
    const subTitleCleanup = setupTextHover(subTitleRef.current, "MIN");
    return () => {
      TitleCleanup();
      subTitleCleanup();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subTitleRef}>
        {renderText(
          "Hey, I'm Haruna!, Welcome to my",
          100,
          "text-3xl font-georama"
        )}
      </p>
      <h1 ref={titleRef} className="mt-7">
        {renderText("Portfolio", 400, "text-9xl italic font-georama")}
      </h1>
      <div className="small-screen">
        <p>This Portfolio is designed for desktop/tablet screen only.</p>
      </div>{" "}
    </section>
  );
};

export default Welcome;
