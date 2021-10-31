import { Departments } from "../components/pages/Departments/Departments"
import { FindEmployees } from "../components/pages/Employees/FindEmployees"
import { Home } from "../components/pages/Home/Home"
import { Registration } from "../components/pages/Registration/Registration"
import { Tabel } from "../components/pages/Tabel/Tabel"
import { Tasks } from "../components/pages/Tasks/Tasks"

export const user_router = [
    { path:'/home', exact:true, component: Home },
    { path:'/departments', exact:true, component: Departments },
    { path:'/find_employers', exact:true, component: FindEmployees },
    { path:'/tabel', exact:true, component: Tabel },
    { path:'/tasks', exact:true, component: Tasks },
    { path:'/offices', exact:true, component: Home }
]

export const admin_router = [
    { path:'/register', exact:true, component:Registration }
]