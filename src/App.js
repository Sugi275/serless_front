import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router'
import AppBar from './component/appbar'
import ComplexGrid from './component/complexgrid'
import ImageUpload from './component/imageupload'
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

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
