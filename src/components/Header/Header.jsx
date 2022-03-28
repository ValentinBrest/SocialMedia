import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './Header.module.css';

const Header = (props) => {
  
    return (
        <header className={cl.header}>
            <div className={cl.header__wrap}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/V_%28logo_2010%29.svg/567px-V_%28logo_2010%29.svg.png" alt="logo" />
                <span>blog</span>
            </div>
            <div className={cl.login_block}>
                {props.isAuth? props.login: <NavLink to={'/login'} >Login</NavLink>}
                
            </div>
        </header>
    );
};

export default Header;