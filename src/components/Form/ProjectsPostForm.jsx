import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input, renderDateTimePicker } from '../common/FormControls'
import { required } from '../common/Validators'

let ProjectsPostForm = (props) => {
    return (
        <div className="container">
            <form className='form' onSubmit={props.handleSubmit}>
                <div className="form__group">
                    <Field
                        component={Input}
                        type='text'
                        name='company'
                        placeholder='Компания заказчик'
                        validate={[required]}
                    />
                </div>
                <div className="form__group">
                    <Field
                        component={Input}
                        type='text'
                        name='title'
                        placeholder='Название'
                        validate={[required]}
                    />
                </div>
                <div className="form__group">
                    <Field
                        component={Input}
                        type='text'
                        name='image'
                        placeholder='Image URL'
                    />
                </div>
                <div className="form__group">
                    <Field
                        component={renderDateTimePicker}
                        name='dateStart'
                    />
                    <Field
                        component={renderDateTimePicker}
                        name='dateEnd'
                    />
                </div>
                <div className="form__group">
                    <Field
                        component={Input}
                        type='text'
                        name='lead'
                        placeholder='Руководитель проекта'
                        validate={[required]}
                    />
                </div>
                <div className="form__group">
                    <Field
                        component={Input}
                        type='text'
                        name='administrator'
                        placeholder='Администратор проекта'
                        validate={[required]}
                    />
                </div>
                <button>push</button>
            </form>

        </div>
    )
}

export default ProjectsPostForm = reduxForm({ form: 'projectsPostForm' })(ProjectsPostForm)
