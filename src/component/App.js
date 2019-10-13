import React from 'react'
import { Route, Switch } from 'react-router'
import AppBar from './appbar'
import ComplexGrid from './complexgrid'
import ImageUpload from './imageupload'
import PropTypes from 'prop-types'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBar />
        <Switch>
          <Route exact path="/" component={ComplexGrid} />
          <Route exact path="/imageupload" component={ImageUpload} />
        </Switch>
      </React.Fragment>
    )
  }
}

// const App = () => {
//   return (
//     <React.Fragment>
//       <AppBar />
//       <Switch>
//         <Route exact path="/" component={ComplexGrid} />
//         <Route exact path="/imageupload" component={ImageUpload} />
//       </Switch>
//     </React.Fragment>
//   )
// }

App.propTypes = {
  history: PropTypes.object,
}

export default App