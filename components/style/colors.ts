import { lighten, darken } from 'polished'

export const backgroundColor = `#151f33`

export const lighterBackgroundColor = lighten(0.05, backgroundColor)

export const darkerBackgroundColor = darken(0.1, backgroundColor)

export const textColorDarkBackground = `#c8c8c8`

export const lighterTextColorDarkBackground = lighten(
  0.05,
  textColorDarkBackground
)
