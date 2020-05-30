let initialState = {
    project: [
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
    switch(action.type) {
        default: return state
    }
}

export default projectReducer