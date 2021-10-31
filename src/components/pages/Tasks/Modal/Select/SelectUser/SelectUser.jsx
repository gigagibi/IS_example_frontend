import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../../../context'

export const SelectUser = ({ state, setState, ...props }) => {
    const { token } = useContext(AuthContext)
    const [users, setUsers] = useState([])

    function getUsers() {
        axios({
            method: 'get',
            url: 'http://localhost:88/api/user/all',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => setUsers(response.data))
    }

    useEffect(() => {
        getUsers();
    }, [])

    useEffect(() => {
        setState(users[0])
    }, [users])

    return (
        <select onChange={(e) => setState([...users].find(user => user.userId == e.target.value))}>
            {users.map(user => {
                return <option key={user.userId} value={user.userId}>{user.name} {user.surname} {user.patronym}</option>
            })}
        </select>
    )
}
