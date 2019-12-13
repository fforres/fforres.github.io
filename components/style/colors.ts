import { lighten, darken, transparentize } from "polished";

export const backgroundColor = "#151f33";

export const blackColor = "black";

export const lighterBackgroundColor = lighten(0.06, backgroundColor);

export const darkerBackgroundColor = darken(0.06, backgroundColor);

export const textColorDarkBackground = "#c8c8c8";

export const textColorLightBackground = "#454545";

export const textLinkColor = "#1b7fe3";

export const lighterTextLinkColor = transparentize(0.5, textLinkColor);

export const lighterTextColorDarkBackground = lighten(
  0.5,
  textColorDarkBackground
);

export const darkerTextColorDarkBackground = darken(
  0.5,
  textColorDarkBackground
);
