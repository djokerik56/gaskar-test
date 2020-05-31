import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {login} from '../redux/auth-reducer'
import LoginForm from './Form/LoginForm'

const Login = (props) => {

    const onSubmit = (formData) =>{
        props.login(formData.login, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={'/'} />
    } 
    return (
        <LoginForm onSubmit={onSubmit}/>
    )
    
}

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth
})

export default connect(mapStateToProps, {
    login
}
)(Login)
