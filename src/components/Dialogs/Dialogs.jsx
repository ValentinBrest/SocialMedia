import React from 'react';
import AddMessageFormRedux from '../UI/Form/MessagesForm/MessagesForm';
import cl from './Dialogs.module.css';
import Messages from './Messages/Messages';
import Persons from './Persons/Persons';

const newMessageElement = React.createRef()

const Dialogs = (props) => {
    const yourMessages = props.personData.dialog.map(mes => <Messages text={mes.talk} me={mes.me}/>);
    const yourPersons =  props.personData.personData.map(item => <Persons name={item.name} id={item.id} img={item.img} key={item.id}/>)

    let addNewMessage = (value) => {
        props.addMessage(value.newMessageBody)
    }


    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogs__wrap}>
                <div className={cl.dialog__person}>
                   {yourPersons}
                </div>

                <div className={cl.dialog__message}>
                    <div className={cl.message__wrap}>
                        {yourMessages}
                    </div>
                    
                    <div className={cl.dialog__send}>
                         <AddMessageFormRedux className={cl.dialog__area} onSubmit={addNewMessage}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;