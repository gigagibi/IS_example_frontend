import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../../context'
import { FoundedEmployees } from './Modal/FoundedEmployees'

export const FindEmployees = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [patronym, setPatronym] = useState('')
    const [users, setUsers] = useState([])
    const [visible, setVisible] = useState(false)
    const {token} = useContext(AuthContext)

    useEffect(() => {
        console.log(name, surname, patronym)
    }, [name, surname, patronym])

    function getUsers() {
        axios.get('http://localhost:88/api/user/', {
            headers: {
                'Authorization': 'Bearer ' + token
            },
            params: {
                name,
                surname,
                patronym
            }
        }).then(response => setUsers(response.data))
    }

    return (
        <div>
            <FoundedEmployees users={users} name={name} surname={surname} patronym={patronym} visible={visible} setVisible={setVisible}/>
            <div>
                <h1>Введите информацию о сотруднике</h1>
                <input type="text" placeholder="Имя" onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Фамилия" onChange={(e) => setSurname(e.target.value)} />
                <input type="text" placeholder="отчество" onChange={(e) => setPatronym(e.target.value)} />
                <button type="button" onClick={() => {setVisible(true); getUsers()}}>Найти сотрудника</button>
            </div>
        </div>

    )
}