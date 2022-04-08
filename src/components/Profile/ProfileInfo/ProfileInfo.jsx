import React from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../../UI/Preloader/Preloader';
import cl from './../Profile.module.css'
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={cl.about}>
                    <img src={profile.photos.large} alt="ava" className="about__avatar" />
                    <div className={cl.about__descr}>
                        <h1>{profile.fullName}</h1>
                        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                        <hr />
                        <div className={cl.about__text}>
                            <div className={cl.about__item}>About me: <span className={cl.status}> {profile.aboutMe}</span></div>
                            <div className={cl.about__item}>Contacts: 
                                    <div className={cl.social}>
                                        <NavLink to={profile.contacts.facebook} className={cl.social_link}>facebook</NavLink>
                                        <NavLink to={profile.contacts.vk} className={cl.social_link}>vk</NavLink>
                                        <NavLink to={profile.contacts.instagram} className={cl.social_link}>instagram</NavLink>
                                    </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
        </div>
    );
};

export default ProfileInfo;