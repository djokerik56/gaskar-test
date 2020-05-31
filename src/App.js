import React from 'react'
import './App.scss'
import { Route, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Login from './components/Login'
import Content from './components/Content'

function App() {
  return (
    <div className="App">
      <Content />
      <Route path='/login' render={() => <Login />} />
    </div>
  );
}

export default compose(
  withRouter,
  connect(null, {
    
  }))(App)
