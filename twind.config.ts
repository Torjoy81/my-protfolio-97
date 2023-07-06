import { defineConfig } from "https://esm.sh/@twind/core@1.1.3";
import presetTailwind from "https://esm.sh/@twind/preset-tailwind@1.1.4";
import presetAutoprefix from "https://esm.sh/@twind/preset-autoprefix@1.0.7";

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
        },
        animation: {
          "left-right": "leftright 0.5s ease-in forwards",
          "right-left": "rightleft 0.5s ease-out forwards",
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
