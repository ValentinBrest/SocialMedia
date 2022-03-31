import React from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../../UI/Preloader/Preloader';
import cl from './../Profile.module.css'
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={cl.about}>
                    <img src={props.profile.photos.large} alt="ava" className="about__avatar" />
                    <div className={cl.about__descr}>
                        <h1>{props.profile.fullName}</h1>
                        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                        <hr />
                        <div className={cl.about__text}>
                            <div className={cl.about__item}>About me: <span className={cl.status}> {props.profile.aboutMe}</span></div>
                            <div className={cl.about__item}>Contacts: 
                                    <div className={cl.social}>
                                        <NavLink to={props.profile.contacts.facebook} className={cl.social_link}>facebook</NavLink>
                                        <NavLink to={props.profile.contacts.vk} className={cl.social_link}>vk</NavLink>
                                        <NavLink to={props.profile.contacts.instagram} className={cl.social_link}>instagram</NavLink>
                                    </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
        </div>
    );
};

export default ProfileInfo;