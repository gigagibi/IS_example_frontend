import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../../context'

export const Authorization = () => {
    const { auth, setAuth, token, setToken, role, setRole } = useContext(AuthContext)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    async function authorize() {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:88/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                login: login,
                password: password
            }
        })
        console.log(response)
        console.log(response.data)
        console.log(response.data.token)
        console.log(response.data.role)
        setToken(response.data.token)
        setRole(response.data.role)
        if (token.localeCompare('') !== 0 && token.localeCompare('User not found') !== 0) {
            setAuth(true)
            localStorage.setItem('auth', 'true')
            localStorage.setItem('token', token)
            localStorage.setItem('role', role)
        }
        else {
            console.log('fail')
        }
    }
    return (
        <div>
            <input type="text" placeholder="login" onChange={(e) => setLogin(e.target.value)}></input>
            <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
            <button type="button" onClick={() => authorize()}>Войти</button>
        </div>
    )
}
