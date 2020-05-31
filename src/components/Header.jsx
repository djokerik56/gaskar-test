import React from 'react'
import {logout} from '../redux/auth-reducer'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import menuButton from '../assets/img/menu.svg'
import closeButton from '../assets/img/close.svg'

const Header = (props) => {
    return (
        <header>
            <NavLink to={'/login'}>
                {props.isAuth
                    ? <button className='avatar' onClick={props.logout}></button>
                    : 'Login'}
            </NavLink>
                <button onClick={() => props.addClassMenu()} className='button-menu'>
                    <img src={ props.toogleClass ? closeButton : menuButton} alt="menu"/>
                </button>
        </header>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
});

export default connect(mapStateToProps, {
    logout
})(Header);