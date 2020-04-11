import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
}
from "react-router-dom";
import { observable, configure } from 'mobx';
import { observer } from 'mobx-react';
import Home from './Home.js';
import './components/CarsList/CarsList.css';
import './components/TodosList/todos.css';
import './App.css';
import { Todos } from './components/TodosList/todos.js';
import TodosMobX from './components/TodoWithMobX/TodoList.js';
import { CarsList } from './components/CarsList';
import CountriesDashboardApp from './components/CountriesDashboardApp/index.js';
import CountryDetails from './components/CountriesDashboardApp/countryDetails.js';
import ReactComponents from './components/reactComponents/index.js';
import './components/TodosList/todos.js';
import EmojiesGame from './components/EmojiGameApp/index.js';
import CounterPage from './components/CounterPage/index.js';
import theme from './stores/ThemesStore/index.js';
import EventApp from './components/EventPage/EventApp.js'
import A from './components/Examples/ProviderExample1.js'



// configure({ enforceActions: true });

@observer
class App extends React.Component {
  // @observable selectedTheme = false

  // state = {
  //   selectedTheme: false,
  // }



  onChangeTheme = (mode) => {
    theme.setCurrentTheme(mode);
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
          <Route path="/ProviderExample1">
            <A />
          </Route>
          <Route path="/TodosMObX">
            <TodosMObX />
          </Route>
          <Route path="/TodosMobXmodel">
            <TodosMobXmodel />
          </Route>
          <Route path="/EventApp">
            <EventApp />
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
            <CountriesDashboardApp  selectedTheme = {theme.selectedTheme} onThemeChange = {this.onChangeTheme}/>
          </Route>
          <Route exact path="/countriesDashboardApp/:specifiedCountry">
            <CountryDetails selectedTheme = {theme.selectedTheme} onThemeChange = {this.onChangeTheme}/>
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