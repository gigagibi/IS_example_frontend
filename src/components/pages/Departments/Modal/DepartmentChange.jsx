import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { AuthContext } from '../../../../context'
import { SelectOffices } from '../Dep/SelectOffices'
import classes from './DepartmentChange.module.css'

export const DepartmentChange = ({ visible, setVisible, department }) => {
    const { token } = useContext(AuthContext)
    const [name, setName] = useState()
    const [office, setOffice] = useState()
    // const [offices, setOffices] = useState([])
    
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

    useEffect(() => {
        console.log(office)
    }, [office])


    function deleteDepartment() {
        axios({
            method: 'delete',
            url: 'http://localhost:88/api/department/' + department.departmentId,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => console.log(response.data)).then(() => (setVisible(false)))
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
                <button type="button" onClick={() => changeDepartment()}>Изменить</button>
                <button type="button" onClick={() => deleteDepartment()}>Удалить</button>
            </form>
        </div>
    )
}
