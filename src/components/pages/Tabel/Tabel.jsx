import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../../context'
import { EntryInfo } from './EntryInfo/EntryInfo'
import { EntryInput } from './EntryInput/EntryInput'
import { SelectTasks } from './EntryInput/SelectTasks'
import classes from './Tabel.module.css'

export const Tabel = () => {
    const [entries, setEntries] = useState([])
    const { token } = useContext(AuthContext)
    const [task, setTask] = useState({taskId: 0})

    function getEntriesByTask() {
        axios({
            method: 'get',
            url: 'http://localhost:88/api/time_entry/task/' + task.taskId,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => setEntries(response.data))
    }

    useEffect(() => {
        if(task!=null && task!=undefined && task.taskId !==0)
            getEntriesByTask()
    }, [task])
    
    return (
        <div>
            <SelectTasks task={task} setTask={setTask}/>
            <div className={classes.tabel}>
                <EntryInfo getEntries={getEntriesByTask} entries={entries} setEntries={setEntries}/>
            </div>
            <hr/>
            <EntryInput entries={entries} setEntries={setEntries} />
        </div>
    )
}
