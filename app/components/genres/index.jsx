import React from 'react'
import ReactCSS from 'react-css-modules'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import styles from './styles'

@withStyles(styles)
@ReactCSS({ ...styles }, { allowMultiple: true })
export default class Genres extends React.Component {

  render() {
    const g = this.props.data.map((g, i) => {
      return <span styleName="genre" key={i}>{g.name}</span>
    })
    return (
      <div styleName="genres">
        {g}
      </div>
    );
  }
}
