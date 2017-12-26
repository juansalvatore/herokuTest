import { REDEEM_NOW } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case REDEEM_NOW:
      return [1, ...state]
  }
  return state
}
