import React from 'react';
import Greetings from './greetings.js';
import DisableOrEnable from './disabledButton.js';
import YourState from './yourState.js';
import VisitedCities from './visitedCites.js';
import Desserts from './favDesserts.js';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
export default function ReactComponents() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/greetings">Greetings</Link>
            </li>
            <li>
              <Link to="/desserts">Favourite Dessert</Link>
            </li>
            <li>
              <Link to="/VisitedCities">Visited cities</Link>
            </li>
            <li>
              <Link to="/YourState">Your State</Link>
            </li>
            <li>
              <Link to="/disabled button">Disabled Button</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/greetings">
            <Greetings />    
          </Route>
          <Route path="/desserts">
            <Desserts />
          </Route>
          <Route path="/VisitedCities">
            <VisitedCities />
          </Route>
          <Route path="/YourState">
            <YourState />
          </Route>
          <Route path="/disabled button">
            <DisableOrEnable />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <h1>Component Home</h1>
  )
}
