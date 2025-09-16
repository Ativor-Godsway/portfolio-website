import React from "react";
import { IoLogoReact } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const LightHero = () => {
  return (
    <div className=" overflow-hidden w-full flex flex-col items-center sticky inset-0 bg-white text-black justify-center ">
      {" "}
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-40"></div>
        <h1 className=" hidden md:block text-[14vw] oswald  text-center absolute top-4 min-w-[100vw] whitespace-nowrap  ">
          ATIVOR GODSWAY
        </h1>
        <img
          src="/black&white.png"
          alt=""
          className="hidden md:block w-[120vw] md:w-[100vw] lg:w-[70vw] max-w-[850px] m-auto absolute  md:bottom-0 left-1/2 -translate-x-1/2 "
        />
        <h1 className="hidden md:block text-[14vw]  oswald text-outline text-center absolute top-4 min-w-[100vw] whitespace-nowrap  ">
          ATIVOR GODSWAY
        </h1>

        {/* PHONE SECTION */}

        <div className="  ">
          <div className=" md:hidden flex flex-col p-2 leading-none absolute top-[13vw] left-1/2 -translate-x-1/2 w-[100vw] -z-10">
            <p className="oswald self-start text-[15vw]">ATIVOR</p>
            <p className="oswald self-end text-[15vw]">GODSWAY</p>
          </div>
          <img
            src="/black&white.png"
            alt=""
            className=" block md:hidden max-w-[500px] m-auto w-[100vw]"
          />
          <div className=" md:hidden flex flex-col p-2 leading-none absolute top-[13vw] left-1/2 -translate-x-1/2 w-[100vw] z-10">
            <p className="oswald text-outline-small self-start text-[15vw]">
              ATIVOR
            </p>
            <p className="oswald  text-outline-small self-end text-[15vw]">
              GODSWAY
            </p>
          </div>
          <div className="bg-black text-white md:bg-transparent md:text-black flex rounded-b-[50px] mx-2 md:absolute top-[50%] md:right-10  md:w-[30vw] text-center md:text-left  flex-col items-center p-3">
            <p className="orbitron  md:text-[1.4rem] ">
              I craft sleek, responsive websites that blend design with
              performance. Turning bold ideas into digital experiences that
              truly stand out.
            </p>
            <a href="#contact">
              <button className="btn orbitron px-10 bg-white transition-all duration-200 mt-5 text-black hover:scale-[1.1] md:bg-black md:text-white rounded-full">
                GET IN TOUCH
              </button>
            </a>
          </div>
        </div>

        <div className="flex  gap-7 md:gap-5 items-center md:absolute  bottom-20 md:left-4  mt-16  ">
          <div
            className="tooltip tooltip-bottom tooltip-open"
            data-tip="NODE JS"
          >
            <FaNodeJs className="size-10 md:size-14" />
          </div>
          <div className="tooltip tooltip-open" data-tip="REACT JS">
            <IoLogoReact className="size-10 md:size-14" />
          </div>
          <div
            className="tooltip tooltip-bottom tooltip-open"
            data-tip="EXPRESS"
          >
            <SiExpress className="size-10 md:size-14" />
          </div>
          <div className="tooltip tooltip-open" data-tip="TAILWIND CSS">
            <SiTailwindcss className="size-10 md:size-14" />
          </div>
          <div
            className="tooltip tooltip-bottom tooltip-open"
            data-tip="MONGO DB"
          >
            <SiMongodb className="size-10 md:size-14" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightHero;
