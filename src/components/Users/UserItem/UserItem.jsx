import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import cl from './UserItem.module.css';


const UserItem = ({users, unfollow, follow, followingProgress}) => {
    const changeFollow = () => {
        if (users.followed) {
            unfollow( users.id)
        } else {
            follow(users.id)
        }
        
    }

    return (
        <div className={cl.user}>
            <div className={cl.box_left}>
                <NavLink to={'/profile/' + users.id}>
                    <img src={users.photos.small == null
                                ? 'https://prepsec.org/wp-content/uploads/2017/09/unknown-person-icon-Image-from.png'
                                : users.photos.small} alt="photo user" className={cl.img} />
                </NavLink>
                <Button disabled={followingProgress.some(id => id === users.id)} className={cl.buttonUser} onClick={changeFollow}>{users.followed ? 'Unfollow': 'Follow'}</Button>
            </div>
            <div className={cl.box_right}>
                <div className={cl.about}>
                    <div className={cl.name}>{users.name}</div>
                    <div className={cl.status}>{users.status == null? 'Здесь место для статуса': users.status}</div>
                </div>

            </div>
        </div>
    );
};

export default UserItem;