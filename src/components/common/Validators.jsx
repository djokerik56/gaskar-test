export const required = value => {
    if(value){
        return undefined
    }
    return 'Поле, обязательное для заполнения'
}

export const maxLengthCreator = (maxLength) => {
    return (value) => {
        if(value && value.length > maxLength){
            return `Макимальная длинна ${maxLength} символов`
        }
        return undefined
    }
}