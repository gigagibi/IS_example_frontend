import axios from 'axios'
import React, { useEffect } from 'react'
import { useContext, useState } from 'react/cjs/react.development'
import { AuthContext } from '../../../context'
import { CreateTask } from './Modal/CreateTask'
import { Task } from './Task'

export const Tasks = () => {
    const [tasks, setTasks] = useState([])
    const { token, role } = useContext(AuthContext)
    const [visible, setVisible] = useState(false)

    function getTasks() {
        axios.get('http://localhost:88/api/task/', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => setTasks(response.data))
    }

    useEffect(() => {
        getTasks()
    }, [])

    return (
        <div>
            {role==='ROLE_ADMIN' ?
            <CreateTask visible={visible} setVisible={setVisible} getTasks={getTasks} />
            :
            <div/>
            }
            {tasks.length !== 0 ?
                <div>
                    {tasks.map(task => {
                        return <Task key={task.taskId} task={task} getTasks={getTasks}/>
                    })}
                </div>
                :
                <div>Нет задач</div>}
            {role === 'ROLE_ADMIN' ?
                <div>
                    <hr />
                    <button type="button" onClick={() => setVisible(true)}>Создать задачу</button>
                </div>
                :
                <div />
            }


        </div>
    )

}
