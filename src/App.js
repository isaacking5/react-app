import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
}
from "react-router-dom";
<<<<<<< HEAD
import Home from './Home.js'
=======
import { observable } from 'mobx';
import { observer } from 'mobx-react';
>>>>>>> 8cf6d76c3dd8eeb22304901987e4ced79bc8932e
import './components/CarsList/CarsList.css';
import './components/TodosList/todos.css';
import './App.css';
import { Todos } from './components/TodosList/todos.js';
import { CarsList } from './components/CarsList';
import CountriesDashboardApp from './components/CountriesDashboardApp/index.js';
import CountryDetails from './components/CountriesDashboardApp/countryDetails.js';
import ReactComponents from './components/reactComponents/index.js';
import './components/TodosList/todos.js';
<<<<<<< HEAD
import EmojiesGame from './components/EmojiGameApp/index.js';
=======
import CounterPage from './components/CounterPage/index.js';
import theme from './stores/ThemesStore/index.js';
>>>>>>> 8cf6d76c3dd8eeb22304901987e4ced79bc8932e

@observer
class App extends React.Component {
  @observable selectedTheme = false

  // state = {
  //   selectedTheme: false,
  // }


  onChangeTheme = (mode) => {
    // this.setState({ selectedTheme: mode });
    this.selectedTheme = mode;
    // theme.setCurrentTheme(mode);
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.*/}
<Switch>
          <Route path="/counter-page">
            <CounterPage />
          </Route>
          <Route path="/reactComponents">
            <ReactComponents />
          </Route>
          <Route path="/TodosList"> 
            <Todos />
          </Route>
          <Route path="/EmojiesGame">
            <EmojiesGame />
          </Route>
          <Route exact path="/countriesDashboardApp">
            <CountriesDashboardApp  selectedTheme = {this.selectedTheme} onThemeChange = {this.onChangeTheme}/>
          </Route>
          <Route exact path="/countriesDashboardApp/:specifiedCountry">
            <CountryDetails selectedTheme = {this.selectedTheme} onThemeChange = {this.onChangeTheme}/>
          </Route>
          <Route path="/CarsList">
            <CarsList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> 
</Router >
    );
  }
}


// function AppHome() {
//   return <h1>Home</h1>;
// }


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
