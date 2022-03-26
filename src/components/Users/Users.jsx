import React from 'react';
import Button from '../UI/Button/Button';
import Preloader from '../UI/Preloader/Preloader';
import UserItem from './UserItem/UserItem';
import cl from './Users.module.css';

const Users = (props) => {
    
        let users = props.oldUsers.map((item, index) => <UserItem 
                                                            key={item.id} 
                                                            users={props.oldUsers[index]} 
                                                            follow={props.follow}  
                                                            unfollow={props.unfollow} />
                                                        ) 
        let pageCount = Math.ceil((props.totalUsersCount > 100 ? props.totalUsersCount/200: props.totalUsersCount)/ props.pageSize)
        
        let pages = []
        for (let i = 1 ; i <= pageCount; i++){
            pages.push(i)
        }
        
        return (
                <div>
                    <h1 className={cl.title}>Our users</h1>
                    <div className={cl.pages}>
                        {pages.map(p => {
                            return <span className={`${cl.page} ${props.currentPage === p && cl.selected}`} onClick={() => {props.changePage(p)}}>{p}</span>
                        })}
                    </div>
                    <div className={cl.wrap}>
                        {props.isFetching 
                            ? <Preloader />
                            : users
                            }
                        
                        <Button>Show more</Button>
                    </div>
                </div>
                    
                );
        }


export default Users;