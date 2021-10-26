import React, { useContext } from 'react'

import { Redirect, Switch, Route } from 'react-router'
import { AuthContext } from '../context'
import { Authorization } from './pages/Authorization/Authorization'
import { Departments } from './pages/Departments/Departments'
import { Home } from './pages/Home/Home'

export const Router = () => {
    const {auth} = useContext(AuthContext)

    return (
        auth ?
            <Switch>
                <Route exact path="/home"><Home/></Route>
                <Route exact path="/departments"><Departments/></Route>
                <Route exact path="/find_employers">find_employers</Route>
                <Route exact path="/find_employers/result">founded</Route>
                <Route exact path="/tabel">tabel</Route>
                <Route exact path="/tasks">tasks</Route>
                <Route exact path="/offices"></Route>
            </Switch>
            :
            <Switch>
                <Route path="/login"><Authorization /></Route>
            </Switch>
    )
}
