import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from '../reducers/index'

export const history = createBrowserHistory()

function configureStore(preloadedState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(
      applyMiddleware(
        routerMiddleware(history),
      ),
    ),
  )

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/index', () => {
      store.replaceReducer(createRootReducer(history));
    });
  }

  return store
}

const store = configureStore();

export default store;