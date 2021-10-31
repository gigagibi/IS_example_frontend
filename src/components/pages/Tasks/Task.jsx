import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react/cjs/react.development'
import { AuthContext } from '../../../context'

export const Task = ({ task, ...props }) => {
    const { token } = useContext(AuthContext)
    const [isClosed, setIsClosed] = useState(false)
    function closeTask() {
        axios({
            method: 'patch',
            url: 'http://localhost:88/api/task/' + task.taskId + '/close',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(() => setIsClosed(true))
    }

    useEffect(() => {
        props.getTasks()
    }, [isClosed])

    return (
        <div style={{ border: '2px solid teal', margin: '30px' }}>
            <p>ID задачи: {task.taskId}</p>
            <p>Имя задачи: {task.name}</p>
            <p>Описание задачи: {task.description}</p>
            <p>Имя проекта: {task.project.name}</p>
            <p>Имя исполнителя: {task.user.name}</p>
            <p>Фамилия исполнителя: {task.user.surname}</p>
            <p>Отчество исполнителя: {task.user.patronym}</p>
            <p>Дата начала работы: {task.startDate}</p>
            {task.finishDate === '' || task.finishDate === null ?
                <button type="button" onClick={() => closeTask()}>Закрыть задачу</button>
                :
                <p>Дата выполнения задачи: {task.finishDate}</p>
            }
        </div>
    )
}
