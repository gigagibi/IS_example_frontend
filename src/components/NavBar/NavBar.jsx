import React, { useContext } from 'react'
import { AuthContext } from '../../context'
import classes from './NavBar.module.css'
import { NavButton } from './NavButton'

export const NavBar = () => {
    const {auth} = useContext(AuthContext)
    return (
        auth
        ?
        <div className={classes.Nav}>
            <NavButton url='/home'>Дом</NavButton>
            <NavButton url='/departments'>Отделы</NavButton>
            <NavButton url='/find_employers'>Сотрудники</NavButton>
            <NavButton url='/tabel'>Табель</NavButton>
            <NavButton url='/tasks'>Задачи</NavButton>
        </div>
        :
        <div>not logged</div>
    )
}