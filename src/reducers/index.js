import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import imageListReducer from './imagelistreducer'

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  imageList: imageListReducer
})

export default rootReducer
