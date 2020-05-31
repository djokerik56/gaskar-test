import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormControls'
import { required } from '../common/Validators'

let ProjectsPostForm = (props) => {
    return (
        <div className="container">
            <form className='form projects-form' onSubmit={props.handleSubmit}>
                <div className="form__group form projects-form__input">
                    <Field
                        component={Input}
                        type='text'
                        name='company'
                        placeholder='Компания заказчик'
                        validate={[required]}
                    />
                </div>
                <div className="form__group projects-form__input">
                    <Field
                        component={Input}
                        type='text'
                        name='title'
                        placeholder='Название проекта'
                        validate={[required]}
                    />
                </div>
                <div className="form__group projects-form__input">
                    <Field
                        component={Input}
                        type='url'
                        name='image'
                        placeholder='Image URL'
                    />
                </div>
                <div className="form__group projects-form__date">
                    <Field
                        component={Input}
                        type='date'
                        name='dateStart'
                    />
                    <Field
                        component={Input}
                        type='date'
                        name='dateEnd'
                    />
                </div>
                <div className="form__group projects-form__input">
                    <Field
                        component={Input}
                        type='text'
                        name='lead'
                        placeholder='Руководитель проекта'
                        validate={[required]}
                    />
                </div>
                <div className="form__group projects-form__input">
                    <Field
                        component={Input}
                        type='text'
                        name='administrator'
                        placeholder='Администратор проекта'
                        validate={[required]}
                    />
                </div>
                <button className='button-color'>
                    Добавить проект
                </button>
            </form>

        </div>
    )
}

export default ProjectsPostForm = reduxForm({ form: 'projectsPostForm' })(ProjectsPostForm)
