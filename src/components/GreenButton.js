// src/components/LikeButton.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import HeartGrey from '../images/heart-grey.svg'
import HeartRed from '../images/heart-red.svg'
import './LikeButton.css'

class GreenButton extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    rated: PropTypes.bool
  }

  classNames() {
    const { rated } = this.props
    let classes = 'GreenButton'

    if (rated) { classes += ' rated' }

    return classes
  }

  toggleLike() {
    this.props.onChange()
  }

  render() {
    const { rated } = this.props

    return (
      <p className={ this.classNames() }>
        <button onClick={ this.toggleRate.bind(this) }>
          <img alt="like" className="heart" src={ rated ? HeartRed : HeartGrey } />
          <span className="copy">
            <img alt="like" className="heart" src={ rated ? HeartRed : HeartGrey } />
          </span>
        </button>
        <span className="likes">{ liked ? 'You like this' : null }</span>
      </p>
    )
  }
}

export default GreenButton
