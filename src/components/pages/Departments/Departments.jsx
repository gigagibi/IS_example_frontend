import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import { Dep } from './Dep/Dep'
import { DepartmentChange } from './Modal/DepartmentChange'
import formCL from './createForm.module.css'
import { SelectOffices } from './Dep/SelectOffices'

export const Departments = () => {
    const { token, role } = useContext(AuthContext)
    const [departments, setDepartments] = useState([])
    const [visible, setVisible] = useState(false)
    const [department, setDepartment] = useState()
    const [newDepartment, setNewDepartment] = useState()
    const [newOffice, setNewOffice] = useState({officeId: 1})
    
    function getDepartments() {
        axios.get('http://localhost:88/api/department/', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => setDepartments(response.data))
    }

    function addDepartment() {
        axios({
            method: 'post',
            url: 'http://localhost:88/api/department/',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': 'Bearer ' + token
            },
            data: {...newDepartment, office: newOffice}
        }).then(response => setDepartments(response.data))
    }

    useEffect(() => {
        getDepartments()
    }, [visible])

    useEffect(() => {
        getDepartments()
    }, [])

    useEffect(() => {
        console.log(department)
    }, [department])

    return (
        <div>
            {department!=undefined ? <DepartmentChange department={department} visible={visible} setVisible={setVisible}/> : <div/>}
            {departments.map(dep => {
                return <Dep setDepartment={setDepartment} setVisible={setVisible} key={dep.departmentId} dep={dep}/>
            })}
            {role==='ROLE_ADMIN' ?
            <form className={formCL.createForm}>
                <p>Название отдела: <input type="text" onChange={(e) => setNewDepartment({...newDepartment, name: e.target.value})}/></p>
                <p><SelectOffices office={newOffice} setOffice={setNewOffice}/></p>
                <button type="button" onClick={() => addDepartment()}>Создать отдел</button>
            </form>
            :
            <div/>
            }
            
        </div>
    )
}
