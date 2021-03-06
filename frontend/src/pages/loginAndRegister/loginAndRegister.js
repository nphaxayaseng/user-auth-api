import React from 'react'
import CreateAccount from '../../components/createAccount/createAccount'
import SignIn from '../../components/signIn/signIn'
import './loginAndRegister.css'


const LoginAndRegister = () => {
    return ( <div className="login-and-register__main-container">
        <SignIn/>
        <CreateAccount/>
    </div> );
}
 
export default LoginAndRegister;