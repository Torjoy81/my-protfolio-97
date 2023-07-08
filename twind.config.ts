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
        },
        animation: {
          "left-right": "leftright 0.5s ease-in forwards",
          "right-left": "rightleft 0.5s ease-out forwards",
          "up-down": "UpToDown 1s ease-in forwards",
          "down-up": "DownToUp 1s ease-out forwards",
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
