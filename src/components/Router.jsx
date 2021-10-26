import React, { useContext } from 'react'

import { Redirect, Switch, Route } from 'react-router'
import { AuthContext } from '../context'
import { Authorization } from './pages/Authorization/Authorization'
import { Departments } from './pages/Departments/Departments'
import { FindEmployees } from './pages/Employees/FindEmployees'
import { Home } from './pages/Home/Home'
import { Registration } from './pages/Registration/Registration'

export const Router = () => {
    const { auth, role } = useContext(AuthContext)

    return (
        auth ?
            <Switch>
                <Route exact path="/home"><Home /></Route>
                <Route exact path="/departments"><Departments /></Route>
                <Route exact path="/find_employers"><FindEmployees /></Route>
                <Route exact path="/tabel">tabel</Route>
                <Route exact path="/tasks">tasks</Route>
                <Route exact path="/offices"></Route>
                {role === 'ROLE_ADMIN' ?
                <Route exact path="/register"><Registration/></Route>
                :
                <div/>
                }
            </Switch>
            :
            <Switch>
                <Route path="/login"><Authorization /></Route>
            </Switch>
    )
}
