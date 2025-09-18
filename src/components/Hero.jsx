import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import LightHero from "./LightHero";

const Hero = () => {
  const darkRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        darkRef.current,
        {
          clipPath: "inset(0% 100% 0% 0%)",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",

          scrollTrigger: {
            trigger: darkRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, darkRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className=" relative">
      <LightHero className="hidden md:block" />

      <div
        ref={darkRef}
        className=" w-full h-[102vh] flex flex-col items-center sticky inset-0 bg-black gap-7  text-white pl-5  "
      >
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] -z-30 "></div>
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] -z-50"></div>

        <h1 className="self-start text-[3.7rem] md:text-[6rem] lg:text-[8rem] leading-none oswald mt-20 md:mt-5">
          FULL STACK <br /> WEB DEVELOPER
        </h1>
        <p className="text-[3rem] md:text-[4rem] lg:text-[6rem] anton leading-none w-[50vw] md:w-[55vw] self-end   ">
          BUILDING <span className="text-blue-300">FAST</span>,
          <br /> <span className="text-blue-300">SCALABLE</span>, AND <br />{" "}
          <span className="text-blue-300">SECURE</span> WEBSITES
        </p>
        <div className="md:mt-2 mt-6 flex gap-4 w-[100vw]">
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg shadow-md font-medium m-auto orbitron"
          >
            Get in touch
          </a>
        </div>

        {/* <img src="/black&white.png" alt="" className="w-[700px] self-end" /> */}
      </div>
    </div>
  );
};

export default Hero;
