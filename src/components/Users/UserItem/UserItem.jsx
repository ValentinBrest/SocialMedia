import React from 'react';
import Button from '../../UI/Button/Button';
import cl from './UserItem.module.css'

const UserItem = (props) => {
    const changeFollow = () => {
        if (props.users.followed) {
            props.unfollow(props.users.id) 
        } else {
            props.follow(props.users.id)
        }
        
    }

    return (
        <div className={cl.user}>
            <div className={cl.box_left}>
                <img src={props.users.photos.small == null? 'https://prepsec.org/wp-content/uploads/2017/09/unknown-person-icon-Image-from.png': props.users.phtos.small} alt="photo user" className={cl.img} />
                <Button className={cl.buttonUser} onClick={changeFollow}>{props.users.followed ? 'Unfollow': 'Follow'}</Button>
            </div>
            <div className={cl.box_right}>
                <div className={cl.about}>
                    <div className={cl.name}>{props.users.name}</div>
                    <div className={cl.status}>{props.users.status == null? 'Здесь место для статуса': props.users.status}</div>
                </div>

                {/* <div className={cl.location}>
                    <div className={cl.country}>{props.users.location.country}</div>
                    <div className={cl.city}>{props.users.location.city}</div>
                </div> */}
            </div>
        </div>
    );
};

export default UserItem;