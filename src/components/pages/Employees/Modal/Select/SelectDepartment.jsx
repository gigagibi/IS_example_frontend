import React, { useContext, useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import { AuthContext } from '../../../../../context'
import axios from 'axios'

export const SelectDepartment = ({newUser, setNewUser}) => {
    const[departments, setDepartments] = useState([])
    const {token} = useContext(AuthContext)
    function getDepartments() {
        axios.get('http://localhost:88/api/department/', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => setDepartments(response.data))
    }
    useEffect(() => {
        getDepartments()
    }, [])
    return (
        <select onChange={(e) => setNewUser({...newUser, department: {departmentId: e.target.value}})}>
            {departments.map(department => {
                return <option key={department.departmentId} value={department.departmentId}>{department.departmentId} : {department.name}</option>
            })}
        </select>
    )
}
