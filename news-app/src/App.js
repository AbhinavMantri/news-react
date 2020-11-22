import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'antd/dist/antd.css';
import './App.css';
import Home from './pages/Home';
import News from './pages/News';
import NewsApp from './NewsApp';

function App() {
  return (
    <NewsApp>
      <Switch>
        <Route path={"/news/:title"} exact component={News} />
        <Route path={"/:provider?"} exact component={Home} />
      </Switch>
    </NewsApp>
  );
}

export default App;
