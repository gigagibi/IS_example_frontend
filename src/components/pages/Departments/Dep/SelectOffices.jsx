import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../context'

export const SelectOffices = ({ office, setOffice }) => {
    const [offices, setOffices] = useState([])
    const { token } = useContext(AuthContext)

    function getOffices() {
        axios.get('http://localhost:88/api/office/', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => setOffices(response.data))
            .then(() => { setOffice(offices[offices.length - 1]) })
    }
    useEffect(() => {
        getOffices()
    }, [])


    return (
        <select onChange={(e) => setOffice({ ...office, officeId: e.target.value })}>
            {offices.map(off => {
                return <option key={off.officeId} value={off.officeId}>{off.officeId} : {off.address}</option>
            })}
        </select>
    )
}
