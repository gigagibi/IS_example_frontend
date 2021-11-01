import React from 'react'
import { useState } from 'react/cjs/react.development'
import { SelectUser } from '../../Tasks/Modal/Select/SelectUser/SelectUser'
import './Write.css'

export const Write = ({ visible, setVisible, postMessage }) => {
    const cl = ['writeModal']
    const [receiver, setReceiver] = useState({})
    const [message, setMessage] = useState({})
    if (visible) {
        cl.push('writeModalActive')
    }

    return (
        <div className={cl.join(' ')} onClick={() => setVisible(false)}>
            <div className="writeModalContent" onClick={(e) => e.stopPropagation()}>
                <p>Кому отправить: <SelectUser state={receiver} setState={setReceiver} /></p>
                <p>Сообщение: <input type="text" onChange={(e) => setMessage({ ...message, text: e.target.value })} /></p>
                <p><button type="button" onClick={() => postMessage({ ...message, receiver: receiver }).then(() => setVisible(false)) }>Отправить</button></p>
            </div>
        </div>
    )
}
