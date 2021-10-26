import { Departments } from "../components/pages/Departments/Departments"
import { Home } from "../components/pages/Home/Home"

export const admin_router = [
    // {path='/departments/change/:id', exact=true, component=osdk}
]

export const user_router = [
    {path='/home', exact=true, component=Home},
    {path='/departments', exact=true, component=Departments},
    {path='/departments:id', exact=true, component=Home},
    {path='/find_employers', exact=true, component=Home},
    {path='/find_employers/result', exact=true, component=Home},
    {path='/tabel', exact=true, component=Home},
    {path='/tasks', exact=true, component=Home},
    {path='/offices', exact=true, component=Home}
]