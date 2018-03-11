const variables = {
  side_bar_width: '250px',
  black: '#111',
  green: '#25b88d',
  orange: '#dc661d',
  text_color: 'var(--black)',
  link_color: 'var(--green)',
  link_hover: 'var(--orange)',
  default_margin: '1.5em',
  ease: '.2s ease-in-out',
  easeslow: '.6s ease-in'
}
const features = {
  customProperties: {
    variables
  }
}

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-cssnext')({
      browsers: ['last 2 versions', 'IE > 10'],
      features
    })
  ]
}
