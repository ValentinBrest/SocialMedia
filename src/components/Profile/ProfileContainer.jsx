import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useMatcher } from '../../hoc/useMatcher';
import { getProfile, getStatus, updateStatus } from '../../redux/profile_reducer';
import Profile from './Profile';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match? this.props.match.params.userId: 2 ;
        this.props.getProfile(userId)     
        this.props.getStatus(userId)     
    }
    render() {
        return (
            <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    useMatcher,
    // withAuthREdirect
)(ProfileContainer)
