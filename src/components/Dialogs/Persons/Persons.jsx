import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './Persons.module.css'

const Persons = (props) => {
    return (
        <NavLink className={cl.persons} to={'/dialogs/'+ props.id} >
            <img src={props.img} alt="photo" className={cl.img__person}/>
            <div className={cl.person__name}>{props.name}</div>
        </NavLink>
    );
};

export default Persons;