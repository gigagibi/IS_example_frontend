import React from 'react'
import axios from 'axios'
import { useState, useContext } from 'react/cjs/react.development'
import { AuthContext } from '../../../../context'
import { SelectDepartment } from './Select/SelectDepartment'
import { SelectPosition } from './Select/SelectPosition'

export const UserInputForm = ({setVisible, user}) => {
    const [newUser, setNewUser] = useState(user)
    const { role, token } = useContext(AuthContext)

    function changeUser() {
        axios({
            method: 'put',
            url: 'http://localhost:88/api/user/' + newUser.userId,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            data: newUser
        }).then(response => console.log(response))
    }

    function deleteUser() {
        axios({
            method: 'delete',
            url: 'http://localhost:88/api/user/' + newUser.userId,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => console.log(response))
    }

    return (
        <div style={{ backgroundColor: 'white', display: 'block', justifyContent: 'space-between', border: '2px solid teal', marginTop: '15px', marginBottom: '15px', borderRadius: '6px' }} key={newUser.userId}>
                <p style={{ marginLeft: '5px' }}>Имя: <input type="text" value={newUser.name} onChange={(e) => { setNewUser({ ...newUser, name: e.target.value }) }} /></p>
                <p style={{ marginLeft: '5px' }}>Фамилия: <input type="text" value={newUser.surname} onChange={(e) => { setNewUser({ ...newUser, surname: e.target.value }) }} /></p>
                <p style={{ marginLeft: '5px' }}>Отчество: <input type="text" value={newUser.patronym} onChange={(e) => { setNewUser({ ...newUser, patronym: e.target.value }) }} /></p>
                <p style={{ marginLeft: '5px' }}>Электронный адрес: <input type="text" value={newUser.email} onChange={(e) => { setNewUser({ ...newUser, email: e.target.value }) }} /></p>
                <p style={{ marginLeft: '5px' }}>Должность: <SelectPosition setNewUser={setNewUser} newUser={newUser} /></p>
                <p style={{ marginLeft: '5px' }}>Отдел: <SelectDepartment setNewUser={setNewUser} newUser={newUser} /></p>
                <button type="submit" onClick={() => { changeUser(); setVisible(false) }}>Изменить</button>
                <button type="submit" onClick={() => { deleteUser(); setVisible(false) }}>Удалить</button>
            </div>
    )
}
