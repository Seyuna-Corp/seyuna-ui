import { defaultTheme } from "@/theme/index.ts";
import type { Config } from "./types.ts";

/**
 * Default configuration settings for Seyuna UI.
 *
 * Provides a set of default values for the UI configuration, including theme, breakpoints, and other settings.
 *
 * @see {@link https://seyuna.com/docs/ui/config#default} for comprehensive details on the default configuration.
 */
export const defaultConfig: Config = {
  name: "Seyuna",
  slogan: "Another Seyuna App.",
  reset: true,
  theme: "default",
  mode: "system",
  breakpoints: {
    viewport: {
      xs: 576,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1600,
      _2xl: 1920,
      _3xl: 2560,
      _4xl: 3200,
      _5xl: 3840,
    },
    container: {
      xs: 10,
      sm: 20,
      md: 30,
      lg: 40,
      xl: 50,
      _2xl: 60,
      _3xl: 80,
      _4xl: 100,
      _5xl: 120,
    },
  },
  upscale: "_2xl",
  spacing: 1,
  themes: [defaultTheme],
  path: "./styles",
};

/**
 * Merges the provided configuration with the default configuration.
 *
 * Combines the default configuration with user-provided settings, with user settings overriding defaults.
 *
 * @param config - User-provided configuration settings
 * @returns The merged Seyuna **Config** object
 */
export const mergeSeyunaConfig = (config: Config): Config => {
  return { ...defaultConfig, ...config };
};

/**
 * Re-exports all types from the `types.ts` module.
 *
 * This makes all the types defined in `types.ts` available for import from this module.
 */
export type * from "./types.ts";
