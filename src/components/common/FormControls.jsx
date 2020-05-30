import React from 'react'
import { DateTimePicker } from 'react-widgets'

const FormControl = Element => ({ input, meta, element, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <>
            <Element {...input} {...props} />
            {hasError && <span className='error'>{meta.error}</span>}
        </>
    )
}

export const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
    <DateTimePicker
        onChange={onChange}
        format="DD MMM YYYY"
        time={showTime}
        value={!value ? null : new Date(value)}
    />

export const Textarea = FormControl('textarea')

export const Input = FormControl('input')
