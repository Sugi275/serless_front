import React from 'react'
import { Route, Switch } from 'react-router'
import AppBar from '../component/appbar'
import ComplexGrid from '../component/complexgrid'
import ImageUpload from '../component/imageupload'
// import Home from '../components/Home'
// import Hello from '../components/Hello'
// import Counter from '../components/Counter'
// import NoMatch from '../components/NoMatch'
// import NavBar from '../components/NavBar'

const routes = (
  <div>
    <AppBar />
    <Switch>
      <Route exact path="/" component={ComplexGrid} />
      <Route exact path="/imageupload" component={ImageUpload} />
    </Switch>
  </div>
)

export default routes
