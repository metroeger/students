import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchBranchById } from '../actions/branches'
import Title from '../components/Title'

export class BranchPage extends PureComponent {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape).isRequired,
  }

  componentWillMount() {
    this.props.fetchBranchById(this.props.match.params.branchId)
  }

  renderStudent = (student, index) => {
    return <Student key={index} { ...student } />
  }

  render() {
    const { _id, title } = this.props

    if (!_id) return null

    return (
      <div className="branches wrapper">
        <header>
          <Title content="Students" />
        </header>

        <main>
          {this.props.branches.map(this.renderStudent)}
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ branches }, { match }) => {
  const branch = branches.reduce((prev, next) => {
    if (next._id === match.params.branchId) {
      return next
    }
    return prev
  }, {})

  return {
    ...branch
  }
}

export default connect(mapStateToProps, { fetchBranchById })(BranchPage)
