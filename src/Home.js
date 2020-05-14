import React from 'react';
import {Link, Redirect} from 'react-router-dom'
export default class Home extends React.Component{
gotoGridScreenIfLoggrdIn = () =>{
  return (
    <Redirect
      to={{
        pathname:'/EmojiesGame'
      }}
      />
  );
}
render(){
  // if(true){
  //   return this.gotoGridScreenIfLoggrdIn()
  // }
return (<div>
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


    <li className="li-tag-router">
    <Link to="/EmojiesGame">EmojiesGame</Link>
    </li>
  </ul>
</nav>
</div> );
}
}




// import React from 'react';
// import {Link, Redirect} from 'react-router-dom'
// export default function Home(){
// return (<div>
// <nav className="home-navBar">
//   <ul className="ul-tag-router">
//   <li className="li-tag-router">
//       <Link to="/">Home</Link>
//     </li>
//    <li className="li-tag-router">
//       <Link to="/CarsList">CarsList</Link>
//     </li>
//     <li className="li-tag-router">
//       <Link to="/reactComponents">React Components</Link>
//     </li>
//     <li className="li-tag-router">
//       <Link to="/TodosList">TodosList</Link>
//     </li>
//     <li className="li-tag-router">
//       <Link to="/countriesDashboardApp">Countries Dashboard App</Link>
//     </li>


//     <li className="li-tag-router">
//     <Link to="/EmojiesGame">EmojiesGame</Link>
//     </li>
//   </ul>
// </nav>
// </div> );
// }