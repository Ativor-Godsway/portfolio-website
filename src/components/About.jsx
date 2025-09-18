import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { text } from "../assets/data.jsx";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const containerRef = useRef(null);
  useLayoutEffect(() => {
    let context = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          start: "top 10%",
          end: "bottom top",
          scrub: 1,
        },
      });

      tl.to(".text", { color: "black", stagger: 0.4 });
    }, containerRef);
    return () => context.revert();
  }, []);

  return (
    <div className=" bg-white min-h-screen overflow-hidden">
      <div
        ref={containerRef}
        className=" w-[100vw]   m-auto flex flex-col   items-start justify-center text-black px-5  "
      >
        <h2 className="text-lg md:text-5xl rubik mr-10 mt-5">About</h2>

        <div className="flex flex-wrap  w-[95%] text-lg md:text-3xl  p-3 font-thin ">
          {text.map((letter, index) =>
            letter === "*" ? (
              <p key={index} className="opacity-0" aria-hidden="true">
                A
              </p>
            ) : (
              <p key={index} className="text text-[#6362620f] oswald ">
                {letter}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
