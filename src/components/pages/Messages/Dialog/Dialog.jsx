import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react/cjs/react.development';
import { AuthContext } from '../../../../context';
import { Msg } from '../Msg/Msg';
import './Dialog.css'

export const Dialog = ({ user, postMessage }) => {
    const { token } = useContext(AuthContext);
    const [dialogMessages, setDialogMessages] = useState([])
    const [text, setText] = useState('')

    function getDialogMessages() {
        axios({
            method: 'get',
            url: 'http://localhost:88/api/message/my',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            params: {
                'userId' : user.userId
            }
        }).then(response => setDialogMessages(response.data))
    }

    useEffect(() => {
        getDialogMessages()
    }, [user])

    return (
        <div className="dialog">
            {dialogMessages.map(message => {
                return <Msg key={message.messageId} message={message} />
            })}
            <input type="text" onChange={(e) => setText(e.target.value)}/>
            <button type="button" onClick={() => postMessage({receiver: user, text: text}).then(() => getDialogMessages())}>Отправить</button>
        </div>
    )
}
