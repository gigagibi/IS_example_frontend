import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { AuthContext } from '../../../../context';
import './Msg.css'

export const Msg = ({ message }) => {
    const {token} = useContext(AuthContext)
    const [classname, setClassname] = useState('')
    function getMyName() {
        axios({
            method: 'get',
            url: 'http://localhost:88/api/user/token/name',
            headers: {
                'Authorization' : 'Bearer ' + token
            }
        }).then(response => setClassname(response.data==message.receiver.name ? "receivedMsg" : "sentMsg"))
    }

    useEffect(() => {
        getMyName()
    }, [])
    
    return (
        <div className={classname}>
            <p>{message.sender.name}</p>
            <p>{message.time}</p>
            <p><strong>{message.text}</strong></p>
        </div>
    )
}
