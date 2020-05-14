import React from 'react'
import { withRouter } from 'react-router';
class LoginPage extends React.Component{
    gotoHomeScreenIfLoggrdIn = () =>{
        const {history} = this.props
        history.replace({ pathname:'/Home'});
    }
    render(){
        return(
            <button onClick={this.gotoHomeScreenIfLoggrdIn}>Login</button>
        )
    }
}
export default withRouter(LoginPage)