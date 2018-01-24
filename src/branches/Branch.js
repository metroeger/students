import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import LikeButton from '../components/LikeButton'
import { toggleLikeRecipe } from '../actions/branches'
import './RecipeItem.css'

const PLACEHOLDER = 'http://via.placeholder.com/500x180?text=No%20Image'

export const branchShape = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    branchName: PropTypes.string.isRequired,
    startsAt: PropTypes.date,
    endsAt: PropTypes.bool,
    students: PropTypes.bool,
})

class Branch extends PureComponent {
  static propTypes = {
    ...branchShape.isRequired,
  }


  render() {
    const { _id, branchName, startsAt, endsAt} = this.props

    return(
      <article className="Branch">
        <header>
          <div
            <h1>
              <Link to={`/branches/${_id}`}>
                {branchName}
              </Link>
            </h1>
          </header>
          <div>
            <p>{ startsAt }</p>
            <p>{ endsAt }</p>
          </div>
        </article>
      )
    }
  }

const mapStateToProps = ({ students }) => ({ students })

export default connect (mapstateToPops)(Branch)
