import React from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { getProfile } from '../../redux/profile_reducer';
import Profile from './Profile';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match? this.props.match.params.userId: 2 ;
        this.props.getProfile(userId)
        // userAPI.getProfile(userId)
        //     .then(response => {
        //         this.props.setUserProfile(response.data)
        //     });
            
    }
    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

const ProfileURLMatch = (props) => {
    const match = useMatch('/profile/:userId/');
    return <ProfileContainer {...props} match={match} />;
  }

export default connect(mapStateToProps, {getProfile}) (ProfileURLMatch);
