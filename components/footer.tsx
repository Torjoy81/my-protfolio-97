import { asset } from "https://deno.land/x/fresh@1.1.6/runtime.ts";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <footer class=" footer ">
      <div class="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
        <div class={"flex gap-x-6 justify-center items-center"}>
          <a
            href="https://github.com/Torjoy81"
            title="GitHub Profile"
            class="cursor-point "
          >
            <AiFillGithub class="text-white w-10 h-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/torjoy1997/"
            class="cursor-point"
            title="Linkedin Profile"
          >
            <AiFillLinkedin class=" w-10 h-10 text-white hover:shadow-2xl" />
          </a>
          <a
            href={asset("doc/Resume.pdf")}
            title="Resume"
            class="cursor-point"
          >
            <HiOutlineDocumentArrowDown class=" w-10 h-10 text-white hover:shadow-2xl" />
          </a>
        </div>

        <ul class="flex flex-row justify-center items-center text-white font-medium uppercase gap-8 my-4">
          <li>Home</li>
          <li>About</li>
          <li>Skill</li>
          <li>Team</li>
          <li>Contact</li>
        </ul>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-white sm:text-center ">
          © 2023{" "}
          <a href="#" class="hover:underline">
            ProtFolio™
          </a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
