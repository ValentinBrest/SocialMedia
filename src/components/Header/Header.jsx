import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.header__wrap}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/V_%28logo_2010%29.svg/567px-V_%28logo_2010%29.svg.png" alt="logo" />
                <span>blog</span>
            </div>
        </header>
    );
};

export default Header;