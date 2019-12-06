import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Browse from './components/pages/browse';
import Home from './components/pages/home/home';
import NotFound from './components/common/notFound/not-found';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact ><Home/></Route>
          <Route path="/browse"><Browse/></Route>
          <Route path="*"><NotFound /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
