import React, { useContext } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { AuthContext } from '../../../../context'

export const DialogIcon = ({ user, setChosenUser, setIsChosen }) => {

    return (
        <div onClick={() => {setChosenUser(user); setIsChosen(true)}}>
            <p>{user.name} {user.surname} {user.patronym}</p>
        </div>
    )
}
