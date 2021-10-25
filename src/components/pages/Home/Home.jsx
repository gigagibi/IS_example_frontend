import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Home.css'
import { Link } from 'react-router-dom'

export const Home = () => {
    const [name, setName] = useState('')
    const login = localStorage.getItem('login')

    function getUserName() {
        axios.get('http://localhost:88/api/user/' + login + '/name').then(response => setName(response.data))
    }
    
    useEffect(() => {
        getUserName()
    }, [])
    
    return (
        <div>
            <h1>Добро пожаловать, {name}</h1>
            <div>
                <Link to='/tasks'>Перейти к задачам</Link>
                <Link to='/tabel'>Перейти к табелю</Link>
            </div>
        </div>
    )
}
