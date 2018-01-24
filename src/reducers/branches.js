// src/reducers/branches.js

import { FETCHED_BRANCHES, FETCHED_ONE_BRANCH } from  '../actions/branches'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_BRANCHES :
      return payload.slice()

    case FETCHED_ONE_BRANCH :
      return [payload].concat(state)

      case 'TOGGLE_RATE_STUDENT' :
        return state.map((branch) => {
          if (student._id !== payload) return branch
          return { ...student, rated: !student.rated }
        })

    default :
      return state
  }
}
