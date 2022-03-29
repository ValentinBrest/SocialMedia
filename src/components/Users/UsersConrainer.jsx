import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow, toggleIsFetching, toggleFollowingProgress } from '../../redux/users_reducer';
import * as axios from 'axios';
import Users from './Users';
import { userAPI } from '../../api/api';


class UsersСontainer extends React.Component {
    
    componentDidMount() {
        this.props.toggleIsFetching(true)

        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount)
            });

        }
        
    changePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }
    
    render () {
        return (
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize} 
                   changePage={this.changePage}
                   oldUsers={this.props.oldUsers}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   currentPage={this.props.currentPage}
                   isFetching={this.props.isFetching}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingProgress={this.props.followingProgress}
            /> 
        )
                  
    }
}


const mapStateToProps = (state) => {
    return {
        oldUsers: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingInProgress
    }
    
}

const UsersConrainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress
})(UsersСontainer)

export default UsersConrainer;
