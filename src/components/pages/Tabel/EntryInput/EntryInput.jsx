import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useContext } from 'react/cjs/react.development'
import { AuthContext } from '../../../../context'
import { SelectTasks } from './SelectTasks'

export const EntryInput = ({ entries, setEntries }) => {
    const [entry, setEntry] = useState({})
    const [task, setTask] = useState({})
    const { token } = useContext(AuthContext)

    function createEntry() {
        axios({
            url: 'http://localhost:88/api/time_entry/',
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            data: {...entry, task: task}
        }).then(response => setEntries(response.data));
    }

    return (
        <div style={{ display: 'block', border: '2px solid teal', borderRadius: '4px', width: '300px' }}>
            <p><strong>Дата: </strong><input type="datetime-local" onChange={(e) => setEntry({ ...entry, entryDate: e.target.value + ':00+03:00' })} /></p>
            <p><strong>Часы: </strong><input type="number" onChange={(e) => setEntry({ ...entry, hours: e.target.value })} /></p>
            <p><strong>Задача: </strong><SelectTasks task={task} setTask={setTask} /></p>
            <button type="button" onClick={() => createEntry()}>Создать</button>
        </div>
    )
}
