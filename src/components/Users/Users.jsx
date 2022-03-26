import * as axios from 'axios';
import React from 'react';
import Button from '../UI/Button/Button';
import UserItem from './UserItem/UserItem';
import cl from './Users.module.css';

class Users extends React.Component {
    
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsers(response.data.items))
    }
            
    render () {
        return (
                <div>
                    <h1 className={cl.title}>Our users</h1>
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