import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import './CreateTask.css'
import { SelectUser } from './Select/SelectUser/SelectUser'
import { SelectProject } from './Select/SelectProject/SelectProject'
import { SelectTaskType } from './Select/SelectTaskType/SelectTaskType'
import { AuthContext } from '../../../../context'

export const CreateTask = ({ visible, setVisible, ...props }) => {
    const { token } = useContext(AuthContext)
    const [newTask, setNewTask] = useState({})
    const [user, setUser] = useState()
    const [project, setProject] = useState()
    const [taskType, setTaskType] = useState()

    const cl = ['createTaskModal']
    if (visible) {
        cl.push('createTaskActive')
    }

    function createTask() {
        axios({
            method: 'post',
            url: 'http://localhost:88/api/task/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            data: { ...newTask, user: user, project: project, taskType: taskType }
        }).then(() => setVisible(false))
    }

    useEffect(() => {props.getTasks()}, [visible])
    useEffect(() => {console.log(user)}, [user])
    useEffect(() => {console.log(project)}, [project])
    useEffect(() => {console.log(taskType)}, [taskType])

    return (
        <div className={cl.join(' ')} onClick={() => setVisible(false)}>
            <div className="createTaskContent" onClick={(e) => e.stopPropagation()}>
                <input type="text" placeholder="Имя задачи" defaultValue='' onChange={(e) => setNewTask({ ...newTask, name: e.target.value })} />
                <input type="text" placeholder="Описание задачи" defaultValue='' onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} />
                <input type="date" placeholder="Дата начала выполнения" defaultValue='' onChange={(e) => setNewTask({ ...newTask, startDate: e.target.value })} />
                <input type="date" placeholder="Дата завершения выполнения" defaultValue='' onChange={(e) => setNewTask({ ...newTask, finishDate: e.target.value })} />
                <SelectUser state={user} setState={setUser} />
                <SelectProject state={project} setState={setProject} />
                <SelectTaskType state={taskType} setState={setTaskType} />
                <button type="button" onClick={() => createTask()}>Создать</button>
            </div>
        </div>
    )
}
