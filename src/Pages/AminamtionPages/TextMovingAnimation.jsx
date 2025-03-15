import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TextMovingAnimation = ({ spanText, mainText }) => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  let xPercent = 0;
  let direction = 1;
  let speedFactor = 0.0008; // Slower base speed

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Smooth Animation Using GSAP Ticker
    const updateAnimation = () => {
      if (xPercent <= -100) xPercent = 0;
      if (xPercent > 0) xPercent = -100;

      gsap.set(firstText.current, { xPercent });
      gsap.set(secondText.current, { xPercent });

      xPercent += speedFactor * direction;
    };

    gsap.ticker.add(updateAnimation);

    const scrollTrigger = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5, // Smoother interaction
      onUpdate: (e) => {
        direction = e.direction;
        const velocity = Math.abs(e.getVelocity());

        // Adjust speed dynamically (slower upper limit)
        speedFactor = Math.max(0.0008, Math.min(velocity / 7000, 0.2));
      },
    });

    return () => {
      gsap.ticker.remove(updateAnimation);
      scrollTrigger.kill();
    };
  }, []);

  return (
    <div className="w-full overflow-hidden ">
      <div className="w-full flex overflow-hidden">
        <h1
          ref={firstText}
          className="text-[70px] sm:text-[80px] md:text-[90px] lg:text-[180px] font-black text-[var(--gray-color4)] whitespace-nowrap"
        >
          <span
            className="text-transparent"
            style={{
              WebkitTextStroke: "2px var(--gray-color4)",
            }}
          >
            {spanText}
          </span>
          {mainText}
        </h1>

        <h1
          ref={secondText}
          className="text-[70px] sm:text-[80px] md:text-[90px] lg:text-[180px] font-black text-[var(--gray-color4)] whitespace-nowrap"
        >
          <span
            className="text-transparent"
            style={{
              WebkitTextStroke: "2px var(--gray-color4)",
            }}
          >
            {spanText}
          </span>
          {mainText}
        </h1>
      </div>
    </div>
  );
};

export default TextMovingAnimation;
