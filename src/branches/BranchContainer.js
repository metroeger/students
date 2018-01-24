// src/branches/BranchContainer.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'
import RecipeItem, { branchShape } from './RecipeItem'
import { fetchRecipes } from '../actions/branches'
import './BranchContainer.css'

class BranchContainer extends PureComponent {
  static propTypes = {
    branches: PropTypes.arrayOf(branchShape).isRequired,
  }

  componentWillMount() {
    //this.props.dispatch(fetchRecipes())
    this.props.fetch() // see mapDispatchToProps below
  }

  renderBranch = (branch, index) => {
    return <Branch key={index} { ...branch } />
  }

  render() {
    return (
      <div className="branches wrapper">
        <header>
          <Title content="Branches" />
        </header>

        <main>
          {this.props.branches.map(this.renderBranch)}
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ branches }) => ({ branches })
const mapDispatchToProps = { fetch: fetchBranches }

// Same as:
// const mapStoreToProps = (store) => {
//   return { branches: store.branches }
// }

export default connect(mapStateToProps, mapDispatchToProps)(BranchContainer)
