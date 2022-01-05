import React, { useContext, useState } from "react";

const AnimationContext = React.createContext();

const defaultAnimation = { animation: "fadeIn 1s 1.3s forwards" };

export function useAnimation() {
  return useContext(AnimationContext);
}

export function AnimationProvider({ children }) {
  const [sectionAnimation, setSectionAnimation] = useState(defaultAnimation);

  const updateAnimationHandler = () => {
    setSectionAnimation({ animation: "fadeIn 1s 0s forwards" });
  };

  const animationContext = {
    animation: sectionAnimation,
    updateAnimation: updateAnimationHandler,
  };

  return (
    <AnimationContext.Provider value={animationContext}>
      {children}
    </AnimationContext.Provider>
  );
}
