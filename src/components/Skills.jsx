import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useLayoutEffect } from "react";
import { skills } from "../assets/data.jsx";
import GsapSVG from "./GsapSVG";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const trackRef = useRef(null);
  const skillsWrapperRef = useRef(null);

  useLayoutEffect(() => {
    const trackWidth = trackRef.current.scrollWidth; // ✅ correct
    const windowWidth = window.innerWidth;
    let context = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillsWrapperRef.current,
          pin: true,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          ease: "linear",
        },
      });

      tl.to(trackRef.current, {
        x: -(trackWidth - windowWidth) - 40, // adjust as needed
      });
    }, skillsWrapperRef);
    return () => context.revert();
  }, []);

  return (
    <div
      ref={skillsWrapperRef}
      className="bg-white  skills-wrapper flex flex-col  pt-10 overflow-hidden rounded-bl-[150px] min-h-screen"
    >
      <h2 className="mx-auto font-serif text-[3rem]">Skills</h2>
      <div
        ref={trackRef}
        className="skills-track flex gap-3 mt-20  border flex-shrink-0 ml-5 "
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card p-4 border rounded-lg shadow-md  min-w-[90vw] md:min-w-[25vw] h-[50vh] bg-gray-200 flex flex-col items-center pt-20"
          >
            {skill.icon && (
              <div className="mb-4">
                {skill.icon === "GSAP" ? <GsapSVG /> : skill.icon}
              </div>
            )}
            <h2 className="font-bold text-3xl text-center">{skill.name}</h2>
            <p className="text-center text-[#535353]">{skill.description}</p>
          </div>
        ))}
        <div className="w-[50vw] h-12 bg-black"></div>
      </div>
    </div>
  );
}
