import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import { Dep } from './Dep/Dep'
import { DepartmentChange } from './Modal/DepartmentChange'


export const Departments = () => {
    const { token, role } = useContext(AuthContext)
    const [departments, setDepartments] = useState([])
    const [visible, setVisible] = useState(false)
    const [department, setDepartment] = useState()
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
            <DepartmentChange department={department} visible={visible} setVisible={setVisible}/>
            {departments.map(dep => {
                return <Dep setDepartment={setDepartment} setVisible={setVisible} key={dep.departmentId} selected dep={dep}/>
            })}
        </div>
    )
}
