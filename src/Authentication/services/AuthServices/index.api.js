import { create } from "apisauce";
import { networkCallWithApisauce } from "../../utils/APIUtils";
import { apiMethods } from "../../../constants/APIConstants";
import { action } from "mobx";
import {END_POINTS} from '../../constants/RouteConstants/index'

class AuthServices{
    api;
    constructor (){
        this.api = create({
            baseURL : "https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/"
        })
    }

    @action.bound
    getAuthAPI(){
        return networkCallWithApisauce(this.api,END_POINTS.signIn, {}, apiMethods.get)
    }

}

export default AuthServices
