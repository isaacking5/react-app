import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from "react-router-dom";
import './components/CarsList/CarsList.css';
import './components/TodosList/todos.css';
import './App.css';
import { Todos } from './components/TodosList/todos.js';
import { CarsList } from './components/CarsList';
import CountriesDashboardApp from './components/CountriesDashboardApp/index.js';
import CountryDetails from './components/CountriesDashboardApp/countryDetails.js';
import ReactComponents from './components/reactComponents/index.js';
import './components/TodosList/todos.js';


class App extends React.Component {
  state = {
    selectedTheme: false,
  }

  onChangeTheme = (mode) => {
    this.setState({ selectedTheme: mode });
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
      <div>
        <nav className="home-navBar">
          <ul className="ul-tag-router">
            <li className="li-tag-router">
              <Link to="/">Home</Link>
            </li>
           <li className="li-tag-router">
              <Link to="/CarsList">CarsList</Link>
            </li>
            <li className="li-tag-router">
              <Link to="/reactComponents">React Components</Link>
            </li>
            <li className="li-tag-router">
              <Link to="/TodosList">TodosList</Link>
            </li>
            <li className="li-tag-router">
              <Link to="/countriesDashboardApp">Countries Dashboard App</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.*/}
<Switch>
          <Route path="/reactComponents">
            <ReactComponents />
          </Route>
          <Route path="/TodosList"> 
            <Todos />
          </Route>
          <Route exact path="/countriesDashboardApp">
            <CountriesDashboardApp  selectedTheme = {this.state.selectedTheme} onThemeChange = {this.onChangeTheme}/>
          </Route>
          <Route exact path="/countriesDashboardApp/:specifiedCountry">
            <CountryDetails selectedTheme = {this.state.selectedTheme} onThemeChange = {this.onChangeTheme}/>
          </Route>
          <Route path="/CarsList">
            <CarsList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> 
        </div> 
</Router >
);
}
}


function Home() {
  return <h1>Home</h1>;
}


export default App;





//above code is copied from portfolio-website
//first-example

// import React from 'react';
// import { CarsList } from './components/CarsList';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <CarsList />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//           >
//           Learn React.
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;







//starting procedure
// import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import HomePage from "./components/HomePage";
// import Page1 from "./components/Page1";
// import "./App.css";

// const App = () => {
//   return (
//     <Router basename={process.env.PUBLIC_URL}>
//       <Switch>
//         <Route exact path="/page-1">
//           <Page1 />
//         </Route>
//         <Route path="/">
//           <HomePage />
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

// export default App;
