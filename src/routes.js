// src/routes.js
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import BranchContainer from './branches/BranchContainer'
import RecipePage from './branches/RecipePage'
import SignUp from './users/SignUp'
import SignIn from './users/SignIn'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={BranchContainer} />
        <Route path="/branches/:branchId" component={RecipePage} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
      </div>
    )
  }
}
