import * as axios from 'axios';
import React from 'react';
import Button from '../UI/Button/Button';
import UserItem from './UserItem/UserItem';
import cl from './Users.module.css';

class Users extends React.Component {
    
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
        }

    changePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
    }
            
    render () {
        let pageCount = Math.ceil((this.props.totalUsersCount > 100 ? this.props.totalUsersCount/200: this.props.totalUsersCount)/ this.props.pageSize)
        
        let pages = []
        for (let i = 1 ; i <= pageCount; i++){
            pages.push(i)
        }

        return (
                <div>
                    <h1 className={cl.title}>Our users</h1>
                    <div className={cl.pages}>
                        {pages.map(p => {
                            return <span className={`${cl.page} ${this.props.currentPage === p && cl.selected}`} onClick={() => {this.changePage(p)}}>{p}</span>
                        })}
                    </div>
                    <div className={cl.wrap}>
                        {this.props.oldUsers.map((item, index) => <UserItem 
                                                            key={item.id} 
                                                            users={this.props.oldUsers[index]} 
                                                            follow={this.props.follow}  
                                                            unfollow={this.props.unfollow} />
                                                        ) }
                        <Button>Show more</Button>
                    </div>
                </div>
                    
                );
        }
}

export default Users;