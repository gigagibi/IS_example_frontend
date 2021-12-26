import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Home.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development'
import { AuthContext } from '../../../context'

export const Home = () => {
    const [name, setName] = useState('')
    const { token } = useContext(AuthContext)

    function getUserName() {
        axios({
            method: 'get',
            url: 'http://localhost:88/api/user/token/name',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => setName(response.data))
    }

    useEffect(() => {
        getUserName()
    }, [])

    return (
        <div style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
            <div className="welcome">
                <h1 style={{ color: 'darkgreen' }}>Добро пожаловать, {name}</h1>
                <div style={{ justifyContent: 'space-around' }}>
                    <Link to='/tasks'>Перейти к задачам</Link>
                    <Link to='/tabel' style={{ marginLeft: '20px' }}>Перейти к табелю</Link>
                </div>
            </div>
        </div>

    )
}
