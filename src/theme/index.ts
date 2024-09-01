import type { Theme } from "./types.ts";

/**
 * Represents the default theme configuration for Seyuna UI.
 *
 * This theme provides a predefined set of color values and mode settings
 * to offer a starting point for theming the application.
 *
 * @see {@link https://seyuna.com/docs/ui/config/theme#default} for more details.
 */
export const defaultTheme: Theme = {
  name: "default",
  palette: {
    colors: {
      alpha: "0",
      beta: "27.69230769230769",
      gamma: "55.38461538461538",
      delta: "83.07692307692307",
      epsilon: "110.7692307692308",
      zeta: "138.4615384615385",
      eta: "166.1538461538461",
      theta: "193.8461538461538",
      iota: "221.5384615384615",
      kappa: "249.2307692307692",
      lambda: "276.9230769230769",
      mu: "304.6153846153846",
      nu: "332.3076923076923",
    },
    light: {
      colors: {
        background: {
          lightness: "100%",
          chroma: "0",
          hue: "0",
        },
        textColor: {
          lightness: "0%",
          chroma: "0",
          hue: "0",
        },
      },
      preferences: {
        lightness: "60%",
        chroma: "0.25",
      },
    },
    dark: {
      colors: {
        background: {
          lightness: "0%",
          chroma: "0",
          hue: "0",
        },
        textColor: {
          lightness: "100%",
          chroma: "0",
          hue: "0",
        },
      },
      preferences: {
        lightness: "70%",
        chroma: "0.25",
      },
    },
  },
};

/**
 * Re-exports all types from the `types.ts` module.
 *
 * This makes all the types defined in `types.ts` available for import from this module.
 */
export type * from "./types.ts";
