import ApiClient from '../api/client'
import { loading, loadError } from './loading'

export const FETCHED_BRANCHES = 'FETCHED_BRANCHES'
export const FETCHED_ONE_BRANCH = 'FETCHED_ONE_BRANCH'

const api = new ApiClient()

export const fetchBranches = () => {
  return dispatch => {
    const path = '/branches'
    dispatch(loading(path, true))

    api.get(path)
      .then(res => {
        dispatch(loading(path, false))
        dispatch({ type: FETCHED_BRANCHES, payload: res.body })
      })
      .catch(err => {
        dispatch(loading(path, false))
        dispatch(loadError(err))
      })
  }
}

export const fetchBranchById = (id) => {
  return dispatch => {
    const path = `/branches/${id}`
    dispatch(loading(path, true))

    api.get(path)
      .then(res => dispatch({ type: FETCHED_ONE_BRANCH, payload: res.body }))
      .catch(err => dispatch(loadError(err)))

    dispatch(loading(path, false))
  }
}

export const toggleLikeBranch = (branchId) => {
  return {
    type: 'TOGGLE_LIKE_BRANCH',
    payload: branchId
  }
}
