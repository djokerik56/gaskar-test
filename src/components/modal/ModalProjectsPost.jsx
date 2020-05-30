import React from 'react'
import Popup from "reactjs-popup";
import ProjectsPostForm from '../Form/ProjectsPostForm'

const ModalProjectsPost = () => {
    let onAddProjectsPost = (values) => {
        console.log(values)
    }
    return (
        <Popup
            trigger={<button className="button"> Добавить проект </button>}
            modal
            closeOnDocumentClick
        >
            <ProjectsPostForm onSubmit={onAddProjectsPost} />
      </Popup>
    )
}

export default ModalProjectsPost
