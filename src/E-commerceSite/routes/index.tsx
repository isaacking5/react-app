import React from 'react'
import {Route} from 'react-router-dom'

import { PRODUCT_PATH } from "../constants/ProductRouteConstants";

import Products from './ProductsRoute/index'

const routes = [
    <Route key={Math.random()} path={PRODUCT_PATH} component={Products} />,
  ];
  
  export default routes;