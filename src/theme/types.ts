/**
 * Seyuna theme object.
 *
 * See more: https://seyuna.com/docs/ui/config/theme
 */
export type Theme = {
  /**
   * The name of the theme.
   *
   * See more: https://seyuna.com/docs/ui/config/theme#name
   */
  name: string;

  /**
   * The color palette of the theme.
   *
   * See more: https://seyuna.com/docs/ui/config/theme#palette
   */
  palette: Palette;
};

/**
 * A color palette defined in OKLCH.
 *
 * See more: https://seyuna.com/docs/ui/config/theme#palette
 */
export type Palette = {
  /**
   * Colors are defined using the hue point only in order to keep colors consistent in terms of lightness and chroma.
   *
   * See more: https://seyuna.com/docs/ui/config/theme#palette-colors
   */
  colors: Colors;

  /**
   * The default color values for light mode.
   *
   * See more: https://seyuna.com/docs/ui/config/theme#palette-light
   */
  light: ModeSettings;

  /**
   * The default color values for dark mode.
   *
   * See more: https://seyuna.com/docs/ui/config/theme#palette-dark
   */
  dark: ModeSettings;
};

/**
 * Pre-defined color mappings for the theme.
 *
 * See more: https://seyuna.com/docs/ui/config/theme#colors
 */
export type Colors = {
  alpha: Hue;
  beta: Hue;
  gamma: Hue;
  delta: Hue;
  epsilon: Hue;
  zeta: Hue;
  eta: Hue;
  theta: Hue;
  iota: Hue;
  kappa: Hue;
  lambda: Hue;
  mu: Hue;
  nu: Hue;
};

/**
 * Pre-defined color settings for mode.
 *
 * See more: https://seyuna.com/docs/ui/config/theme#mode
 */
export type ModeSettings = {
  /**
   * The default background color for the current mode.
   */
  background: Color;

  /**
   * The default text color for the current mode.
   */
  textColor: Color;

  /**
   * The default OKLCH lightness for the current mode.
   */
  lightness: Lightness;

  /**
   * The default OKLCH chroma for the current mode.
   */
  chroma: Chroma;
};

/**
 * Represents a color in OKLCH format.
 *
 * See more: https://seyuna.com/docs/ui/config/theme#color
 */
export type Color = {
  /**
   * OKLCH Lightness Component
   */
  lightness: Lightness;
  /**
   * OKLCH Chroma Component
   */
  chroma: Chroma;
  /**
   * OKLCH Hue Component
   */
  hue: Hue;
};

/**
 * OKLCH Hue Component
 */
export type Hue = string;

/**
 * OKLCH Chroma Component
 */
export type Chroma = string;

/**
 * OKLCH Lightness Component
 */
export type Lightness = string;

/**
 * The mode of the theme.
 *
 * See more: https://seyuna.com/docs/ui/config/theme#mode
 */
export type Mode = "light" | "dark" | "system" | "time";
