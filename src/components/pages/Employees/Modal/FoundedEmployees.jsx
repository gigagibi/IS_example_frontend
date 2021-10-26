import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../context'
import classes from './FoundedEmployees.module.css'
import { User } from './User'
import axios from 'axios'

export const FoundedEmployees = ({users, visible, setVisible}) => {
    const {token} = useContext(AuthContext)

    const cl = [classes.employeeModal]
    if(visible) {
        cl.push(classes.employeeModalActive)
    }
    return (
        <div className={cl.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.employeeModalContent} onClick={(e) => e.stopPropagation()}>
                {users.map(user => {
                    return <User key={user.userId} user={user} setVisible={setVisible}/>
                })}
            </div>
        </div>
    )
}
