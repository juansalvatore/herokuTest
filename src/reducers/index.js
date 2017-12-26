import { combineReducers } from 'redux'
import UserReducer from './reducer_user'
import ProductsReducer from './reducer_products'
import RedeemReducer from './reducer_redeem'

const rootReducer = combineReducers({
  user: UserReducer,
  products: ProductsReducer,
  redeem: RedeemReducer,
})

export default rootReducer
