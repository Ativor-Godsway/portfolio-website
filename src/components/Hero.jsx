import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import LightHero from "./LightHero";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { IoLogoReact } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tween = gsap.fromTo(
      ".dark",
      {
        clipPath: "inset(0% 100% 0% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "none",

        scrollTrigger: {
          trigger: ".dark",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // ✅ Get the ScrollTrigger instance
    const trigger = tween.scrollTrigger;

    return () => {
      trigger && trigger.kill(); // safely kill ScrollTrigger
      tween && tween.kill(); // safely kill tween
    };
  }, []);

  return (
    <div className=" relative">
      <LightHero className="hidden md:block" />

      <div className="dark w-full h-[102vh] flex flex-col items-center sticky inset-0 bg-black gap-7  text-white pl-5  ">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] -z-30 "></div>
        <div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] -z-50"></div>

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
