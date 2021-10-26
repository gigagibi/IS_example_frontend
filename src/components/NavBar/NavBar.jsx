import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context'
import classes from './NavBar.module.css'
import { NavButton } from './NavButton'

export const NavBar = () => {
    const {login, setLogin, auth, setAuth, token, setToken, role, setRole } = useContext(AuthContext)

    function logout() {
        localStorage.removeItem('auth')
        localStorage.removeItem('role')
        localStorage.removeItem('token')
        localStorage.removeItem('login')
        setAuth(false)
        setToken('')
        setLogin('')
        setRole('')
    }

    return (
        auth
        ?
        <div className={classes.Nav}>
            <NavButton url='/home'>Дом</NavButton>
            <NavButton url='/departments'>Отделы</NavButton>
            <NavButton url='/find_employers'>Сотрудники</NavButton>
            <NavButton url='/tabel'>Табель</NavButton>
            <NavButton url='/tasks'>Задачи</NavButton>
            {role==='ROLE_ADMIN' ?
            <NavButton url='/register'>Зарегистрировать</NavButton>
            :
            <div/>
            }
            <Link to='/login' onClick={() => {logout()}}>Выйти</Link>
        </div>
        :
        <div>not logged</div>
    )
}