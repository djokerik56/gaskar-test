import React from 'react'
import {logout} from '../redux/auth-reducer'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <NavLink to={'/login'}>
                {props.isAuth
                    ? <button className='avatar' onClick={props.logout}></button>
                    : 'Login'}
            </NavLink>
        </header>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {
    logout
})(Header);