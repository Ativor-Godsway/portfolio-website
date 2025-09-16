import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoLogoReact } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import GsapSVG from "./GsapSVG";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    name: "JavaScript",
    description:
      "Proficient in JavaScript, with a strong understanding of ES6+ features, asynchronous programming, and DOM manipulation.",
    icon: <SiJavascript className="text-6xl text-[#F0DB4F] bg-black" />,
  },
  {
    name: "MongoDB",
    description:
      "Knowledgeable in MongoDB for NoSQL database management, including schema design and CRUD operations.",
    icon: <SiMongodb className="text-6xl text-green-600" />,
  },
  {
    name: "Express.js",
    description:
      "Familiar with Express.js for building RESTful APIs and middleware.",
    icon: <SiExpress className="text-6xl text-[#0075C9]" />,
  },
  {
    name: "ReactJS",
    description:
      "Experienced in building dynamic web applications using ReactJS, including component-based architecture, state management with hooks, and integration with RESTful APIs.",
    icon: <IoLogoReact className="text-6xl text-[#61DBFB]" />,
  },

  {
    name: "Node.js",
    description:
      "Experience with Node.js for building server-side applications, including Express.js for creating RESTful APIs.",
    icon: <FaNodeJs className="text-6xl text-[#215732] " />,
  },
  {
    name: "GSAP",
    description:
      "Proficient in GSAP (GreenSock Animation Platform) for creating high-performance animations and interactive web experiences.",
    icon: "GSAP",
  },

  {
    name: "Tailwind CSS",
    description:
      "Experienced in using Tailwind CSS for rapid UI development with utility-first CSS framework.",
    icon: <SiTailwindcss className="text-6xl text-teal-600" />,
  },
  {
    name: "HTML/CSS",
    description:
      "Skilled in HTML5 and CSS3, including responsive design principles, Flexbox, Grid, and pre-processors like SASS.",
    icon: <FaHtml5 className="text-6xl text-orange-600" />,
  },
];

export default function Skills() {
  const track = useRef(null);

  // gsap.to(".skills-track", {
  //    // move just enough so last card aligns
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: ".skills-wrapper",
  //     pin: true,
  //     scrub: 1,
  //     end: () => "+=" + (trackWidth - windowWidth),
  //   },
  // });

  useEffect(() => {
    const trackWidth = track.current.scrollWidth; // ✅ correct
    const windowWidth = window.innerWidth;
    let context = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".skills-wrapper",
          pin: true,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          ease: "linear",
        },
      });
      console.log(trackWidth, windowWidth);

      tl.to(".skills-track", {
        x: -(trackWidth - windowWidth) - 40, // adjust as needed
      });
    });
    return () => context.revert();
  });

  return (
    <div className="bg-white  skills-wrapper flex flex-col  pt-10 overflow-hidden rounded-bl-[150px] min-h-screen">
      <h1 className="mx-auto font-serif text-[3rem]">Skills</h1>
      <div
        ref={track}
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
