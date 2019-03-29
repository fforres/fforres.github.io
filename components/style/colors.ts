import { lighten, darken } from 'polished'

export const backgroundColor = `#151f33`

export const lighterBackgroundColor = lighten(0.06, backgroundColor)

export const darkerBackgroundColor = darken(0.06, backgroundColor)

export const textColorDarkBackground = `#c8c8c8`

export const lighterTextColorDarkBackground = lighten(
  0.5,
  textColorDarkBackground
)
