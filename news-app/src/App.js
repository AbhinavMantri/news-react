import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Switch>
      <Route path={"/about"} exact component={About} />
      <Route path={"/"} exact component={Home} />
    </Switch>
  );
}

export default App;
