import React, { useState } from 'react'
import ProjectsPost from './ProjectsPost'
import ModalProjectsPost from '../modal/ModalProjectsPost'

const Projects = (props) => {

    const [addClassValue, addClass] = useState(1)

    return (
        <div className='projects'>
            <div className="projects-header">
                <h1>Проекты</h1>
                <div className="projects-toogle">
                    <span
                        className={addClassValue === 1 ? 'projects-toogle_active' : null}
                        onClick={() => addClass(1)}>
                        Список проектов
                </span>
                    <span
                        className={addClassValue === 2 ? 'projects-toogle_active' : null}
                        onClick={() => addClass(2)}>
                        Дорожные карты
                </span>
                </div>
                <div className='projects-toogle__current'>
                    {addClassValue === 1
                        ? <h3>Список проектов</h3>
                        : <h3>Дорожные карты</h3>}
                    <ModalProjectsPost />
                </div>
            </div>
            <div className="projects-body">
                <ProjectsPost />
            </div>
        </div>
    )
}

export default Projects
