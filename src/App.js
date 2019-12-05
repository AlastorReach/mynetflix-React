import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

//Components
import Navbar from './components/common/Navbar/navbar';
import MyNetflixMiniGuide from './components/common/MiniGuide/my-netflix-mini-guide';
import MyNetflixMiniGuideEntry from './components/common/MiniGuide/my-netflix-mini-guide-entry';

import HomeIcon from './components/common/Svg-Icons/home-icon';
import BibliotecaIcon from './components/common/Svg-Icons/biblioteca-icon';
import Browse from './components/pages/browse';
import Home from './components/pages/home/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact ><Home/></Route>
          <Route path="/browse"><Browse/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
