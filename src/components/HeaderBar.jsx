import React, { useContext } from 'react'
import { AuthContext } from '../context'

export const HeaderBar = () => {
    const {auth} = useContext(AuthContext)
    return (
        auth
        ?
        <div>logged</div>
        :
        <div>not logged</div>
    )
}