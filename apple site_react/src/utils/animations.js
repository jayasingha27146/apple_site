import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger); 

export const animateWithGsap = (target, animationProps, scrollProps = {}) => {
 
  const combinedScrollProps = {
    trigger: target,
    toggleActions: "restart reverse restart reverse",
    start: "top 85%",
    ...scrollProps,
  };

  return gsap.to(target, {
    ...animationProps,
    scrollTrigger: combinedScrollProps,
  });
};

export const animateWithGsaptimeline = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animationProps) => {
  timeline
    .to(rotationRef.current.rotation, {
      y: rotationState,
      duration: 1,
      ease: "power2.inOut",
    })
   
    .fromTo(firstTarget, { ...animationProps }, { ...animationProps, ease: "power2.inOut" }, "<")
    .fromTo(secondTarget, { ...animationProps }, { ...animationProps, ease: "power2.inOut" }, "<");
};
