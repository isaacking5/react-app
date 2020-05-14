import React from 'react'
import {Route} from 'react-router-dom'

import { PRODUCT_PATH } from "../constants/ProductRouteConstants";

import ProductsRoute from './ProductsRoute/index'

const routes = [
    <Route key={Math.random()} path={PRODUCT_PATH} component={ProductsRoute} />,
  ];
  
  export default routes;