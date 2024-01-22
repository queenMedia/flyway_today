import { medias } from "@styles/vars";

export const getResponsiveKeysBreakpoints = (key) => {
  const startIndex = medias.findIndex((media) => media[key]);
  if (startIndex === -1) {
    return {};
  }
  const numSteps = startIndex + 1;
  return {
    startIndex,
    numSteps
  }
}