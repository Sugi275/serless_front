import React from 'react'
import { Route, Switch } from 'react-router'
import AppBar from './component/appbar'
import ComplexGrid from './component/complexgrid'
import ImageUpload from './component/imageupload'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <AppBar />
        <Switch>
          <Route exact path="/" component={ComplexGrid} />
          <Route exact path="/imageupload" component={ImageUpload} />
        </Switch>
      </div>
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App
