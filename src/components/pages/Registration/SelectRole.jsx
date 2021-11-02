import axios from 'axios'
import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { AuthContext } from '../../../context'

export const SelectRole = ({newUser, setNewUser}) => {
    const {token} = useContext(AuthContext)
    const [roles, setRoles] = useState([])
    function getRoles() {
        axios({
            method: 'get',
            url: 'http://localhost:88/api/user/role/all',
            headers: {
                'Authorization' : 'Bearer ' + token
            }
        }).then(response => setRoles(response.data))
    }

    useEffect(() => {
        getRoles()
    }, [])
    return (
        <select onChange={(e) => setNewUser({...newUser, role: {roleId: e.target.value}})}>
            {roles.map(role => {
                return <option key={role.roleId} value={role.roleId}>{role.name}</option>
            })}
        </select>
    )
}
