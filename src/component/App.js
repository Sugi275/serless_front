import React from 'react'
import { Route, Switch } from 'react-router'
import AppBar from './appbar'
import ComplexGrid from './complexgrid'
import ImageUpload from './imageupload'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <React.Fragment>
        <AppBar />
        <Switch>
          <Route exact path="/" component={ComplexGrid} />
          <Route exact path="/imageupload" component={ImageUpload} />
        </Switch>
      </React.Fragment>
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App