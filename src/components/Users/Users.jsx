import React from 'react';
import Button from '../UI/Button/Button';
import Paginator from '../UI/Paginator/Paginator';
import Preloader from '../UI/Preloader/Preloader';
import UserItem from './UserItem/UserItem';
import cl from './Users.module.css';

const Users = (props) => {
        let users = props.oldUsers.map((item, index) => <UserItem 
                                                            key={item.id} 
                                                            users={props.oldUsers[index]} 
                                                            follow={props.follow}  
                                                            unfollow={props.unfollow}
                                                            followingProgress={props.followingProgress}
                                                            />
                                                        ) 
        return (
                <div>
                    <h1 className={cl.title}>Our users</h1>
                    <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                                currentPage={props.currentPage} changePage={props.changePage}
                    />
                    <div className={cl.wrap}>
                        {props.isFetching 
                            ? <Preloader />
                            : users
                            }
                    </div>
                    <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                                currentPage={props.currentPage} changePage={props.changePage}
                    />
                </div>
                    
                );
        }


export default Users;