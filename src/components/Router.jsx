import React, { useContext } from 'react'

import { Redirect, Switch, Route } from 'react-router'
import { AuthContext } from '../context'
import { user_router, admin_router } from '../router/index'
import { Authorization } from './pages/Authorization/Authorization'

export const Router = () => {
    const { auth, role } = useContext(AuthContext)
    let router = user_router;
    if(role==='ROLE_ADMIN') {
        router = [...router, ...admin_router]
    }
    return (
        auth ?
            <Switch>
                {router.map(route=> {
                    return <Route key={route.path} exact={route.exact} path={route.path} component={route.component}/>
                })}
            </Switch>
            :
            <Switch>
                <Route path="/login"><Authorization /></Route>
            </Switch>
    )
}
