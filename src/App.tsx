import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
}
from "react-router-dom";
import { observer, Provider } from 'mobx-react';
import Home from './Home';
import LoginPage from './loginPage'
import SideDrawer from './components/SideDrawer/index'
import './App.css'
import { Todos } from './components/TodosList/todos';
import  TodosMObX  from './components/TodoWithMobX/TodoList';
import TodosMobXmodel from './components/TodoWithStoreModel/index'
import TodosWithNetWorkCall from './components/TodoWithNetWorkCall/index'
import { CarsList } from './components/CarsList';
import CountriesDashboardApp from './components/CountriesDashboardApp/index';
import CountryDetails from './components/CountriesDashboardApp/countryDetails';
import ReactComponents from './components/reactComponents/index';
import './components/TodosList/todos';
import GridMemoryGame from './components/GridMemoryGame/GridMemoryGame'
import EmojiesGame from './components/EmojiGameApp/index';
import CounterPage from './components/CounterPage/index';
import theme from './stores/ThemesStore/index';
import EventApp from './components/EventPage/EventApp'
import A from './components/Examples/ProviderExample1'
import UsersPage from "./components/UsersPage";
import stores from "./stores";

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
      <Provider {...stores}>
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
          <Route path="/EventApp">
            <EventApp />
          </Route>
          <Route path="/side-drawer"> 
            <SideDrawer />
          </Route>
          <Route path="/provider-example"> 
            <A />
          </Route>
          <Route path="/TodosMobX"> 
            <TodosMObX />
          </Route>
          <Route path="/TodosMobXModel"> 
            <TodosMobXmodel />
          </Route>
          <Route exact path="/Todos-with-network-call" component={TodosWithNetWorkCall} /> 
          <Route path="/grid-memory-game">
            <GridMemoryGame />
          </Route>
          <Route path="/EmojiesGame">
            <EmojiesGame />
          </Route>
          <Route exact path="/UserPage" component = {UsersPage}/>
          <Route exact path="/countriesDashboardApp">
            <CountriesDashboardApp  selectedTheme = {theme.selectedTheme} onThemeChange = {this.onChangeTheme}/>
          </Route>
          <Route exact path="/countriesDashboardApp/:specifiedCountry">
            <CountryDetails selectedTheme = {theme.selectedTheme} onThemeChange = {this.onChangeTheme}/>
          </Route>
          <Route path="/CarsList">
            <CarsList />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch> 
</Router >
</Provider>

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
