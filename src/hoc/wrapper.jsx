import { useLayoutEffect, useRef } from "react";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const WindowWrapper = (Component, windowKey) => {
  const wrapped = (props) => {
    const ref = useRef(null);
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    useGSAP(() => {
      const currentRef = ref.current;
      if (!currentRef || !isOpen) return;
      currentRef.style.display = "block";
      gsap.fromTo(
        currentRef,
        { scale: 0.8, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    }, [isOpen]);

    useGSAP(() => {
      const currentRef = ref.current;
      if (!currentRef) return;
      const [instance] = Draggable.create(currentRef, {
        onPress: () => focusWindow(windowKey),
      });
      return () => instance.kill();
    }, [focusWindow, windowKey]);

    useLayoutEffect(() => {
      const currentRef = ref.current;
      if (!currentRef) return;
      currentRef.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    return (
      <section className="absolute" id={windowKey} ref={ref} style={{ zIndex }}>
        <Component {...props} />
      </section>
    );
  };
  wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return wrapped;
};

export default WindowWrapper;
