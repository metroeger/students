import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import GreenButton from '../components/LikeButton'
import { toggleRateStudent } from '../actions/branches'
import './RecipeItem.css'

const PLACEHOLDER = 'http://via.placeholder.com/500x180?text=No%20Image'

export const studentShape = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string,
    color: PropTypes.string,
    rated: PropTypes.bool
})

class Student extends PureComponent {
  static propTypes = {
    ...studentShape.isRequired,
    rated: PropTypes.func.isRequired
  }

  toggleRate = () => {
    const { _id } = this.props
    this.props.toggleRateStudent(_id)
  }

  render() {
    const { _id, name, photo, color, rated } = this.props

    return(
      <article className="Student">
        <header>
          <div
            className="cover"
            style={{ backgroundImage: `url(${photo || PLACEHOLDER })` }} />


            <ul className="categories">
              <RecipeCategory { ...categories } />
            </ul>
          </header>
          <div>
            <p>{ summary }</p>
          </div>
          <footer>
            <GreenButton
              onChange={this.toggleRate}
              rated={rated}
            />
            <YellowButton
              onChange={this.toggleRate}
              rated={rated}
            />
            <RedButton
              onChange={this.toggleRate}
              rated={rated}
              />
          </footer>
        </article>
      )
    }
  }

  const mapDispatchToProps = {
    toggleRateStudent
  }

  export default connect(null, mapDispatchToProps)(Student)
