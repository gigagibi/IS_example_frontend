import React, { useContext, useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import { AuthContext } from '../../../../../context'
import axios from 'axios'

export const SelectPosition = ({newUser, setNewUser}) => {
    const[positions, setPositions] = useState([])
    const {token} = useContext(AuthContext)
    function getPositions() {
        axios.get('http://localhost:88/api/position/', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => setPositions(response.data))
    }

    useEffect(() => {
        getPositions()
    }, [])
    
    return (
        <select onChange={(e) => setNewUser({...newUser, position: {positionId: e.target.value}})}>
            {positions.map(position => {
                return <option key={position.positionId} value={position.positionId}>{position.positionId} : {position.name}</option>
            })}
        </select>
    )
}