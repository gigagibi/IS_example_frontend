import React, { useContext } from 'react'

import { Redirect, Switch, Route } from 'react-router'
import { AuthContext } from '../context'
import { Authorization } from './pages/Authorization/Authorization'

export const Router = () => {
    const {auth} = useContext(AuthContext)

    return (
        auth ?
            <Switch>
                <Route exact path="/home">Home</Route>
                <Route exact path="/departments">departments</Route>
                <Route exact path="/find_employers">find_employers</Route>
                <Route exact path="/find_employers/result">founded</Route>
                <Route exact path="/tabel">tabel</Route>
                <Route exact path="/tasks">tasks</Route>
                <Route exact path="/offices"></Route>
                {/* <Redirect to='/home'/> */}
            </Switch>
            :
            <Switch>
                <Route path="/login"><Authorization /></Route>
                // <Redirect to='/login'/>
            </Switch>
    )
}
