import { useSignal } from "@preact/signals";

export default function Education() {
  const programOfEducation = useSignal([
    {
      programmName: "MSC WEB ENGINEERING",
      univerSity: "TU CHEMNITZ,GERMANY",
      startDate: "10/2021",
      endDate: "current",
    },
    {
      programmName: "BSC COMPUTER SCIENCE",
      univerSity: "DAFFODIL INTERNATIONAL UNIVERSITY, BANGLADESH",
      startDate: "04/2015",
      endDate: "03/2019",
    },
  ]);
  return (
    <div
      class={"w-full md:my-5 flex flex-col gap-y-3 "}
    >
      {programOfEducation.value.map((item, index) => (
        <div
          class={"xs:(w-full p-4 mt-6 -z-10) md:(w-[672px] px-6 py-8) bg-gray-100 border border-gray-400 rounded hover:(shadow-xl)  animate-left-right "}
          key={index}
          style={{
            opacity: 0,
            animationDelay: `calc(${index * 0.2}s)`,
            animationFillMode: "forwards",
            bottom: `${index * 20}px`,
            order: index,
          }}
        >
          <h1 class={"font-bold text-3xl text-cyan-700 p-2"}>
            {item.programmName}
          </h1>
          <h3
            class={"font-base leading-loose font-montserrat italic text-gray-500 p-2"}
          >
            {item.univerSity}
          </h3>
          <p class={"pl-2"}>Duration: {item.startDate} - {item.endDate}</p>
        </div>
      ))}
    </div>
  );
}
