import * as axios from 'axios';
import React from 'react';
import Button from '../UI/Button/Button';
import UserItem from './UserItem/UserItem';
import cl from './Users.module.css';

const Users = (props) => {
    const getUsers = () => {
        if (props.oldUsers.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => props.setUsers(response.data.items))
        }
    }
    
    const loadUsers = () => {
        console.log('sdgsdg')
        }

    const oldUsers = props.oldUsers.map((item, index) => <UserItem 
                                                            key={item.id} 
                                                            users={props.oldUsers[index]} 
                                                            follow={props.follow}  
                                                            unfollow={props.unfollow} />
                                                        ) 
    return (
        <div>
            <Button onClick={getUsers}>Get Users</Button>
            <h1 className={cl.title}>Our users</h1>
            <div className={cl.wrap}>
                {oldUsers}
                <Button onClick={loadUsers}>Show more</Button>
            </div>
        </div>
        
    );
};

export default Users;