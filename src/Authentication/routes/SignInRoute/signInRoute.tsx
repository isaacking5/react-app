import React from 'react'
import {observer, inject} from 'mobx-react'
import { observable } from "mobx";
import { Redirect, withRouter} from 'react-router-dom';
import {PRODUCT_PATH} from '../../constants/RouteConstants/index'
import {getAccessToken} from '../../utils/StorageUtils'
import LoginPage from '../../components/SignInForm/index'


type SignInRouteProps = {
    history : any
    authStore : any
}
@inject("authStore")
@observer
class SignInRoute extends React.Component<SignInRouteProps>{
    @observable username = ""
    @observable password = ""
    @observable errorMessage = ''
    @observable isClicked = false

    getAuthStore = () =>{
        return this.props.authStore
    }

    doNetworkCalls = () =>{
        this.getAuthStore().getAuthAPI(this.renderSucessUI)
    }
    onUsernameChange = (event) =>{
        this.username = event.target.value
        this.getAuthStore().updateUsername(this.username)
        this.errorMessage = ""
    }

    onPasswordChange = (event) =>{
        this.password = event.target.value
        this.getAuthStore().updatePassword(this.password)
        this.errorMessage = ""
    }

    gotoHomeScreenIfLoggrdIn = (event) =>{
        console.log("goto home screen")
        if(this.username === ""){
            event.preventDefault()
            this.errorMessage = "Please enter username"
        }
        else if(this.password ===""){
            event.preventDefault()
            this.errorMessage = "Please enter password"
        }
        else{
            event.preventDefault()
            this.isClicked = true
            this.doNetworkCalls()
        }
    }

    UserSignInForFirstTime = () =>{
        return (<Redirect 
                to = {{pathname : PRODUCT_PATH}}
            />)
    }


    renderSucessUI = () =>{
        console.log("render Sucess UI");
        const {history} = this.props
        history.replace({ pathname: PRODUCT_PATH});
        return null
    }

    render (){
        const {getAuthApiStatus} = this.getAuthStore()
        if(getAccessToken() !== undefined){
            return this.UserSignInForFirstTime()
        }
        return(
            <LoginPage
                gotoHomeScreenIfLoggrdIn = {this.gotoHomeScreenIfLoggrdIn}
                onUsernameChange = {this.onUsernameChange}
                onPasswordChange = {this.onPasswordChange}
                isClicked = {this.isClicked}
                getAuthApiStatus = {getAuthApiStatus}
                doNetworkCalls = {this.doNetworkCalls}
                renderSucessUI = {this.renderSucessUI}
                errorMessage = {this.errorMessage}
                username = {this.username}
                password = {this.password}
            />
        )
    }
}



export default withRouter(SignInRoute)


// export {default as LoginPage} from '../../components/SignInForm'
