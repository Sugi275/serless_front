import React from 'react'
import { Route, Switch } from 'react-router'
import AppBar from './appbar'
import ComplexGrid from './complexgrid'
import ImageUpload from './imageupload'
import Authorized1 from './Authorized1'
import PropTypes from 'prop-types'
import Login from './Login'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBar />
        <Switch>
          <Route exact path="/" component={ComplexGrid} />
          <Route exact path="/imageupload" component={ImageUpload} />} />
          <Route exact path="/authorized1" component={Authorized1} />} />
          <Route exact path="/login" component={Login} />} />
        </Switch>
      </React.Fragment>
    )
  }
}

App.propTypes = {
  history: PropTypes.object,
}

export default App