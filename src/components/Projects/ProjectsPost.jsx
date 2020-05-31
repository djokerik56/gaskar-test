import React from 'react'
import calendar from '../../assets/img/calendar.svg'
import man from '../../assets/img/man.svg'
import rub from '../../assets/img/rub.svg'
import { connect } from 'react-redux'

const ProjectsPost = (props) => {
    const projectsPostElement = props.project.map((p, index) => {
        return(
        <div className='project' key={index}>
            <div className='project-image' style={{ backgroundImage: `url(${p.image})` }}>
                <div className="project-image__button project-image__button-grey">{p.classification}</div>
                <div className="project-image__button project-image__button-color">{p.status}</div>
                <h4>{p.company}</h4>
            </div>
            <div className='project-inform'>
                <div className='project-inform__title'>
                    <h3>{p.title}</h3>
                </div>
                <div className='project-inform__text'>
                    <img className='project-inform__image' src={calendar} alt='calenadr' /> {p.date.start} - {p.date.end} гг.
                </div>
                <div className='project-inform__text'>
                    <img className='project-inform__image' src={man} alt='man' /> {p.lead}
                </div>
                <div className='project-inform__text'>
                    <img className='project-inform__image' src={rub} alt='rub' /> {p.administrator}
                </div>
            </div>
        </div>
    )})
    return (
        <>
            {projectsPostElement}
        </>
    )
}

const mapStateToProps = (state) => ({
    project: state.projectReducer.projects
})

export default connect(mapStateToProps)(ProjectsPost)
