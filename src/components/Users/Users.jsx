import * as axios from 'axios';
import React from 'react';
import Button from '../UI/Button/Button';
import UserItem from './UserItem/UserItem';
import cl from './Users.module.css';

const Users = (props) => {
    if (props.oldUsers.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => props.setUsers(response.data.items))
        // props.setUsers([
        //     {
        //         id: 1,
        //         followed: true, 
        //         fullName: 'Viktor Valdes', 
        //         status: 'I am a footballer', 
        //         location: {
        //             city: 'Barcelona', 
        //             country: 'Spain'}, 
        //         img: 'https://i.pinimg.com/280x280_RS/d9/3d/1e/d93d1e5086667faa7dae8086b76cc314.jpg',
        //     },
        //     {
        //         id: 2,
        //         followed: false, 
        //         fullName: 'Stanislav Kurlovich', 
        //         status: 'Everything is okay', 
        //         location: {
        //             city: 'Warshaw', 
        //             country: 'Poland'}, 
        //         img: 'https://i.pinimg.com/280x280_RS/d9/3d/1e/d93d1e5086667faa7dae8086b76cc314.jpg',
        //     },
        //     {
        //         id: 3, 
        //         followed: true,
        //         fullName: 'Ekaterina Slukovskaya', 
        //         status: 'I am a teacher', 
        //         location: {
        //             city: 'Minck', 
        //             country: 'Belarus'}, 
        //         img: 'https://i.pinimg.com/280x280_RS/d9/3d/1e/d93d1e5086667faa7dae8086b76cc314.jpg',
        //     },
        // ])
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
            <h1 className={cl.title}>Our users</h1>
            <div className={cl.wrap}>
                {oldUsers}
                <Button onClick={loadUsers}>Show more</Button>
            </div>
        </div>
        
    );
};

export default Users;