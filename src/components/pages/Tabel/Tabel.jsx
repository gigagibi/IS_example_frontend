import axios from 'axios'
import React from 'react'
import { useContext, useState } from 'react/cjs/react.development'
import { AuthContext } from '../../../context'

export const Tabel = () => {
    const [entries, setEntries] = useState([])
    const [entry, setEntry] = useState()
    const {token} = useContext(AuthContext)
    
    function getEntries() {
        axios({
            method: 'get',
            url: 'http://localhost:88/api/time_entry/',
            headers: {
                'Authorization': 'Bearer ' + token

            }
        })
    }

    return (
        <div>

        </div>
    )
}
