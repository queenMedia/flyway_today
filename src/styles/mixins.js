import { css, cx } from "@emotion/css";
import { fontTypes } from "@utils/constants/globals"
import { getResponsiveKeysBreakpoints } from "@constants/styles"
import { medias, medias_object } from "./vars";

export function forsize(queries) {
  const devices = Object.keys(queries);
  const responsive = devices.map((key) => (medias_object[key] ? css`
    @media screen and (${medias_object[key]}) {
      ${queries[key]}
    }
  ` : ""));
  return css`${responsive}`;
}

export const hanldeProperty = ({
  max, 
  min,
  property,
  key = "tv-small"
}) => {
  const { startIndex, numSteps } = getResponsiveKeysBreakpoints(key);
  const step = (max - min) / numSteps;
  const propSizes = {};

  for (let i = startIndex; i >= 0; i--) {
    const mediaKey = Object.keys(medias[i])[0];
    const fontSize = min + step * i;
    propSizes[mediaKey] = css`
      ${property}: ${fontSize}px;
    `;
  }
  const mediaSizes = forsize(propSizes);
  return mediaSizes;
};

export const flex = ({ 
  justify = 'center',
  gap,
  gapMin = null,
  align = "center",
  direction= "row",
  wrap = "nowrap"
}) => {
  const gapContent = gap ? `gap: ${gap}px;` : "";
  const alignContent = align ? `align-items: ${align};` : "";
  const gapResponsive = gapMin ? hanldeProperty({
      max: gap,
      min: gapMin,
      property: "gap"
    }) : ``;
  return cx(
    gapResponsive,
    css`
      display: flex;
      justify-content: ${justify};
      flex-direction: ${direction};
      flex-wrap: ${wrap};
      ${gapContent}
      ${alignContent}
    `);
};

export function overlay({color, position}) {
  const overlay = css`
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${color};
    z-index: ${position};
  `
  return overlay;
};

export const responsiveFont = ({max, min, key = "tv-small"}) => {
  const { startIndex, numSteps } = getResponsiveKeysBreakpoints(key);
  const step = (max - min) / numSteps;
  const fontSizes = {};

  for (let i = startIndex; i >= 0; i--) {
    const mediaKey = Object.keys(medias[i])[0];
    const fontSize = min + step * i;
    fontSizes[mediaKey] = css`
      font-size: ${fontSize}px;
    `;
  }
  const mediaSizes = forsize(fontSizes);
  return mediaSizes;
};

export const font = ({
  size = 16,
  weight = 400,
  style = "normal",
  line = "normal",
  align = "center",
  min,
  type = "m",
  key = "tv-small"
}) => {
  const styledFont = cx(
    responsiveFont({
      max: size,
      min: min ? min : fontTypes[type],
      key: key
    }),
    css`
      font-size: ${size}px;
      font-weight: ${weight};
      font-style: ${style};
      line-height: ${line};
      text-align: ${align};
    `
  )
  return styledFont;
};

export const handlePaddings = ({
  maxX, 
  minX = 10, 
  maxY, 
  minY = 10, 
  key = "tv-small",
}) => {
  const { startIndex, numSteps } = getResponsiveKeysBreakpoints(key);
  const stepX = (maxX - minX) / numSteps;
  const stepY = (maxY - minY) / numSteps;

  const paddingResponsive = {};

  for (let i = startIndex; i >= 0; i--) {
    const mediaKey = Object.keys(medias[i])[0];
    const paddingX = minX + stepX * i;
    const paddingY = minY + stepY * i;
    paddingResponsive[mediaKey] = css`
      padding: ${paddingY}px ${paddingX}px;
    `;
  }
  const mediaSizes = forsize(paddingResponsive);
  return cx(mediaSizes, css`
    padding: ${maxY}px ${maxX}px;
  `);
};

