import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import imagesReducer from './imagesreducer'
import imageUploadReducer from './imageUploadReducer'

const rootReducer = (history) => combineReducers({
  imageList: imagesReducer,
  imagePreview: imageUploadReducer,
  router: connectRouter(history)
})

export default rootReducer
