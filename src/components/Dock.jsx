import React from "react";
import { dockApps } from "../constants";
import { Tooltip } from "react-tooltip";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Dock = () => {
  const dockRef = React.useRef(null);
  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;
    const buttons = dock.querySelectorAll(".dock-icon");
    const animateIcon = (mouseX) => {
      const { left } = dock.getBoundingClientRect();
      buttons.forEach((button) => {
        const { left: bLeft, width: bWidth } = button.getBoundingClientRect();
        const buttonCenter = bLeft + bWidth / 2 - left;
        const distance = Math.abs(mouseX - buttonCenter);
        const intensity = Math.exp(-(distance ** 2) / 2000);
        gsap.to(button, {
          scale: 1 + 0.5 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };
    const handleMouseMove = (e) => {
      const mouseX = e.clientX - dock.getBoundingClientRect().left;
      animateIcon(mouseX);
    };
    const handleMouseLeave = () =>
      buttons.forEach((button) => {
        gsap.to(button, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        });
      });
    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const toggleApp = (app) => {
    // Implement window open logic here
  };

  return (
    <section id="dock">
      <div className="dock-container" ref={dockRef}>
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className="flex justify-center">
            <button
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              className="dock-icon"
              aria-label={name}
              type="button"
              onClick={() => toggleApp({ id, canOpen })}
            >
              <img
                src={`/images/${icon}`}
                alt={name}
                loading="lazy"
                className={canOpen ? "" : "opacity-60"}
              />
            </button>
          </div>
        ))}
        <Tooltip place="top" id="dock-tooltip" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;
