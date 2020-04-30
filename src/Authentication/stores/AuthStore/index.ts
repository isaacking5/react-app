import { observable, action, toJS } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { API_INITIAL } from "@ib/api-constants";

import {setAccessToken, clearUserSession} from '../../utils/StorageUtils'

class AuthStore {
    @observable username
    @observable password
    @observable getAuthApiStatus
    @observable getAuthApiError
    authServices
    constructor (authService){
        this.authServices = authService
        this.init()
    } 

    @action.bound
    init(){
        this.username = ""
        this.password = ""
        this.getAuthApiStatus = API_INITIAL
        this.getAuthApiError = null
    }

    @action.bound
    clearStore(){
        this.init()
    }


    @action.bound
    setAuthAPIResponse(Response){
        setAccessToken(Response[0].access_token)
    }

    @action.bound
    userSignOut(){
        clearUserSession()
    }
    @action.bound
    setAuthAPIStatus(apiStatus){
        this.getAuthApiStatus = apiStatus
    }

    @action.bound
    setAuthAPIError(apiError){
        this.getAuthApiError = apiError
    }
    @action.bound
    getAuthAPI(){
        const authServices = this.authServices.getAuthAPI()
        return bindPromiseWithOnSuccess(authServices)
        .to(this.setAuthAPIStatus, this.setAuthAPIResponse)
        .catch(this.setAuthAPIError)
    }

    @action.bound
    updateUsername(enteredUsername){
        this.username = enteredUsername
    }

    @action.bound
    updatePassword(enteredPassword){
        this.password = enteredPassword
    }
}

// const authStore = new AuthStore

export default AuthStore
