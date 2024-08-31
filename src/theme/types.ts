/**
 * Represents the Seyuna theme configuration.
 *
 * Defines the properties of a theme, including its name and associated color palette.
 *
 * @see {@link https://seyuna.com/docs/ui/config/theme}
 */
export type Theme = {
  /**
   * The name of the theme.
   *
   * @see {@link https://seyuna.com/docs/ui/config/theme#name}
   */
  name: string;

  /**
   * The color palette used by the theme.
   *
   * @see {@link https://seyuna.com/docs/ui/config/theme#palette}
   */
  palette: Palette;
};

/**
 * A color palette defined using the OKLCH color model.
 *
 * This palette defines color values in terms of hue, lightness, and chroma for different theme modes.
 *
 * @see {@link https://seyuna.com/docs/ui/config/theme#palette}
 */
export type Palette = {
  /**
   * A collection of colors defined by hue to maintain consistency
   * in lightness and chroma across different elements.
   *
   * @see {@link https://seyuna.com/docs/ui/config/theme#palette-colors}
   */
  colors: Colors;

  /**
   * The default color settings for light mode, based on the OKLCH model.
   * This includes lightness and chroma adjustments specific to light themes.
   *
   * @see {@link https://seyuna.com/docs/ui/config/theme#palette-light}
   */
  light: ModeSettings;

  /**
   * The default color settings for dark mode, tailored for optimal contrast
   * and readability in low-light environments, using the OKLCH model.
   *
   * @see {@link https://seyuna.com/docs/ui/config/theme#palette-dark}
   */
  dark: ModeSettings;
};

/**
 * Pre-defined hue mappings for various theme color roles.
 *
 * Each key represents a specific color role in the theme, with its corresponding hue value.
 *
 * @see {@link https://seyuna.com/docs/ui/config/theme#colors}
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
 * Defines the color configuration settings for the current theme mode.
 *
 * @see {@link https://seyuna.com/docs/ui/config/theme#mode}
 */
export type ModeSettings = {
  /**
   * Color definitions specific to the current theme mode.
   *
   * @see {@link https://seyuna.com/docs/ui/config/theme#mode-colors}
   */
  colors: {
    /**
     * The default background color for the current mode.
     */
    background: Color;

    /**
     * The default text color for the current mode.
     */
    textColor: Color;

    /**
     * Additional user-defined colors specific to the mode.
     */
    [x: string]: Color;
  };

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
 * Represents a color defined using the OKLCH color model.
 *
 * The OKLCH model breaks down color into three components: lightness, chroma, and hue,
 * allowing for precise control over color attributes.
 *
 * @see {@link https://seyuna.com/docs/ui/config/theme#color}
 */
export type Color = {
  /**
   * The lightness component of the color, representing its brightness.
   */
  lightness: Lightness;

  /**
   * The chroma component of the color, indicating its colorfulness or intensity.
   */
  chroma: Chroma;

  /**
   * The hue component of the color, representing the angle on the color wheel.
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
 * Defines the theme mode.
 *
 * This specifies how the theme should adjust based on environmental factors or user preferences.
 *
 * - **"light"**: Sets the theme default mode as "light".
 * - **"dark"**: Sets the theme default mode as "dark".
 * - **"system"**: Automatically adapts to the system's current mode setting.
 * - **"time"**: Adjusts the theme mode based on the time of day.
 *
 * @see {@link https://seyuna.com/docs/ui/config/theme#mode}
 */
export type Mode = "light" | "dark" | "system" | "time";
