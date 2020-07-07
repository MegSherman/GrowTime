import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import plantReducer from './plantReducer'
import authReducer from './authReducer'
import promiseMiddleware from 'redux-promise-middleware'

const rootReducer = combineReducers({
  auth: authReducer,
  plant: plantReducer,
})
export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(promiseMiddleware))
)
