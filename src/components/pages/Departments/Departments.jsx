import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../../context'


export const Departments = () => {
    const { token, role } = useContext(AuthContext)
    const [departments, setDepartments] = useState([])

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
        <div>
            {departments.map(dep => {
                return <div>{dep.name} {dep.office.address}</div>
            })}
        </div>
    )
}
