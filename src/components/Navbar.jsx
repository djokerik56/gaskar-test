import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <NavLink className='navbar__link' to='/task' activeClassName='navbar__link_active'>Задачи и работы</NavLink>
                </li>
                <li>
                    <NavLink className='navbar__link' to='/projects' activeClassName='navbar__link_active'>Проекты</NavLink>
                </li>
                <li>
                    <NavLink className='navbar__link' to='/calendar' activeClassName='navbar__link_active'>Календарь</NavLink>
                </li>
                <li>
                    <NavLink className='navbar__link' to='/scope' activeClassName='navbar__link_active'>Возможности</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
