export default function ViedoPlayer() {
  return (
    <div class="  md:( max-w-4xl mt-20  mx-auto gap-x-10)   xs:(flex flex-col gap-y-4 items-center mt-10 )">
      <h1 class="text-4xl font-bold font-poppins text-cyan-600 ">
        Project Demo
      </h1>
      <div
        class={"md:(flex justify-center items-center gap-x-10 p-4) xs:(flex flex-col items-center p-2.5)"}
      >
        <iframe
          src="https://player.vimeo.com/video/842808218?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder={"0"}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style="width:100%;height:100%;"
          title="ProjectDemo"
        >
        </iframe>
        <div class={"md:(rounded  bg-white/30 backdrop-blur-md shadow-lg p-4)"}>
          <h1 class={"text-3xl font-medium font-montserrat p-2.5 text-sky-500"}>
            EasyBooking
          </h1>
          <p
            class={"font-light leading-normal px-2.5 font-poppins  text-justify"}
          >
            This Application is a TrvelBooking Application. For making this
            application, I want to show the bsic frotend features like tab menu,
            pagination, search, filtering, animation, form validation etc. Here
            I did backend staff like api managment for multiple filter. The
            Technology, I did use Vue, Nuxt, MongoDB, Prisma, Swiper.
          </p>
          <p class={"text-red-500 font-bold p-2.5"}>
            Resource :{" "}
            <span class={"text-gray-300 font-montserrat "}>
              GitHub Code{" "}
            </span>
            <a
              class={"text-blue-400 underline"}
              href="https://github.com/Torjoy81/Tavelbooking_managment_site"
            >
              Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
