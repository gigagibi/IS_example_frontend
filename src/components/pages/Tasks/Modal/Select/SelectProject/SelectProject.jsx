import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../../../context'

export const SelectProject = ({ state, setState, ...props }) => {
    const { token } = useContext(AuthContext)
    const [projects, setProjects] = useState([])

    function getProjects() {
        axios({
            method: 'get',
            url: 'http://localhost:88/api/project/',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => setProjects(response.data))
    }

    useEffect(() => {
        getProjects();
        if(projects.length!=0) {
            setState(projects[0])
        }
    }, [])

    useEffect(() => {
        setState(projects[0])
    }, [projects])

    return (
        <select onChange={(e) => setState([...projects].find(project => project.projectId == e.target.value))}>
            {projects.map(project => {
                return <option key={project.projectId} value={project.projectId}>{project.name}</option>
            })}
        </select>
    )
}