export const handleDimensions = ({
  max, 
  min, 
  key = "tv-small",
  square, 
  dimension = "width"
}) => {
  const { startIndex, numSteps } = getResponsiveKeysBreakpoints(key);
  const step = (max - min) / numSteps;

  const dimensionSizes = {};
  dimensionSizes[key] = css`
    ${
      dimension === 'width' ?
      css`
        width: ${max}px;
        height: ${square ? `${max}px` : 'auto'};
      ` : 
      css`
        height: ${max}px;
        width: ${square ? `${max}px` : 'auto'};
      `
    }
    `;
  for (let i = startIndex; i >= 0; i--) {
    const mediaKey = Object.keys(medias[i])[0];
    const width = min + step * i;
    dimensionSizes[mediaKey] = css`
      ${
        dimension === 'width' ?
        css`
          width: ${width}px;
          height: ${square ? `${width}px` : 'auto'};
        ` : 
        css`
          height: ${width}px;
          width: ${square ? `${width}px` : 'auto'};
        `
      }
    `;
  }
  const mediaSizes = forsize(dimensionSizes);
  return mediaSizes;
};
const positions = ["left", "center", "right", "top", "bottom"];
export const handleBgPosition = ({
  maxX,
  minX,
  maxY,
  minY,
  key = "tv-small",
}) => {
  const { startIndex, numSteps } = getResponsiveKeysBreakpoints(key);
  const xAsKey = positions.indexOf(maxX);
  const yAsKey = positions.indexOf(maxY);

  const stepX = xAsKey === -1 ? ((maxX - minX) / numSteps) : maxX;
  const stepY = yAsKey === -1 ? ((maxY - minY) / numSteps) : maxY;

  const bgPosition = {};

  for (let i = startIndex; i >= 0; i--) {
    const mediaKey = Object.keys(medias[i])[0];

    // Calcula la posición en el eje X
    const positionX = xAsKey === -1 ? (minX + stepX * i) : maxX;
    const xPos = xAsKey === -1 ? `${positionX}px` : positionX;

    // Calcula la posición en el eje Y
    const positionY = yAsKey === -1 ? (minY + stepY * i) : maxY;
    const yPos = yAsKey === -1 ? `${positionY}px` : positionY;

    bgPosition[mediaKey] = css`
      background-position: ${xPos} ${yPos};
    `;
  }

  const mediaSizes = forsize(bgPosition);
  return mediaSizes;
};

export const handleHeight = ({
  max,
  min,
  width = "100%",
  rule = "min",
  key = "tv-small",
}) => {
  const { startIndex, numSteps } = getResponsiveKeysBreakpoints(key);
  const step = (max - min) / numSteps;

  const dimensionSizes = {
    "tv-4k": css`
      width: ${width};
      ${rule}-height: ${max}px;
    `
  };

  for (let i = startIndex; i >= 0; i--) {
    const mediaKey = Object.keys(medias[i])[0];
    const size = min + step * i;
    dimensionSizes[mediaKey] = css`
      width: ${width};
      ${rule}-height: ${size}px;
    `;
  }
  const mediaSizes = forsize(dimensionSizes);
  return mediaSizes;
};

export const grid = ({ 
  width = "100%",
  columns = "100%",
  rows = "auto",
  colGap = 0,
  rowGap = 0,
  gapMinCol = null,
  areas 
}) => {
  const areasContent = areas ? `grid-template-areas: ${areas};` : "";
  const gapColResponsive = gapMinCol ? hanldeProperty({
    max: colGap,
    min: gapMinCol,
    property: "gap"
  }) : ``;
  return cx(
    gapColResponsive,
    css`
    width: ${width};
    display: grid;
    row-gap: ${rowGap}px;    
    column-gap: ${colGap}px;    
    grid-template-columns: ${columns};
    grid-template-rows: ${rows};
    ${areasContent}
  `);
};

export const content = ({ 
  width = "1440px"
}) => css`
  width: 100%;
  max-width: ${width};
`;

export const bgimage = ({ 
  image, 
  color, 
  size = "cover", 
  position = "center" 
}) => {
  const background = color
    ? `background: url(${image}), ${color};`
    : `background-image: url(${image});`;

  return css`
    ${background}
    background-size: ${size};
    background-position: ${position};
    background-repeat: no-repeat;
  `;
};
