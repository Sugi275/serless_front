import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import imagesReducer from './imagesreducer'

const rootReducer = (history) => combineReducers({
  imageList: imagesReducer,
  router: connectRouter(history)
})

export default rootReducer
