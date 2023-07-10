import { defineConfig } from "@twind/core";
import presetTailwind from "@twind/preset";
import presetAutoprefix from "@twind/preset_autoprefix";

export default {
  ...defineConfig({
    presets: [presetTailwind(), presetAutoprefix()],
    theme: {
      fontFamily: {
        sans: ["Helvetica", "sans-serif"],
        serif: ["Times", "serif"],
        releway: '"Raleway", sans-serif',
        signature: '"Great Vibes", cursive',
        // dmserif: ["DM Serif", "serif"],
        // sans: ["Helvetica", "sans-serif"],
        montserrat: '"Montserrat", sans-serif',
        // poza: ["Proza", "Libre"],
        poppins: '"Poppins", sans-serif',
      },
      extend: {
        keyframes: {
          leftright: {
            "0%": { transform: "translateX(100px)", opacity: 0 },

            "100%": { transform: "translateX(0px)", opacity: 1 },
          },
          rightleft: {
            "0%": { transform: "translateX(0px)", opacity: 1 },

            "100%": { transform: "translateX(1000px)", opacity: 0 },
          },
          UpToDown: {
            "0%": {
              transform: "translateY(-100%)",
              opacity: 1,
            },
            "100%": {
              transform: "translateY(0%)",
              opacity: 1,
            },
          },
          DownToUp: {
            "0%": {
              transform: "translateY(0%)",
              opacity: 1,
            },
            "100%": {
              transform: "translateY(-100%)",
              opacity: 1,
            },
          },
          animateBlob: {
            "0%": {
              borderRadius: " 45% 55% 70% 35% / 70% 30% 90% 40%",
            },
            "25%": {
              borderRadius: " 55% 45% 30% 35% / 50% 30% 60% 10%",
            },
            "50%": {
              borderRadius: " 65% 35% 35% 65% / 40% 60% 30% 70%",
            },
            "75%": {
              borderRadius: " 35% 65% 60% 40% / 70% 30% 40% 60%",
            },
            "100%": {
              borderRadius: " 45% 55% 70% 35% / 70% 30% 90% 40%",
            },
          },
        },
        animation: {
          "left-right": "leftright 0.5s ease-in forwards",
          "right-left": "rightleft 0.5s ease-out forwards",
          "up-down": "UpToDown 1s ease-in forwards",
          "down-up": "DownToUp 1s ease-out forwards",
          "blob": "animateBlob 8s linear infinite ",
        },
      },
      screens: {
        "xs": { "max": "420px" },
        "sm": "640px",

        "md": "768px",

        "lg": "1024px",

        "xl": "1280px",

        "2xl": "1536px",
      },
    },
  }),

  selfURL: import.meta.url,
};
