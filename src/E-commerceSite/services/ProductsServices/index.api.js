import { create } from "apisauce";
import { networkCallWithApisauce } from "../../utils/APIUtils";
import { apiMethods } from "../../../constants/APIConstants";
import { action } from "mobx";
import {END_POINTS} from '../../constants/ProductRouteConstants/index'

class ProductsServices{
    api;
    constructor (){
        this.api = create({
            // baseURL : "https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/"
            baseURL : "https://9ba0cd3ggi.execute-api.ap-south-1.amazonaws.com/ecommerce/"
        })
    }

    @action.bound
    getProductsAPI(){
        return networkCallWithApisauce(this.api,END_POINTS.products, {}, apiMethods.get)
    }

}

export default ProductsServices
