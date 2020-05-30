import { stopSubmit } from "redux-form"

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = [
    {
        login: null,
        password: null,
        remember: false,
        isAuth: false
    }
]

let registereUsers = {
    login: 'admin',
    password: 'admin'
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default: return state
    }
}

export const setAuthUserData = (login, password, remember = false, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: { login, password, remember, isAuth }
    }
}

export const login = (login, password, remember = false) => {
    return (dispatch) => {
        if (login === registereUsers.login && password === registereUsers.password) {
            dispatch(setAuthUserData(login, password, remember, true))
        } else {
            let message = 'Неверный логин или пароль'
            dispatch(stopSubmit('loginForm', { _error: message }))
        }
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(setAuthUserData(null, null, false, false))
    }
}

export default authReducer