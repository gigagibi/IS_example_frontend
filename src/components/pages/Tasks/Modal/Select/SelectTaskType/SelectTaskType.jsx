import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../../../context'

export const SelectTaskType = ({ state, setState, ...props }) => {
    const { token } = useContext(AuthContext)
    const [types, setTypes] = useState([])

    function getTypes() {
        axios({
            method: 'get',
            url: 'http://localhost:88/api/task_type/',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => setTypes(response.data))
    }
    useEffect(() => {
        getTypes();
        if(types.length!=0) {
            setState(types[0])
        }
    }, [])

    useEffect(() => {
        setState(types[0])
    }, [types])

    return (
        <select onChange={(e) => setState([...types].find(type => type.taskTypeId == e.target.value))}>
            {types.map(type => {
                return <option key={type.taskTypeId} value={type.taskTypeId}>{type.taskType}</option>
            })}
        </select>
    )
}
