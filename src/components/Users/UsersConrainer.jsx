import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/users_reducer';
import UsersC from './Users';



const mapStateToProps = (state) => {
    return {
        oldUsers: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}
const UsersConrainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)


export default UsersConrainer;