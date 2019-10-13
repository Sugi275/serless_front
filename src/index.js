import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store, { history } from './store/configureStore'
import './index.css';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render()

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./App', () => {
    render()
  })
}
