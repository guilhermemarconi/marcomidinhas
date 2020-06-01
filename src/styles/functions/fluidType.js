/**
 * Calculate the definition of a line between two points.
 * @param {Object} sizes An object of viewport widths and size value pairs.
 * @returns A linear equation as a calc() CSS function.
 * @author Guilherme Marconi <guiilhermemarconi@gmail.com>
 * @example `font-size: ${ fluidType({ 600: 18, 1200: 30 }) }`;
 */
function fluidType(sizes) {
  const breakpoint = Object.keys(sizes);

  if (breakpoint.length !== 2) {
    throw Error(`fluidType() sizes must be exactly 2 values`);
  }

  const smallBreakpoint = breakpoint[0];
  const largeBreakpoint = breakpoint[1];
  const smallBreakpointValue = sizes[smallBreakpoint];
  const largeBreakpointValue = sizes[largeBreakpoint];
  const slope =
    (largeBreakpointValue - smallBreakpointValue) /
    (largeBreakpoint - smallBreakpoint);

  let yIntercept = smallBreakpointValue - slope * smallBreakpoint;
  let sign = "+";

  if (yIntercept < 0) {
    sign = "-";
    yIntercept = Math.abs(yIntercept);
  }

  return `calc(${slope * 100}vw ${sign} ${yIntercept}px)`;
}

export default fluidType;
