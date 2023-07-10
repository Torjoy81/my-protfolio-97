import { asset } from "https://deno.land/x/fresh@1.1.6/runtime.ts";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { SiGmail } from "react-icons/si";
import { FcCellPhone } from "react-icons/fc";
import { FaAddressCard } from "react-icons/fa";
import { Fragment } from "preact";
import ToolLip from "../toolLip.tsx";

export default function BannerBody() {
  return (
    <Fragment>
      <div class={" circle1 "}></div>
      <div class={"animate-ping circle2 "}></div>
      <section
        class={" mx-auto md:bg-white/30 md:backdrop-blur-md md:shadow-xl md:w-[60%] md:mt-32 xs:mt-20 rounded-lg "}
      >
        <div class="flex flex-col gap-y-4  md:flex-row  md:min-h-[50vh]  items-center md:justify-center  md:gap-x-10  ">
          <div class="xs:text-justify xs:p-8 ">
            <h1 class="text-5xl text-teal-600 uppercase font-poppins font-medium py-3">
              Forntend Developer
            </h1>
            <h3 class="text(gray-500 uppercase) text-2xl py-2">
              MD Tarekul islam
            </h3>
            <div>
              <div class={"flex gap-x-3 items-center p-2.5"}>
                <SiGmail class={"w-6 h-6 text-red-500"} />
                <p class="text-md md:text-xl font-montserrat">
                  torjoy692@gmail.com
                </p>
              </div>
              <div class={"flex gap-x-3 items-center p-2.5"}>
                <FcCellPhone class={"w-6 h-6 text-red-500"} />
                <p class="text-md md:text-xl font-montserrat">
                  +49 15752370460
                </p>
              </div>
              <div class={"flex gap-x-3 items-center p-2.5"}>
                <FaAddressCard class={"w-6 h-6 text-sky-600"} />
                <p class="text-md md:text-xl font-montserrat">
                  vettersstraße 70, chemnitz
                </p>
              </div>
            </div>
            <div className="text-5xl flex justify-center md:justify-start gap-16 py-3 text-gray-600 ">
              <a
                href="https://github.com/Torjoy81"
                class="cursor-point "
              >
                <ToolLip Title="GitHub Profile">
                  <AiFillGithub />
                </ToolLip>
              </a>
              <a
                href="https://www.linkedin.com/in/torjoy1997/"
                class="cursor-point"
              >
                <ToolLip Title="Linkedin Profile">
                  <AiFillLinkedin class="text-sky-900 hover:shadow-2xl" />
                </ToolLip>
              </a>
              <a
                href={asset("doc/Resume.pdf")}
                class="cursor-point"
              >
                <ToolLip Title="Resume">
                  <HiOutlineDocumentArrowDown class="text-rose-500 hover:shadow-2xl" />
                </ToolLip>
              </a>
            </div>
          </div>
          <div class="md:col-start-4 md:col-span-2  bg-gradient-to-b from-teal-500 animate-blob w-[50vw] h-[50vw] relative overflow-hidden  md:h-96 md:w-96 ">
            <img
              src="image/Mypic.png"
              class="xs:(w-48 h-80 object-cover mx-auto) md:(w-30 mx-auto  )"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
