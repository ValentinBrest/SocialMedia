import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './Navbar.module.css'

const navBarLink = [
	{link: 'profile', linkName: 'Profile', id: 1},
	{link: 'dialogs', linkName: 'Messages', id: 2},
	{link: 'groupes', linkName: 'Groupes', id: 3},
	{link: 'music', linkName: 'Music', id: 4},
	{link: 'users', linkName: 'Find User', id: 5, addMargin: true},
	{link: 'settings', linkName: 'Settings', id: 6, addMargin: true},
]

const Navbar = () => {
    return (
        <nav className={cl.nav}>
				<ul className={cl.nav__wrap}>
				{
					navBarLink.map(link => 
						<li className={(link.addMargin ? `${cl.nav__item} ${cl.addMargin}`:cl.nav__item)} key={link.id}>
							<NavLink  className={({ isActive }) => isActive ? cl.active : ""} to={link.link}>{link.linkName}</NavLink>
						</li>
					)
				}
				</ul>
        </nav>
    );
};

export default Navbar;