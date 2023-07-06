import NavButton from "../../../islands/NavButton.tsx";

interface MyComponentProps {
  title: string;
}

export default function NavBar({ title }: MyComponentProps) {
  return (
    <nav class="bg-teal-800 border-gray-200 w-full overflow-hidden top-0  ">
      <div class=" flex flex-wrap items-center justify-between mx-auto  p-4 ">
        <a class="flex items-center">
          <img
            src="/image/protfolio.png"
            class="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span class="self-center text-white font-signature text-2xl font-semibold whitespace-nowrap">
            {title}
          </span>
        </a>
        <NavButton />
      </div>
    </nav>
  );
}
