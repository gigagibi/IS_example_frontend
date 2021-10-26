import React, { useContext } from 'react'
import { AuthContext } from '../../../../context'
import classes from './Dep.module.css'
export const Dep = ({ dep, setVisible, setDepartment }) => {
    const { role } = useContext(AuthContext)
    return (
        role === 'ROLE_ADMIN' ?
            <div className={classes.dep}>
                <div style={{ display: 'block', marginLeft: '6px' }}>
                    <p><strong>Название отдела:</strong> {dep.name}</p>
                    <p><strong>Адрес офиса:</strong> {dep.office.address}</p>
                </div>
                <button onClick={() => { setVisible(true); setDepartment(dep) }}>Изменить</button>
            </div>
            :
            <div className={classes.dep}>
                <p>{dep.name}</p>
                <p>{dep.office.address}</p>
            </div>
    )
}