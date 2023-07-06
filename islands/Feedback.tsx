import { useState } from "preact/hooks";
import { useSignal } from "@preact/signals";
import {
  FirstMessages,
  firstMessages,
  isEmail,
  lengthBetween,
  match,
  required,
  validate,
} from "validasaur";

import Toast from "../components/Toast.tsx";
import SectionWrap from "../components/layouts/section.tsx";

export default function FeedBack() {
  const [userComment, setUserComment] = useState<{ [key: string]: string }>({
    fullname: "",
    comment: "",
    email: "",
  });

  const formError = useSignal<FirstMessages>({});

  const [isShow, setShowToast] = useState(false);
  const toastInfo = useSignal({
    status: "",
    message: "",
  });

  const handlToast = (status: string, msg: string) => {
    setShowToast(true);
    toastInfo.value.status = status;
    toastInfo.value.message = msg;
  };

  const closeToast = () => {
    setShowToast(false);
    toastInfo.value.status = "Close";
    toastInfo.value.message = "";
  };

  const closeAfterTime = () => {
    setTimeout(() => {
      setShowToast(false);
      toastInfo.value.status = "Close";
      toastInfo.value.message = "";
    }, 2000);
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    const [passes, errors] = await validate(userComment, {
      fullname: [required, lengthBetween(5, 30), match(/^[a-zA-ZßüÜöÖäÄ\s]*$/)],
      comment: required,
      email: [required, isEmail],
    }, {
      messages: {
        "fullname.match":
          "FullName expects only English and Deutsch letter nor special characters or any other letter",
      },
    });
    if (passes) {
      formError.value = {};
      const rsponse = await fetch(
        "https://tarekulprotfolio-97.deno.dev/api/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userComment),
        },
      );
      const data = await rsponse.json();
      if (data.success === "OK") {
        setUserComment({ fullname: "", comment: "", email: "" });
        handlToast("success", "Thank you for giving your FeedBack");
        closeAfterTime();
      } else {
        handlToast("error", "404 Api isn't found  ");
        closeAfterTime();
      }
    } else {
      handlToast("error", "validation error");
      formError.value = firstMessages(errors);
      closeAfterTime();
    }
  };

  const handleInput = (e: Event) => {
    if (e.target !== null) {
      const { value } = e.target as HTMLInputElement;
      const { name } = e.target as HTMLInputElement;

      setUserComment({ ...userComment, [name]: value });
    }
  };

  return (
    <SectionWrap>
      <h1
        class="text-3xl font-medium  underline underline-offset-4 mb-4 decoration-cyan-300"
        id={"Feedback"}
      >
        FeedBack
      </h1>
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="fullName"
          >
            Your FullName
          </label>
          <input
            class={"shadow appearance-none border" +
              (formError.value.fullname && " border-red-500 ") +
              " rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
            id="fullName"
            type="text"
            placeholder="FullName"
            name={"fullname"}
            onInput={handleInput}
            value={userComment.fullname}
          />
          {formError.value.fullname && (
            <p class="mt-2 text-sm text-red-600 ">
              <span class="font-medium">Oops!</span> {formError.value.fullname}
            </p>
          )}
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            class={"shadow appearance-none border" +
              (formError.value.email && " border-red-500 ") +
              " rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
            id="email"
            type="email"
            placeholder="E-mail"
            name={"email"}
            onInput={handleInput}
            value={userComment.email}
          />
          {formError.value.email && (
            <p class="mt-2 text-sm text-red-600 ">
              <span class="font-medium">Oops!</span> {formError.value.email}
            </p>
          )}
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="comment"
          >
            Your Comment
          </label>
          <textarea
            class={"shadow appearance-none border" +
              (formError.value.comment && " border-red-500 ") +
              "rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
            id="comment"
            rows={5}
            cols={33}
            placeholder={"Please leave your comment I will take as advise"}
            name={"comment"}
            onInput={handleInput}
            value={userComment.comment}
          >
          </textarea>
          {formError.value.comment && (
            <p class="mt-2 text-sm text-red-600 ">
              <span class="font-medium">Oops!</span> {formError.value.comment}
            </p>
          )}
        </div>
        <button
          class={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
        >
          Submit
        </button>
      </form>
      <Toast
        status={toastInfo.value.status}
        message={toastInfo.value.message}
        show={isShow}
        closeAction={closeToast}
      />
    </SectionWrap>
  );
}
// https://tarekulprotfolio-97.deno.dev/api/user
