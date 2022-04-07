import React, { useState } from 'react';

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);     

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }
    return (
            <>
                {!editMode 
                    ?
                    <div>
                        <span onClick={activateEditMode}>{props.status || '----'}</span>
                    </div>
                    :
                    <div>
                        <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                    </div>
                }
                
            </>
    );
};

export default ProfileStatusWithHooks;