import React, { useState } from 'react'

export const FindEmployees = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [patronym, setPatronym] = useState('')
    return (
        <div>
            <h1>Введите информацию о сотруднике</h1>
            <input type="text" placeholder="Имя" onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="Фамилия" onChange={(e) => setSurname(e.target.value)}/>
            <input type="text" placeholder="отчество" onChange={(e) => setPatronym(e.target.value)}/>
        </div>
    )
}
