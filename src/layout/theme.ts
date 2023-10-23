import { pxTo } from "@/utils/conversors/pxTo";

export const fontweights = {
  bold: 800,
  medium: 700,
  regular: 400,
  semibold: 500,
};

export const fontsNames = {
  primary: "Figtree",
  secondary: "Fredoka",
};

export const theme = {
  colors: {
    pink100: "#DB6885",
    pink50: "#FFD3D7",
    pink25: "#F5EAEB",
    pink10: "#FFF4F5",
    black100: "#2F3137",
    black50: "#707070",
    black10: "#c7c7c7",
    yellow: "#ffc107",
  },
  fonts: [
    {
      name: fontsNames.primary,
      weights: {
        bold: fontweights.bold,
        medium: fontweights.medium,
        regular: fontweights.regular,
        semibold: fontweights.regular,
      },
      variants: {
        "heading-1": {
          fontFamily: fontsNames.primary,
          type: "bold",
          lineHeight: "auto",
          letterSpacing: "-4%",
          size: pxTo("rem", 70),
        },

        "heading-2": {
          fontFamily: fontsNames.primary,
          type: "bold",
          lineHeight: "auto",
          letterSpacing: "-4%",
          size: pxTo("rem", 54),
        },

        "heading-3": {
          fontFamily: fontsNames.primary,
          type: "bold",
          lineHeight: "auto",
          letterSpacing: "-4%",
          size: pxTo("rem", 38),
        },

        "heading-4": {
          fontFamily: fontsNames.primary,
          type: "bold",
          lineHeight: "auto",
          letterSpacing: "-4%",
          size: pxTo("rem", 28),
        },

        "heading-5": {
          fontFamily: fontsNames.primary,
          type: "bold",
          lineHeight: "auto",
          letterSpacing: "-4%",
          size: pxTo("rem", 24),
        },

        "heading-6": {
          fontFamily: fontsNames.primary,
          type: "semibold",
          lineHeight: "36",
          letterSpacing: "-4%",
          size: pxTo("rem", 22),
        },

        "heading-7": {
          fontFamily: fontsNames.primary,
          type: "bold",
          lineHeight: "auto",
          letterSpacing: "-4%",
          size: pxTo("rem", 14),
        },

        // Body Text Style
        "body-1": {
          fontFamily: fontsNames.primary,
          type: "regular",
          lineHeight: "32",
          letterSpacing: "-4%",
          size: pxTo("rem", 18),
        },

        "body-2-regular": {
          fontFamily: fontsNames.primary,
          type: "regular",
          lineHeight: "16",
          letterSpacing: "-4%",
          size: pxTo("rem", 16),
        },

        "body-2-medium": {
          fontFamily: fontsNames.primary,
          type: "medium",
          lineHeight: "auto",
          letterSpacing: "-4%",
          size: pxTo("rem", 16),
        },

        "body-3-regular": {
          fontFamily: fontsNames.primary,
          type: "regular",
          lineHeight: "auto",
          letterSpacing: "-4%",
          size: pxTo("rem", 14),
        },

        "body-3-medium": {
          fontFamily: fontsNames.secondary,
          type: "medium",
          lineHeight: "auto",
          letterSpacing: "-4%",
          size: pxTo("rem", 14),
        },

        "body-3-bold": {
          fontFamily: fontsNames.secondary,
          type: "bold",
          lineHeight: "auto",
          letterSpacing: "-4%",
          size: pxTo("rem", 14),
        },
      },
    },
    {
      name: fontsNames.secondary,
      weights: {
        bold: fontweights.bold,
      },
      variants: {
        "caption-28": {
          fontFamily: fontsNames.secondary,
          type: "regular",
          lineHeight: "auto",
          letterSpacing: "-2%",
          size: pxTo("rem", 28),
        },

        "caption-20": {
          fontFamily: fontsNames.secondary,
          type: "regular",
          lineHeight: "auto",
          letterSpacing: "-1.5%",
          size: pxTo("rem", 20),
        },
      },
    },
  ],
};
