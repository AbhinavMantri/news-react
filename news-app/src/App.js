import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'antd/dist/antd.css';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import NewsApp from './NewsApp';

function App() {
  return (
    <NewsApp>
      <Switch>
        <Route path={"/about"} exact component={About} />
        <Route path={"/"} exact component={Home} />
      </Switch>
    </NewsApp>
  );
}

export default App;
