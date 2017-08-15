import ImageProgressive from 'react-progressive-bg-image'
import globalStyles from 'global-styles'
import ReactCSS from 'react-css-modules'
import React, { Component } from 'react'
import { imageBase } from '../../APIs/config/'
import styles from './style'


@ReactCSS({ ...globalStyles, ...styles }, { allowMultiple: true })
class MovieBanner extends Component {
  render() {
    const {
      latest,
    } = this.props
    return (
      <div>
        <div styleName="text-content">
          <div>
            <div styleName="type">
              In Cinemas
            </div>
            <div styleName="title">
              {latest.title}
            </div>
            <div styleName="row">
              <div styleName="description hidden-xs col-sm-12 col-lg-6">
                {latest.overview}
              </div>
            </div>
            <button styleName="button-primary play">Watch Trailer</button>
          </div>
        </div>
        <ImageProgressive
          placeholder={`${imageBase}/w45${latest.backdrop_path}`}
          src={`${imageBase}/original${latest.backdrop_path}`}
          style={{
            height: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        />
        <div styleName="fade-out"></div>
      </div>
    )
  }
}

export default MovieBanner