import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMesssageCreator } from '../../redux/dialog_reducer';
import Dialogs from './Dialogs';

// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             { 
//                 store => {
//                     let state = store.getState().dialogPage

//                     let addMessage = () => {
//                         store.dispatch(addMessageActionCreator())
//                         store.dispatch(updateNewMesssageCreator(''))
//                     }

//                     let writeMessage = (text) => {
//                         store.dispatch(updateNewMesssageCreator(text))
//                     }

//                 return  <Dialogs 
//                         addMessage={addMessage} 
//                         updateNewMesssageCreator={writeMessage}
//                         personData={state}
//                     />
//                 }    
//             }
//         </StoreContext.Consumer>
        
//     );
// };

const mapStateToProps = (state) => {
    return {
        personData: state.dialogPage
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

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)


export default DialogsContainer;