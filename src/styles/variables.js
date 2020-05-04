export const color = {
  primary: "#667302",
  primaryLight: "#83a603",
  primaryDark: "#010d00",
  secondary: "#f24405",
  terciary: "#a69677",
}

export const font = {
  family: {
    serif: `Rufino, 'Times New Roman', Times, serif`,
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
  },
  weight: {
    regular: 400,
    bold: 700,
    extraBold: 800,
  },
}

export const breakpoints = {
  mobile: `max-width: 599px`,
  tabletPortrait: `min-width: 600px`,
  tabletLandscape: `min-width: 900px`,
  desktop: `min-width: 1200px`,
  desktopLarge: `min-width: 1800px`,
}

export const functions = {}

const variables = {
  color,
  font,
  breakpoints,
  functions,
}

export default variables
