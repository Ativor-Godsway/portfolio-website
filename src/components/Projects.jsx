import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoLogoReact } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "E-commerce website",
    description:
      "A fully responsive online store featuring dynamic product listings, shopping cart, and a secure checkout system built with React and Tailwind CSS. Includes an intuitive admin panel for monitoring orders and adding products seamlessly.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    image: "/ecom-p1.png",
    link: "#",
    bgColor: "#f0e6d2",
    accentColor: "#dbcfbc",
  },
  {
    id: 2,
    title: "E-commerce Admin Panel",
    description:
      "A responsive admin dashboard designed for managing an e-commerce platform. Features include real-time order tracking, product management, and sales insights. Built with React and Tailwind CSS for a modern, intuitive user experience.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    image: "/ecom-p1.png",
    link: "#",
    bgColor: "#d3e4f0",
    accentColor: "#b9ccda",
  },
  {
    id: 3,
    title: "Photographer's Portfolio Website",
    description:
      "A fully responsive online store featuring dynamic product listings, shopping cart, and a secure checkout system built with React and Tailwind CSS. Includes an intuitive admin panel for monitoring orders and adding products seamlessly.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    image: "/ecom-p1.png",
    link: "#",
    bgColor: "#f0d3e4",
    accentColor: "#d6b2c7",
  },
  {
    id: 4,
    title: "E-commerce website",
    description:
      "A fully responsive online store featuring dynamic product listings, shopping cart, and a secure checkout system built with React and Tailwind CSS. Includes an intuitive admin panel for monitoring orders and adding products seamlessly.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    image: "/ecom-p1.png",
    link: "#",
    bgColor: "#e4f0d3",
    accentColor: "#bbc7a9",
  },
  {
    id: 5,
    title: "E-commerce website",
    description:
      "A fully responsive online store featuring dynamic product listings, shopping cart, and a secure checkout system built with React and Tailwind CSS. Includes an intuitive admin panel for monitoring orders and adding products seamlessly.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    image: "/ecom-p1.png",
    link: "#",
    bgColor: "#f0e6d2",
    accentColor: "#d3c8b3",
  },
];

const Projects = () => {
  useEffect(() => {
    let context = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".wrapper",
          pin: true,
          start: "top 2%",
          end: "bottom top",
          scrub: 1,
          ease: "linear",
        },
      });

      tl.to(".item", {
        height: 10,
        duration: 1,
        stagger: 0.9,
      });
    });
    return () => context.revert();
  });

  return (
    <div className=" bg-black   text-white  overflow-hidden">
      <div className="h-[20vh]">
        <h2 className="text-lg md:text-5xl rubik ml-10 pt-5">Projects</h2>
      </div>

      <div className="wrapper  flex items-center flex-col max-h-[100vh]    w-full">
        {projects.map((project) => (
          <div
            className={`item w-[95%] md:w-[90%] ${
              project.id === 5 ? "min-h-[90vh]" : "h-[90vh]"
            } md:h-[80vh] px-2  md:px-10  text-black relative flex flex-col `}
            style={{ backgroundColor: project.bgColor }}
          >
            <h2 className="text-7xl font-serif absolute top-0   ">
              0{project.id}
            </h2>
            <div className=" flex flex-col-reverse md:flex-row justify-between mb-5  ">
              {/* TEXT AREA */}
              <div
                className="mt-[-50px] md:mt-20 md:w-[40%] h-fit  shadow-2xl rounded-3xl px-5 flex flex-col py-1 md:py-5 md:pt-10"
                style={{ backgroundColor: project.accentColor }}
              >
                <h3 className="text-3xl md:text-5xl font-serif mb-2">
                  {project.title}
                </h3>
                <hr className="bg-black h-[1px] border-none  mb-2" />
                <p className="text-[1.01rem] md:text-[1.2rem] font-light text-[#333333]">
                  {project.description}
                </p>

                <div className="hidden md:flex flex-col items-center">
                  <h3 className="mt-1 md:mt-8 mb-1 md:mb-3 text-[1.4rem] underline underline-offset-2 oswald">
                    Tech Stack
                  </h3>
                  <div className="flex gap-5 items-center ">
                    <div
                      className="tooltip tooltip-bottom "
                      data-tip="MONGO DB"
                    >
                      <SiMongodb className="size-9 md:size-12" />
                    </div>
                    <div className="tooltip tooltip-bottom " data-tip="EXPRESS">
                      <SiExpress className="size-9 md:size-12" />
                    </div>
                    <div
                      className="tooltip tooltip-bottom  "
                      data-tip="REACT JS"
                    >
                      <IoLogoReact className="size-9 md:size-12" />
                    </div>
                    <div className="tooltip tooltip-bottom " data-tip="NODE JS">
                      <FaNodeJs className="size-9 md:size-12" />
                    </div>

                    <div
                      className="tooltip tooltip-bottom "
                      data-tip="TAILWIND CSS"
                    >
                      <SiTailwindcss className="size-9 md:size-12" />
                    </div>
                  </div>
                </div>
                <button className="mt-3 md:mt-7 btn border-none  transition-all duration-300 bg-[#494339]  hover:scale-[1.1] text-[#ddd4c5] self-center rounded-full  shadow-lg shadow-[#4f4f4fa9] ">
                  Visit Site
                </button>
              </div>

              {/* FIGURE */}
              <figure className=" md:h-full mt-5 md:mt-10 w-full m-auto md:w-[60%] relative  ">
                <figure className="hover-galler">
                  <img src={project.image} className="" />
                  {/* <img src="/ecom2.png" />
                <img src="/ecom3.png" />
                <img src="/ecom4.png" /> */}
                </figure>
              </figure>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
