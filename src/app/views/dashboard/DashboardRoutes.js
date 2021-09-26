import React from 'react'
import { authRoles } from '../../auth/authRoles'

const dashboardRoutes = [
    {
        path: '/dashboard',
        component: React.lazy(() => import('./Analytics')),
        auth: authRoles.sa,
    },
    {
        path: '/total-employees',
        component: React.lazy(() => import('./TotalEmployees/TotalEmployees')),
        auth: authRoles.sa,
    },
    {
        path: '/registered-users',
        component: React.lazy(() => import('./RegisteredUsers/RegisteredUsers')),
        auth: authRoles.sa,
    },
    {
        path: '/brigades',
        component: React.lazy(() => import('./Brigades/Brigades')),
        auth: authRoles.sa,
    },
    {
        path: '/missing-users',
        component: React.lazy(() => import('./MissingUsers/MissingUsers')),
        auth: authRoles.sa,
    },
    {
        path: '/registration',
        component: React.lazy(() => import('./RegisteredUsers/Registration')),
        auth: authRoles.sa,
    }
]

export default dashboardRoutes
