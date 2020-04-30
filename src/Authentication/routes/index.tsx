import React from 'react'
import {Route} from 'react-router-dom'

import { SIGN_IN_PATH } from "../constants/RouteConstants";

import LoginPage from './SignInRoute/index'

const routes = [
    <Route key={Math.random()} path={SIGN_IN_PATH} component={LoginPage} />,
  ];
  
  export default routes;