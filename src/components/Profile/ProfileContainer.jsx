import React from 'react';
import { connect } from 'react-redux';
import { Navigate, useMatch } from 'react-router-dom';
import { withAuthREdirect } from '../../hoc/withAuthRedirect';
import { getProfile } from '../../redux/profile_reducer';
import Profile from './Profile';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match? this.props.match.params.userId: 2 ;
        this.props.getProfile(userId)     
    }
    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}

let AuthRedirectComponent = withAuthREdirect(ProfileContainer)

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

const ProfileURLMatch = (props) => {
    const match = useMatch('/profile/:userId/');
    return <AuthRedirectComponent {...props} match={match} />;
  }

export default connect(mapStateToProps, {getProfile}) (ProfileURLMatch);
