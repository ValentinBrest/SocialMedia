import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthREdirect } from '../../hoc/withAuthRedirect';
import { addMessageActionCreator, updateNewMesssageCreator } from '../../redux/dialog_reducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        personData: state.dialogPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
            dispatch(updateNewMesssageCreator(''))
        },
        updateNewMesssageCreator: (text) => {
            dispatch(updateNewMesssageCreator(text))
            
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthREdirect
)(Dialogs);