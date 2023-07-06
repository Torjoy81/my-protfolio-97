import { AiOutlineCheck, AiOutlineCloseCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";

interface ToastProps {
  status: string;
  position?: string;
  message?: string;
  show: boolean;
  closeAction(): void;
}

export default function Toast(
  { status, position, message, show, closeAction }: ToastProps,
) {
  return (
    <div
      class={"fixed flex items-center w-full max-w-xs p-4 mb-4 text-white " +
        (status === "success" ? " bg-green-500 " : " bg-red-600 ") +
        (status === ""
          ? " hidden "
          : show
          ? " animate-left-right "
          : " animate-right-left ") +
        " rounded-lg shadow top-20 right-5"}
      role="alert"
      style={{}}
    >
      <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg ">
        <span class="sr-only">Check icon</span>
        {status === "success"
          ? <AiOutlineCheck class={"w-4 h-4 text-gray-900"} />
          : <BiErrorCircle class={"w-4 h-4 text-red-600"} />}
      </div>
      <div class="ml-3 text-sm font-normal">
        {message === undefined ? "successfully, you've done " : message}
      </div>
      <button
        type="button"
        class="ml-auto -mx-1 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 "
        data-dismiss-target="#toast-success"
        aria-label="Close"
        onClick={closeAction}
      >
        <AiOutlineCloseCircle class={"w-6 h-6 text-gray-900"} />
        <span class="sr-only">Close</span>
      </button>
    </div>
  );
}
