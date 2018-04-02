import { h, Component } from 'preact'
import style from './index.css'

class Picture extends Component {
  state = { load: false }

  componentDidMount() {
    if (window) {
      this.observer = new window.IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            this.setState({ load: true })
            observer.unobserve(entry.target)
          }
        })
      })
      this.observer.observe(this.ref)
    }
  }

  render() {
    const { load } = this.state
    const { imageName, folder, alt, className } = this.props
    const [image, extension] = imageName.split('.')
    const folderRoute = folder ? `${folder}/` : ''
    return (
      <picture ref={ c => (this.ref = c) } className={ className }>
        { load && (
          <source
            alt={ alt }
            className={ style.shouldFit }
            srcSet={ `../../assets/images/${folderRoute}${image}.webp` }
            type="image/webp"
          />
        ) }
        { load && (
          <source
            alt={ alt }
            className={ style.shouldFit }
            srcSet={ `../../assets/images/${folderRoute}${image}.${extension}` }
            type={ `image/${extension}` }
          />
        ) }
        { load && (
          <img
            alt={ alt }
            className={ style.shouldFit }
            src={ `../../assets/images/${folderRoute}${image}.${extension}` }
          />
        ) }
      </picture>
    )
  }
}

Picture.propTypes = {}

export default Picture
