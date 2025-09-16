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
        borderRadius: 0,
        marginBottom: 0,
        stagger: 0.9,
      });
    });
    return () => context.revert();
  });

  return (
    <div className=" bg-black   text-white ">
      <div className="h-[20vh]">
        <h2 className="text-lg md:text-5xl rubik ml-10 pt-5">Projects</h2>
      </div>

      <div className="wrapper max-h-[100vh]  flex items-center flex-col    w-full">
        {/* Ecommerce Site */}
        <div className="item w-[95%] md:w-[90%] h-[100vh] md:h-[80vh] px-2  md:px-10 bg-[#f9f1e3]  text-black relative ">
          <h2 className="text-7xl font-serif absolute top-0 ">01</h2>
          <div className=" flex flex-col-reverse md:flex-row justify-between mb-5 ">
            {/* TEXT AREA */}
            <div className="mt-0 md:mt-20 md:w-[40%] h-[80%] bg-[#ddd4c5] shadow-2xl rounded-3xl p-5 flex flex-col pt-10">
              <h3 className="text-3xl md:text-5xl font-serif mb-2">
                E-commerce website
              </h3>
              <hr className="bg-black h-[1px] border-none  mb-2" />
              <p className="text-[1.01rem] md:text-[1.2rem] font-light text-[#333333]">
                A fully responsive online store featuring dynamic product
                listings, shopping cart, and a secure checkout system built with
                React and Tailwind CSS. Includes an intuitive admin panel for
                monitoring orders and adding products seamlessly.
              </p>
              <div className="flex flex-col items-center">
                <h3 className="mt-1 md:mt-8 mb-1 md:mb-3 text-[1.4rem] underline underline-offset-2 oswald">
                  Tech Stack
                </h3>
                <div className="flex gap-5 items-center ">
                  <div className="tooltip tooltip-bottom " data-tip="MONGO DB">
                    <SiMongodb className="size-9 md:size-12" />
                  </div>
                  <div className="tooltip tooltip-bottom " data-tip="EXPRESS">
                    <SiExpress className="size-9 md:size-12" />
                  </div>
                  <div className="tooltip tooltip-bottom  " data-tip="REACT JS">
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
              <button className="mt-3 md:mt-16 btn border-none  transition-all duration-300 bg-[#494339]  hover:scale-[1.1] text-[#ddd4c5] self-center rounded-full  shadow-lg shadow-[#4f4f4fa9] ">
                Visit Site
              </button>
            </div>

            {/* FIGURE */}
            <figure className="h-full mt-10 w-full m-auto md:w-[60%] relative ">
              <figure className="hover-galler">
                <img src="/ecom-p1.png" className="" />
                {/* <img src="/ecom2.png" />
                <img src="/ecom3.png" />
                <img src="/ecom4.png" /> */}
              </figure>
            </figure>
          </div>
        </div>
        {/* Ecommerce Admin Panel   */}
        <div className="item w-[95%] md:w-[90%] h-[100vh] md:h-[80vh] px-2  md:px-10 bg-[#eed7ff]  text-black relative ">
          <h2 className="text-7xl font-serif absolute top-0 ">02</h2>
          <div className=" flex flex-col-reverse md:flex-row justify-between mb-5 ">
            {/* TEXT AREA */}
            <div className="mt-0 md:mt-20 md:w-[40%] h-[80%] bg-[#c4b1d1] shadow-2xl rounded-3xl p-5 flex flex-col pt-10">
              <h3 className="text-3xl md:text-5xl font-serif mb-2">
                E-commerce Admin Panel
              </h3>
              <hr className="bg-black h-[1px] border-none  mb-2" />
              <p className="text-[1.01rem] md:text-[1.2rem] font-light text-[#333333]">
                A responsive admin dashboard designed for managing an e-commerce
                platform. Features include real-time order tracking, product
                management, and sales insights. Built with React and Tailwind
                CSS for a modern, intuitive user experience.
              </p>
              <div className="flex flex-col items-center">
                <h3 className="mt-1 md:mt-8 mb-1 md:mb-3 text-[1.4rem] underline underline-offset-2 oswald">
                  Tech Stack
                </h3>
                <div className="flex gap-5 items-center ">
                  <div className="tooltip tooltip-bottom " data-tip="MONGO DB">
                    <SiMongodb className="size-9 md:size-12" />
                  </div>
                  <div className="tooltip tooltip-bottom " data-tip="EXPRESS">
                    <SiExpress className="size-9 md:size-12" />
                  </div>
                  <div className="tooltip tooltip-bottom  " data-tip="REACT JS">
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
              <button className="mt-3 md:mt-16 btn border-none  transition-all duration-300 bg-[#494339]  hover:scale-[1.1] text-[#ddd4c5] self-center rounded-full  shadow-lg shadow-[#4f4f4fa9] ">
                Visit Site
              </button>
            </div>

            {/* FIGURE */}
            <figure className="h-full mt-10 w-full m-auto md:w-[60%] relative ">
              <figure className="hover-galler">
                <img src="/ecom-p1.png" className="" />
                {/* <img src="/ecom2.png" />
                <img src="/ecom3.png" />
                <img src="/ecom4.png" /> */}
              </figure>
            </figure>
          </div>
        </div>
        {/* Photographer Portfolio   */}
        <div className="item w-[95%] md:w-[90%] h-[95vh] md:h-[80vh] px-2  md:px-10 bg-[#c9e4ff]   text-black relative ">
          <h2 className="text-7xl font-serif absolute top-0 ">03</h2>
          <div className=" flex flex-col-reverse md:flex-row justify-between mb-5 ">
            {/* TEXT AREA */}
            <div className="mt-0 md:mt-20 md:w-[40%] h-[80%] bg-[#a7bdd4]  shadow-2xl rounded-3xl p-5 flex flex-col pt-10">
              <h3 className="text-3xl md:text-5xl font-serif mb-2">
                Photographer's Portfolio Website
              </h3>
              <hr className="bg-black h-[1px] border-none  mb-2" />
              <p className="text-[1.01rem] md:text-[1.2rem] font-light text-[#333333]">
                A fully responsive online store featuring dynamic product
                listings, shopping cart, and a secure checkout system built with
                React and Tailwind CSS. Includes an intuitive admin panel for
                monitoring orders and adding products seamlessly.
              </p>
              <div className="flex flex-col items-center">
                <h3 className="mt-1 md:mt-8 mb-1 md:mb-3 text-[1.4rem] underline underline-offset-2 oswald">
                  Tech Stack
                </h3>
                <div className="flex gap-5 items-center ">
                  <div className="tooltip tooltip-bottom " data-tip="MONGO DB">
                    <SiMongodb className="size-9 md:size-12" />
                  </div>
                  <div className="tooltip tooltip-bottom " data-tip="EXPRESS">
                    <SiExpress className="size-9 md:size-12" />
                  </div>
                  <div className="tooltip tooltip-bottom  " data-tip="REACT JS">
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
              <button className="mt-3 md:mt-16 btn border-none  transition-all duration-300 bg-[#494339]  hover:scale-[1.1] text-[#ddd4c5] self-center rounded-full  shadow-lg shadow-[#4f4f4fa9] ">
                Visit Site
              </button>
            </div>

            {/* FIGURE */}
            <figure className="h-full mt-10 w-full m-auto md:w-[60%] relative ">
              <figure className="hover-galler">
                <img src="/ecom-p1.png" className="" />
                {/* <img src="/ecom2.png" />
                <img src="/ecom3.png" />
                <img src="/ecom4.png" /> */}
              </figure>
            </figure>
          </div>
        </div>
        {/* Ecommerce Site  */}
        <div className="item w-[95%] md:w-[90%] h-[95vh] md:h-[80vh] px-2  md:px-10 bg-[#fff9d8]   text-black relative ">
          <h2 className="text-7xl font-serif absolute top-0 ">04</h2>
          <div className=" flex flex-col-reverse md:flex-row justify-between mb-5 ">
            {/* TEXT AREA */}
            <div className="mt-0 md:mt-20 md:w-[40%] h-[80%] bg-[#e2dcbf]  shadow-2xl rounded-3xl p-5 flex flex-col pt-10">
              <h3 className="text-3xl md:text-5xl font-serif mb-2">
                E-commerce website
              </h3>
              <hr className="bg-black h-[1px] border-none  mb-2" />
              <p className="text-[1.01rem] md:text-[1.2rem] font-light text-[#333333]">
                A fully responsive online store featuring dynamic product
                listings, shopping cart, and a secure checkout system built with
                React and Tailwind CSS. Includes an intuitive admin panel for
                monitoring orders and adding products seamlessly.
              </p>
              <div className="flex flex-col items-center">
                <h3 className="mt-1 md:mt-8 mb-1 md:mb-3 text-[1.4rem] underline underline-offset-2 oswald">
                  Tech Stack
                </h3>
                <div className="flex gap-5 items-center ">
                  <div className="tooltip tooltip-bottom " data-tip="MONGO DB">
                    <SiMongodb className="size-9 md:size-12" />
                  </div>
                  <div className="tooltip tooltip-bottom " data-tip="EXPRESS">
                    <SiExpress className="size-9 md:size-12" />
                  </div>
                  <div className="tooltip tooltip-bottom  " data-tip="REACT JS">
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
              <button className="mt-3 md:mt-16 btn border-none  transition-all duration-300 bg-[#494339]  hover:scale-[1.1] text-[#ddd4c5] self-center rounded-full  shadow-lg shadow-[#4f4f4fa9] ">
                Visit Site
              </button>
            </div>

            {/* FIGURE */}
            <figure className="h-full mt-10 w-full m-auto md:w-[60%] relative ">
              <figure className="hover-galler">
                <img src="/ecom-p1.png" className="" />
                {/* <img src="/ecom2.png" />
                <img src="/ecom3.png" />
                <img src="/ecom4.png" /> */}
              </figure>
            </figure>
          </div>
        </div>
        {/* Ecommerce Site  */}
        <div className="item w-[95%] md:w-[90%] min-h-[95vh] md:min-h-[80vh] px-2  md:px-10 bg-[#ffdada]   text-black relative ">
          <h2 className="text-7xl font-serif absolute top-0 ">05</h2>
          <div className=" flex flex-col-reverse md:flex-row justify-between mb-5 ">
            {/* TEXT AREA */}
            <div className="mt-0 md:mt-20 md:w-[40%] h-[80%] bg-[#e2c1c1] shadow-2xl rounded-3xl p-5 flex flex-col pt-10">
              <h3 className="text-3xl md:text-5xl font-serif mb-2">
                E-commerce website
              </h3>
              <hr className="bg-black h-[1px] border-none  mb-2" />
              <p className="text-[1.01rem] md:text-[1.2rem] font-light text-[#333333]">
                A fully responsive online store featuring dynamic product
                listings, shopping cart, and a secure checkout system built with
                React and Tailwind CSS. Includes an intuitive admin panel for
                monitoring orders and adding products seamlessly.
              </p>
              <div className="flex flex-col items-center">
                <h3 className="mt-1 md:mt-8 mb-1 md:mb-3 text-[1.4rem] underline underline-offset-2 oswald">
                  Tech Stack
                </h3>
                <div className="flex gap-5 items-center ">
                  <div className="tooltip tooltip-bottom " data-tip="MONGO DB">
                    <SiMongodb className="size-9 md:size-12" />
                  </div>
                  <div className="tooltip tooltip-bottom " data-tip="EXPRESS">
                    <SiExpress className="size-9 md:size-12" />
                  </div>
                  <div className="tooltip tooltip-bottom  " data-tip="REACT JS">
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
              <button className="mt-3 md:mt-16 btn border-none  transition-all duration-300 bg-[#494339]  hover:scale-[1.1] text-[#ddd4c5] self-center rounded-full  shadow-lg shadow-[#4f4f4fa9] ">
                Visit Site
              </button>
            </div>

            {/* FIGURE */}
            <figure className="h-full mt-10 w-full m-auto md:w-[60%] relative ">
              <figure className="hover-galler">
                <img src="/ecom-p1.png" className="" />
                {/* <img src="/ecom2.png" />
                <img src="/ecom3.png" />
                <img src="/ecom4.png" /> */}
              </figure>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
