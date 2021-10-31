import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { AuthContext } from '../../../../../context'
import { SelectTasks } from '../../EntryInput/SelectTasks'
import './Entry.css'

export const Entry = ({ entry, ...props }) => {
    const [newEntry, setNewEntry] = useState(entry)
    const [task, setTask] = useState(entry.task)
    const { token } = useContext(AuthContext)

    function changeEntry() {
        axios({
            url: 'http://localhost:88/api/time_entry/' + newEntry.timeEntryId,
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            data: { ...newEntry, task: task }
        }).then(async response => setNewEntry(response.data))
    }

    // useEffect(() => {
    //     console.log(newEntry)
    // }, [newEntry])

    // useEffect(() => {
    //     console.log(task)
    // }, [task])

    useEffect(() => {
        props.getEntries()
    }, [newEntry])

    return (
        <div className="entry">
            <p><strong>Дата: {newEntry.entryDate}</strong></p>
            <p><strong>Часы: </strong><input type="number" value={newEntry.hours} onChange={(e) => setNewEntry({ ...newEntry, hours: e.target.value })} /></p>
            <p><strong>Задача: </strong><SelectTasks value={task.taskId} task={task} setTask={setTask} /></p>
            <button type="button" onClick={() => changeEntry()}>Изменить</button>
        </div>
    )
}
