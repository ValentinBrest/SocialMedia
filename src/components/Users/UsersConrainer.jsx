import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthREdirect } from '../../hoc/withAuthRedirect';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getStateUsers, getTotalUsersCount } from '../../redux/users-selectors';
import { follow, setCurrentPage, setTotalUsersCount, unfollow, toggleFollowingProgress, getUsers } from '../../redux/users_reducer';
import Users from './Users';


class UsersContainer extends React.Component {
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
        oldUsers: getStateUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingInProgress(state)
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
)(UsersContainer)

