import axios from 'axios'
import React from 'react'
import { useState, useEffect, useContext } from 'react/cjs/react.development'
import { AuthContext } from '../../../context'
import { SelectDepartment } from '../Employees/Modal/Select/SelectDepartment'
import { SelectPosition } from '../Employees/Modal/Select/SelectPosition'

export const Registration = () => {
    const [newUser, setNewUser] = useState()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    const {token} = useContext(AuthContext)
    function addUser() {
        axios({
            method: 'post',
            url: 'http://localhost:88/register',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + token
            },
            data: {
                ...newUser, hireDate: date
            }
        })
    }

    useEffect(() => {
        console.log(newUser)
    }, [newUser])

    return (
        <div>
            <h1>Введите данные сотрудника, которого необходимо зарегистрировать</h1>
            <p style={{ marginLeft: '5px' }}>Логин: <input type="text" onChange={(e) => { setNewUser({ ...newUser, login: e.target.value }) }} /></p>
            <p style={{ marginLeft: '5px' }}>Пароль: <input type="text" onChange={(e) => { setNewUser({ ...newUser, password: e.target.value }) }} /></p>
            <p style={{ marginLeft: '5px' }}>Имя: <input type="text" onChange={(e) => { setNewUser({ ...newUser, name: e.target.value }) }} /></p>
            <p style={{ marginLeft: '5px' }}>Фамилия: <input type="text" onChange={(e) => { setNewUser({ ...newUser, surname: e.target.value }) }} /></p>
            <p style={{ marginLeft: '5px' }}>Отчество: <input type="text" onChange={(e) => { setNewUser({ ...newUser, patronym: e.target.value }) }} /></p>
            <p style={{ marginLeft: '5px' }}>Электронный адрес: <input type="text" onChange={(e) => { setNewUser({ ...newUser, email: e.target.value }) }} /></p>
            <p style={{ marginLeft: '5px' }}>Роль (Пользователь, Админ): <input type="text" onChange={(e) => { setNewUser({ ...newUser, role: e.target.value }) }} /></p>
            <p style={{ marginLeft: '5px' }}>Должность: <SelectPosition setNewUser={setNewUser} newUser={newUser} /></p>
            <p style={{ marginLeft: '5px' }}>Отдел: <SelectDepartment setNewUser={setNewUser} newUser={newUser} /></p>
            <button type="submit" onClick={() => { addUser(); }}>зарегистрировать</button>
        </div>
    )
}
