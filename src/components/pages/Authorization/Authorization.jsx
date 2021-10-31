import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { AuthContext } from '../../../context'

export const Authorization = () => {
    const { login, setLogin, setAuth, token, setToken, role, setRole } = useContext(AuthContext)
    const [password, setPassword] = useState('')

    function sendAuthorize() {
        axios({
            method: 'post',
            url: 'http://localhost:88/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                login: login,
                password: password
            }
        }).then(async response => {
            await setToken(response.data.token)
            await setRole(response.data.role)
        })
    }

    useEffect(() => {
        console.log(token)
        console.log(role)
        if (token.localeCompare('') !== 0 && token.localeCompare('User not found') !== 0 && role!=='' && role!==null) {
            setAuth(true)
            localStorage.setItem('auth', 'true')
            localStorage.setItem('token', token)
            localStorage.setItem('login', login)
            localStorage.setItem('role', role)
            console.log('ok')
        }
    }, [token, role])
    return (
        <div>
            <input type="text" placeholder="login" onChange={(e) => setLogin(e.target.value)}></input>
            <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
            <button type="button" onClick={() => sendAuthorize()}>Войти</button>
        </div>
    )
}
