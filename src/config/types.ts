import type { Mode, Theme } from "@/theme/types.ts";

/**
 * ## Seyuna UI Configuration
 *
 * Represents the configuration options for the Seyuna UI framework,
 * including application details, theming, and responsive design settings.
 *
 * @see {@link https://seyuna.com/docs/ui/config}
 */
export interface Config {
  /**
   * The name of the application.
   *
   * @see {@link https://seyuna.com/docs/ui/config/meta#name}
   */
  name: string;

  /**
   * The slogan of the application.
   *
   * @see {@link https://seyuna.com/docs/ui/config/meta#slogan}
   */
  slogan: string;

  /**
   * The default theme applied to the application.
   *
   * Specifies the theme name from the available themes that should be
   * used by default.
   *
   * @see {@link https://seyuna.com/docs/ui/config/theme#default}
   */
  theme: string;

  /**
   * The default mode of the application (e.g., light, dark or system).
   *
   * @see {@link https://seyuna.com/docs/ui/config/mode}
   */
  mode: Mode;

  /**
   * Indicates whether a CSS reset is applied to normalize styling across
   * different browsers.
   *
   * Recommended to keep enabled unless a custom CSS reset is used.
   *
   * @see {@link https://seyuna.com/css-reset}
   */
  reset: boolean;

  /**
   * Breakpoints for responsive design, specifying viewport and
   * container sizes.
   *
   * @see {@link https://seyuna.com/docs/ui/config/breakpoints}
   */
  breakpoints: Breakpoints;

  /**
   * Specifies the breakpoint from which content should be upscaled to
   * ensure consistency on larger screens.
   *
   * @see {@link https://seyuna.com/docs/ui/config/scaling}
   */
  upscale: "lg" | "xl" | "_2xl" | "_3xl" | "_4xl" | string;

  /**
   * Default spacing value in rem units used by all components.
   *
   * Affects the margin, padding, and spacing throughout the application.
   *
   * @see {@link https://seyuna.com/docs/ui/config/spacing}
   */
  spacing: number;

  /**
   * Array of available themes for the application.
   *
   * Allows multiple themes to be defined and switched as needed.
   *
   * @see {@link https://seyuna.com/docs/ui/config/theme#themes}
   */
  themes: Theme[];

  /**
   * Directory path where Seyuna will generate necessary files.
   *
   * @see {@link https://seyuna.com/docs/ui/config/path}
   */
  path: string;
}

/**
 * Defines viewport and container breakpoints for responsive design.
 *
 * Specifies the sizes in **pixel (px)** for viewport breakpoints and
 * **rem** units for container breakpoints.
 *
 * @see {@link https://seyuna.com/docs/ui/config/breakpoints}
 */
export type Breakpoints = {
  /**
   * Viewport breakpoints in pixel units.
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
   * Container breakpoints in rem units.
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
