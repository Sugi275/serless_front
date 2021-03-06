import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import store, { history } from './store/configureStore'
import './index.css';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render()

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./containers/App', () => {
    render()
  })
}
