import { useSignal } from "@preact/signals";

export default function InterestedField() {
  const interestField = useSignal([
    "BlockChain",
    "Cloud Application",
    "Traveling",
    "Cooking",
  ]);

  return (
    <div
      class={"md:(max-w-4xl h-[250px] bg-white/30 backdrop-blur-md shadow-lg my-4 overflow-y-auto) xs:(w-full p-4 bg-gradient-to-r from-violet-200 to-pink-200 border border-gray-500 rounded mt-6) -z-10"}
    >
      <ul class={"px-6 py-8 space-y-2 list-disc ml-8 "}>
        {interestField.value.map((interested, index) => (
          <li
            key={index}
            class={"texl-xl font-poppins text-gray-400 font-bold uppercase   animate-left-right"}
            style={{
              opacity: 0,
              animationDelay: `calc(${index * 0.2}s)`,
              animationFillMode: "forwards",
              bottom: `${index * 20}px`,
              order: index,
            }}
          >
            {interested}
          </li>
        ))}
      </ul>
    </div>
  );
}
