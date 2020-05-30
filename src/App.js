import React from 'react';
import './App.scss';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Login from './components/Login';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <main>
        <Route path='/projects' render={() => <Projects/>}/>
      </main>
      <Route path='/login' render={() => <Login />} />
    </div>
  );
}

export default compose(
  withRouter,
  connect(null,{

  }))(App);
