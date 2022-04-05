import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthREdirect } from '../../hoc/withAuthRedirect';
import { addMessageActionCreator } from '../../redux/dialog_reducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        personData: state.dialogPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody))
            
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthREdirect
)(Dialogs);