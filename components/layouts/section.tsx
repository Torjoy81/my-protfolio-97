import { ComponentChildren } from "preact";
type ChildrenProps = {
  children: ComponentChildren;
};
export default function SectionWrap({ children }: ChildrenProps) {
  return (
    <div class="  md:(max-w-4xl mt-20 mx-auto)   xs:(w-full flex flex-col gap-y-4 justify-center items-center)">
      {children}
    </div>
  );
}
