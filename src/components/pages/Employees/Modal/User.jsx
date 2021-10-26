import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../../../context'
import { UserInfoForm } from './UserInfoForm'
import { UserInputForm } from './UserInputForm'

export const User = ({ user, setVisible }) => {
    const {role} = useContext(AuthContext)
    return (
        role === 'ROLE_ADMIN' && (user.dismissalDate == '' || user.dismissalDate == null) ?
            <UserInputForm user={user} setVisible={setVisible}/>
            :
            <UserInfoForm user={user}/>
    )
}
