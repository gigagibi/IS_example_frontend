import React from 'react'

export const UserInfoForm = ({user}) => {
    return (
        <div style={{ backgroundColor: 'white', display: 'block', justifyContent: 'space-between', border: '2px solid teal', marginTop: '15px', marginBottom: '15px', borderRadius: '6px' }} key={user.userId}>
                <p style={{ marginLeft: '5px' }}>Имя: {user.name}</p>
                <p style={{ marginLeft: '5px' }}>Фамилия: {user.surname}</p>
                <p style={{ marginLeft: '5px' }}>Отчество: {user.patronym}</p>
                <p style={{ marginLeft: '5px' }}>Электронный адрес: {user.email}</p>
            </div>
    )
}
