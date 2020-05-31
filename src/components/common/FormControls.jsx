import React from 'react'

const FormControl = Element => ({ input, meta, element, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <>
            <Element {...input} {...props} />
            {hasError && <span className='error'>{meta.error}</span>}
        </>
    )
}

export const Textarea = FormControl('textarea')

export const Input = FormControl('input')
