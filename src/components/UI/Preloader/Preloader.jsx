import React from 'react';
import preloader from './../../../assets/progress.gif'
import cl from './Preloader.module.css'

const Preloader = (props) => {
    return (
        <div>
            <img src={preloader} className={`${props.className} ${cl.loader}`} alt='fffff'/>
        </div>
    );
};

export default Preloader;