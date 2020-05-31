import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects/Projects'
import { compose } from 'redux'
import { withAuthRedirect } from '../hoc/withAuthRedirect'


const Content = () => {
    const [openClass, setOpenClass] = useState(false)

    const addClassMenu = () =>{
        setOpenClass(!openClass)
    }
    
    const removeClassMenu = () =>{
        setOpenClass(false)
    }

    return (
        <div className='App-wrapper'>
            <Header
                addClassMenu={addClassMenu}
                toogleClass={openClass}
            />
            <Navbar
                removeClassMenu={removeClassMenu}
                toogleClass={openClass}
            />
            <main>
                <div className="container">
                    <Route 
                        exact
                        path="/"
                        render={
                            () => <Redirect to="/projects" />
                        }
                    />
                    <Route
                        path='/projects'
                        render={
                            () => <Projects />
                        }
                    />
                </div>
            </main>
        </div>
    )
}

export default compose(withAuthRedirect)(Content)
