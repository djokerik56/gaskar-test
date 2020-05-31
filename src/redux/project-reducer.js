import {reset} from 'redux-form';

const ADD_PROJECTS_POST = 'ADD_PROJECTS_POST'

let initialState = {
    projects: [
        {
            company: 'Hadassah Medical',
            title: 'Терапевтический корпус',
            image: 'http://genpro.ru/sites/default/files/styles/portfolio-380-260/public/landing/dlya-3.jpg?itok=0npQnKgY',
            classification: 'Медецина',
            status: 'Строится',
            date: {
                start: '08.04.2019',
                end: '31.01.2021'
            },
            lead: 'Денис Конев',
            administrator: 'Просолим Лимитед'

        }
    ]
}

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROJECTS_POST:
            return {
                ...state,
                projects: [...state.projects, action.postBody]
            }
        default: return state
    }
}

export const addProjectPostCreator = (postBody) =>{
    return{
        type: ADD_PROJECTS_POST,
        postBody: postBody
    }
}

export const addProjectPost = (postBody) => {
    let newPost = {
        company: postBody.company,
        title: postBody.title,
        image: postBody.image,
        classification: 'Медецина',
        status: 'Строится',
        date: {
            start: postBody.dateStart.split('-').reverse().join("."),
            end: postBody.dateEnd.split('-').reverse().join(".")
        },
        lead: postBody.lead,
        administrator: postBody.administrator
    }
    return (dispatch) => {
        dispatch(addProjectPostCreator(newPost))
        dispatch(reset('projectsPostForm'))
    }
}

export default projectReducer