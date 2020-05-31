import React from 'react'
import Popup from "reactjs-popup"
import ProjectsPostForm from '../Form/ProjectsPostForm'
import { connect } from 'react-redux'
import { addProjectPost } from '../../redux/project-reducer'
import closeImage from '../../assets/img/close-color.svg'

const ModalProjectsPost = (props) => {

    let onAddProjectsPost = (values) => {
        props.addProjectPost(values)
    }

    return (
        <Popup
            trigger={<button className="button button-color"> Добавить проект </button>}
            modal
            closeOnDocumentClick
            contentStyle={{ minWidth: '290px' }}
        >
            {close => (
                <>
                    <button
                        className="button button-modal-close"
                        onClick={() => close()}
                    >
                        <img src={closeImage} alt="closeImage" />
                    </button>
                    <ProjectsPostForm onSubmit={onAddProjectsPost} />
                </>
            )}

        </Popup>
    )
}

export default connect(null, { addProjectPost })(ModalProjectsPost)
