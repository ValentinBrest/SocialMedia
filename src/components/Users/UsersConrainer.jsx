import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthREdirect } from '../../hoc/withAuthRedirect';
import { follow, setCurrentPage, setTotalUsersCount, unfollow, toggleFollowingProgress, getUsers } from '../../redux/users_reducer';
import Users from './Users';


class UsersСontainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        }
        
    changePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
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

export default compose(
    withAuthREdirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        setTotalUsersCount,
        toggleFollowingProgress,
        getUsers
    })
)(UsersСontainer)

