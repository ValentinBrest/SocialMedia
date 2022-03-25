import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={cl.nav}>
				<ul className={cl.nav__wrap}>
					<li className={cl.nav__item}>
						<NavLink  className={({ isActive }) => isActive ? cl.active : ""} to="profile">Profile</NavLink>
					</li>
					<li className={cl.nav__item}>
						<NavLink className={({ isActive }) => isActive ? cl.active : ""} to="dialogs">Messages</NavLink>
					</li>
					<li className={cl.nav__item}>
						<NavLink className={({ isActive }) => isActive ? cl.active : ""}  to="groupes">Groupes</NavLink>
					</li>
					<li className={cl.nav__item}>
						<NavLink className={({ isActive }) => isActive ? cl.active : ""}  to="music">Music</NavLink>
					</li>
					<br />
					<li className={cl.nav__item}>
						<NavLink className={({ isActive }) => isActive ? cl.active : ""}  to="settings">Settings</NavLink>
					</li>
				</ul>
        </nav>
    );
};

export default Navbar;