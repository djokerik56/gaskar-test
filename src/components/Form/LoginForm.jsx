import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormControls'
import { required } from '../common/Validators'
import logo from '../../assets/img/logo.png'

let LoginForm = (props) => {
    return (
        <div className="container">
            <div className='login-block'>
                <img className='img-logo' src={logo} alt="logo" />
                <form className='form login-form' onSubmit={props.handleSubmit}>
                    <div className="form__group">
                        <label className='form__text'>Логин</label>
                        <Field
                            component={Input}
                            type='text'
                            name='login'
                            placeholder='Логин'
                            validate={[required]}
                        />
                    </div>
                    <div className="form__group">
                        <label className='form__text'>Пароль</label>
                        <Field
                            component={Input}
                            type='password'
                            name='password'
                            placeholder='Пароль'
                            validate={[required]}
                        />
                    </div>
                    <div className="form__checkbox-group">
                        <Field
                            component={Input}
                            type='checkbox'
                            name='remember'
                            id='remember'
                        />
                        <label className='checkbox-text login-form__text' htmlFor='remember'>
                            Запомнить меня
                        </label>
                    </div>
                    {props.error && <span className='error'>
                        {props.error}
                    </span>}
                    <button className='form__button button-color'>
                        Войти
                    </button>
                </form>
            </div>
        </div>
    )
}

LoginForm = reduxForm({ form: 'loginForm' })(LoginForm)

export default LoginForm
