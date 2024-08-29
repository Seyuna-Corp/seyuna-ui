import type { Mode, Theme } from "@/theme/types.ts";

/**
 * ## Seyuna UI Configuration
 *
 * Provides configuration options for the Seyuna UI framework.
 *
 * For more details, see: https://seyuna.com/docs/ui/config
 */
export interface Config {
  /**
   * The name of the application.
   *
   * For more details, see: https://seyuna.com/docs/ui/config/meta#name
   */
  name: string;

  /**
   * The slogan of the application.
   *
   * For more details, see: https://seyuna.com/docs/ui/config/meta#slogan
   */
  slogan: string;

  /**
   * The default theme for the application.
   *
   * For more details, see: https://seyuna.com/docs/ui/config/theme#default
   */
  theme: string;

  /**
   * The default mode of the application (e.g., light or dark mode).
   *
   * For more details, see: https://seyuna.com/docs/ui/config/mode
   */
  mode: Mode;

  /**
   * Determines whether a CSS reset is applied to reduce inconsistencies across different browsers.
   *
   * It's recommended to keep this option enabled unless custom resets are used.
   *
   * For more details, see: https://seyuna.com/css-reset
   */
  reset: boolean;

  /**
   * The breakpoints used by the application for responsive design.
   *
   * For more details, see: https://seyuna.com/docs/ui/config/breakpoints
   */
  breakpoints: Breakpoints;

  /**
   * Specifies the breakpoint from which content upscaling should begin, ensuring consistency across higher resolutions.
   *
   * For more details, see: https://seyuna.com/docs/ui/config/scaling
   */
  upscale: "lg" | "xl" | "_2xl" | "_3xl" | "_4xl" | string;

  /**
   * The default spacing value, in rem units, used by all components in the Seyuna ecosystem.
   *
   * For more details, see: https://seyuna.com/docs/ui/config/spacing
   */
  spacing: number;

  /**
   * An array of themes available in the application.
   *
   * Seyuna allows multiple themes to be defined and be used.
   *
   * For more details, see: https://seyuna.com/docs/ui/config/theme#themes
   */
  themes: Theme[];

  /**
   * The directory path where Seyuna will generate the necessary files.
   *
   * For more details, see: https://seyuna.com/docs/ui/config/path
   */
  path: string;
}

/**
 * ## Breakpoints
 *
 * Defines the viewport and container breakpoints for the application.
 *
 * For more details, see: https://seyuna.com/docs/ui/config/breakpoints
 */
export type Breakpoints = {
  /**
   * Viewport breakpoints, defined in pixel (px) units.
   */
  viewport: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    _2xl: number;
    _3xl: number;
    _4xl: number;
    _5xl: number;
    [key: string]: number;
  };

  /**
   * Container breakpoints, defined in rem units.
   */
  container: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    _2xl: number;
    _3xl: number;
    _4xl: number;
    _5xl: number;
    [key: string]: number;
  };
};
