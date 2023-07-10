import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import Education from "../components/TabMenu/Education.tsx";
import InterestedField from "../components/TabMenu/InterestedField.tsx";

export default function Tab() {
  const [currentTabs, setCurrentTabs] = useState("Interested");
  const tabPanles = [
    {
      id: 1,
      tabName: "Interested Field",
      panalName: "Interested",
    },
    {
      id: 2,
      tabName: "Education Degree",
      panalName: "Education",
    },
  ];

  const handleTab = (panalName: string) => {
    setCurrentTabs(panalName);
  };
  return (
    <div class="md:(max-w-4xl mt-10 mx-auto )" id={"Qualification"}>
      <div class="md:( flex gap-x-1) xs:(mx-auto p-8 flex flex-col)">
        {tabPanles.map((value) =>
          IS_BROWSER && (
            <div key={value.id}>
              <button
                class={"bg-transparent font-semibold text-md font-bold font-sans uppercase py-2 px-4 border-b-[3px] xs:border-cyan-500" +
                  (currentTabs === value.panalName
                    ? " md:border-cyan-500 "
                    : " md:border-gray-400 ") +
                  " focus:outline-none focus:ring-0 focus:ring-offset-0"}
                onClick={() => handleTab(value.panalName)}
                disabled={currentTabs === value.panalName}
              >
                {value.tabName}
              </button>
              <div class="sm:hidden">
                {value.panalName === "Interested"
                  ? <InterestedField />
                  : <Education />}
              </div>
            </div>
          )
        )}
      </div>

      <div class={"mt-5 xs:hidden"}>
        {currentTabs === "Interested" ? <InterestedField /> : <Education />}
      </div>
    </div>
  );
}
