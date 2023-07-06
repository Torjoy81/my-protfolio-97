import { useSignal } from "@preact/signals";
import { useRef } from "preact/hooks";
interface NavBodyProps {
  showIsActive: boolean;
}

export default function NavBody({ showIsActive }: NavBodyProps) {
  const navMenu = useSignal([
    "Home",
    "About",
    "Experience",
    "Qualification",
    "Feedback",
  ]);

  const currentMenu = useSignal("Home");

  const handleNavMenu = (menu: string) => {
    currentMenu.value = menu;
  };

  return (
    <div
      class={`${showIsActive ? "" : "hidden"} w-full md:block md:w-auto `}
      id="navbar-default"
    >
      <ul class="font-bold flex flex-col p-4 bg-teal-800 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:(flex-row space-x-8 mt-0 border-0  ) ">
        {navMenu.value.map((nav, index) => (
          <li
            key={index}
            onClick={() => handleNavMenu(nav)}
          >
            <a
              href={`#${nav}`}
              class={"block py-2 pl-3 pr-4 rounded " +
                (currentMenu.value === nav
                  ? " text-yellow-700 "
                  : " text-white ")}
              aria-current="page"
            >
              {nav.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
