import type { Theme } from "./types.ts";

/**
 * Default theme
 *
 * @returns Seyuna **Theme** object
 * @see {@link https://seyuna.com/docs/ui/config/theme#default}
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
      lightness: "60%",
      chroma: "0.25",
    },
    dark: {
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
      lightness: "70%",
      chroma: "0.25",
    },
  },
};

/**
 * Export all types
 */
export type * from "./types.ts";
