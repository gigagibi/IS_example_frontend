import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../../context'
import { SelectOffices } from '../Dep/SelectOffices'
import classes from './DepartmentChange.module.css'

export const DepartmentChange = ({ departments, setDepartments, children, visible, setVisible, department }) => {
    const { token } = useContext(AuthContext)
    const [name, setName] = useState('')
    // const [offices, setOffices] = useState([])
    const [office, setOffice] = useState()

    function changeDepartment() {
        axios({
            method: 'put',
            url: 'http://localhost:88/api/department/' + department.departmentId,
            headers: {
                'Authorization': 'Bearer ' + token
            },
            data: {
                name,
                office
            }
        }).then(response => console.log(response)).then(() => setVisible(false))
    }

    function deleteDepartment() {
        axios({
            method: 'delete',
            url: 'http://localhost:88/api/department/' + department.departmentId,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => console.log(response.data))
    }

    const cl = [classes.departmentModal]
    if (visible) {
        cl.push(classes.departmentModalActive)
    }
    return (
        <div className={cl.join(' ')} onClick={() => setVisible(false)}>
            <form className={classes.departmentModalContent} onClick={(e) => e.stopPropagation()}>
                <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)}></input>
                <SelectOffices office={office} setOffice={setOffice}></SelectOffices>
                <button type="submit" onClick={() => changeDepartment()}>Изменить</button>
                <button type="submit" onClick={() => deleteDepartment()}>Удалить</button>
            </form>
        </div>
    )
}
