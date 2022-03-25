import React from 'react';
import Button from '../UI/Button/Button';
import Textarea from '../UI/Textarea/Textarea';
import cl from './Dialogs.module.css'
import Messages from './Messages/Messages';
import Persons from './Persons/Persons';

const newMessageElement = React.createRef()

const Dialogs = (props) => {
    const yourMessages = props.personData.dialog.map(mes => <Messages text={mes.talk} me={mes.me}/>);
    const yourPersons =  props.personData.personData.map(item => <Persons name={item.name} id={item.id} img={item.img} key={item.id}/>)

    let addMessage = () => {
        props.addMessage()
    }

    let writeMessage = () => {
        let text = newMessageElement.current.value;
        props.updateNewMesssageCreator(text)
        
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
                        <div className={cl.dialog__send__wrap}>
                            <Textarea 
                                ref={newMessageElement}
                                onChange={writeMessage} 
                                className={cl.dialog__area} 
                                value={props.personData.newTextMessage}/>
                            <Button onClick={addMessage}>Send</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;