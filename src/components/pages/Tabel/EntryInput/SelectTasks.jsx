import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useContext } from 'react/cjs/react.development'
import { AuthContext } from '../../../../context'

export const SelectTasks = ({ task, setTask, ...props }) => {
    const [tasks, setTasks] = useState([])
    const { token } = useContext(AuthContext)

    function getTasks() {
        axios({
            url: 'http://localhost:88/api/task/',
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => setTasks(response.data))
    }

    useEffect(() => {
        getTasks()
    }, [])

    useEffect(() => {
        console.log(task)
    }, [task])

    useEffect(() => {
        if(tasks.length!=0)
            setTask(tasks[0])
    }, [tasks])

    return (
        <select onChange={(e) => setTask([...tasks].find(t => t.taskId==e.target.value))}>
            {tasks.map(task => {
                return <option key={task.taskId} value={task.taskId}>{task.name}</option>
            })}
        </select >
    )
}
