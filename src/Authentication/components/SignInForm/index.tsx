import React from 'react'
import { withRouter, Redirect } from 'react-router-dom';
import {observer, inject} from 'mobx-react'
import { observable } from "mobx";
import {getAccessToken} from '../../utils/StorageUtils'

import {LoginButton, LoginForm, LoginPAGE, SignInHeading, 
    PasswordField, UsernameField, ErrorMesage
    } from '../../styledComponents/index'
import ButtonWithLoader from "../../ButtonWithLoader/index";

type LoginPageProps = {
    history : any
    authStore : any
}
@inject("authStore", "productsStore")
@observer
class LoginPage extends React.Component <LoginPageProps>{
    @observable username = ""
    @observable password = ""
    @observable errorMessage = ''
    @observable isClicked = false

    getAuthStore = () =>{
        return this.props.authStore
    }

    doNetworkCalls = () =>{
        this.getAuthStore().getAuthAPI()
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
                to = {{pathname : "/products"}}
            />)
    }


    renderSucessUI = () =>{
        const {history} = this.props
        history.replace({ pathname:'/products'});
        return null
    }
    render(){
        const {getAuthApiStatus} = this.getAuthStore()
        if(getAccessToken() !== undefined){
            return this.UserSignInForFirstTime()
        }
        return(
            <LoginPAGE>
                <LoginForm onSubmit = {this.gotoHomeScreenIfLoggrdIn}>
                    <SignInHeading>Sign In</SignInHeading>
                    <UsernameField type = "text" placeholder = "Username" onChange={this.onUsernameChange}/>
                    <PasswordField type = "password" placeholder = "Password" onChange={this.onPasswordChange}/>
                    <LoginButton>
                         {this.isClicked?
                         <ButtonWithLoader
                            apiStatus = {getAuthApiStatus}
                            onRetryClick = {this.doNetworkCalls}
                            renderSuccessUI = {this.renderSucessUI}
                        /> : "Sign In"}
                    </LoginButton>
                    <ErrorMesage>{this.errorMessage}</ErrorMesage>
                </LoginForm>
            </LoginPAGE>

        )
    }
}
export default withRouter(LoginPage)