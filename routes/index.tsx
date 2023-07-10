import { Head } from "$fresh/runtime.ts";
import FeedBack from "../islands/Feedback.tsx";
import About from "../components/base/other/about.tsx";
import Skills from "../components/base/other/skill.tsx";

import BasicLayout from "../components/layouts/default.tsx";
import ViedoPlayer from "../components/viedoPlayer.tsx";
import Tab from "../islands/Tab.tsx";
import Zippy from "../islands/zippyButton.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tarek's Portfolio</title>
        <link
          rel={"icon"}
          href={"/image/protfolio.png"}
          type={"image/x-icon"}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@300;400;500&family=Poppins:wght@200;300;400;500;600;700;800;900&family=Raleway:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        >
        </link>
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/footer.css" />
      </Head>
      <BasicLayout>
        <About />
        <Skills />
        <ViedoPlayer />
        <Zippy />
        <Tab />
        <FeedBack />
      </BasicLayout>

      <script src="https://player.vimeo.com/api/player.js"></script>
    </>
  );
}
