import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { AuthContext } from '../../../context'
import { Dialog } from './Dialog/Dialog'
import { DialogIcon } from './Dialog/DialogIcon'
import './Messages.css'
import { Write } from './Modal/Write'

export const Messages = () => {
    const { token } = useContext(AuthContext)
    const [messagedUsers, setMessagedUsers] = useState([])
    const [isChosen, setIsChosen] = useState(false)
    const [chosenUser, setChosenUser] = useState({})
    const [visible, setVisible] = useState(false)

    function getMessagedUsers() {
        axios({
            url: 'http://localhost:88/api/user/messaged',
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => setMessagedUsers(response.data))
    }

    async function postMessage(message) {
        return await axios({
            method: 'post',
            url: 'http://localhost:88/api/message/new',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            data: message
        })
    }

    useEffect(() => {
        getMessagedUsers()
    }, [visible])

    return (
        <div>
            <Write visible={visible} setVisible={setVisible} postMessage={postMessage} />
            {messagedUsers.length == 0 ?
                <div style={{ display: 'block' }}>
                    <p>Нет сообщений</p>
                </div>
                :
                <div className="messages">
                    <div className="dialogIcons">
                        {messagedUsers.map(user => {
                            return <DialogIcon key={user.userId} user={user} setChosenUser={setChosenUser} setIsChosen={setIsChosen} />
                        })}
                    </div>
                    {isChosen ?
                        <Dialog postMessage={postMessage} user={chosenUser} />
                        :
                        <div />
                    }
                </div>}
                <hr/>
                <button type="button" onClick={() => setVisible(true)}>Написать сообщение</button>
        </div>

    )
}
