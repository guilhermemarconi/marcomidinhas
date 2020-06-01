import hexToRgb from "./functions/hexToRgb";
import fluidType from "./functions/fluidType";

export const color = {
  primary: `#667302`,
  primaryLight: `#83a603`,
  primaryDark: `#010d00`,
  secondary: `#f24405`,
  terciary: `#a69677`,
  gray: `#777`,
  grayLight: `#ddd`,
  grayDark: `#333`,
};

export const font = {
  family: {
    serif: `Rufino, Times, 'Times New Roman', serif`,
    sansSerif: `'Be Vietnam', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
  },
  size: {
    base: `1.5vw`,
    smaller: `0.5rem`,
    small: `0.75rem`,
    regular: `1rem`,
    large: `1.25rem`,
    larger: `1.5rem`,
    largest: `1.75rem`,
    proportional: {
      smaller: `0.5em`,
      small: `0.75em`,
      large: `1.25em`,
      larger: `1.5em`,
    },
  },
  weight: {
    regular: 400,
    bold: 700,
    extraBold: 800,
  },
};

export const spacing = {
  smallest: `0.25rem`,
  smaller: `0.5rem`,
  small: `1rem`,
  medium: `1.5rem`,
  large: `2rem`,
  larger: `2.5rem`,
  largest: `3rem`,
  proportional: {
    small: `1em`,
    medium: `1.5em`,
    large: `2em`,
  },
};

export const border = {
  radius: {
    smaller: `0.25rem`,
    small: `0.5rem`,
    medium: `1rem`,
    large: `1.5rem`,
    rounded: `1000rem`,
  },
};

export const shadow = {
  small: `0.25rem`,
  medium: `1rem`,
  large: `1.5rem`,
  larger: `2rem`,
  largest: `2.5rem`,
  omg: `3rem`,
};

export const transition = {
  easing: `ease`,
  duration: {
    small: `0.15s`,
    medium: `0.3s`,
    large: `0.5s`,
  },
};

export const zIndex = {
  minimum: 1,
  medium: 2,
  maximum: 3,
  omg: 4,
};

export const breakpoint = {
  mobile: `max-width: 599px`,
  tabletPortrait: `min-width: 600px`,
  tabletLandscape: `min-width: 900px`,
  desktop: `min-width: 1200px`,
  desktopLarge: `min-width: 1800px`,
};

export const functions = {
  fluidType,
  hexToRgb,
  rgba: (hex, alpha = 1) => `rgba(${hexToRgb(hex)}, ${alpha})`,
};
