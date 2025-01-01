import React from 'react';

const routers = [
    {
        path: '/',
        component: React.lazy(() => import('~/layouts/App')),
        children: [
            {
                path: '/login',
                component: React.lazy(() => import('~/pages/Auth/Login/Login')),
            },
            {
                path: '/register',
                component: React.lazy(() =>
                    import('~/pages/Auth/Register/Register'),
                ),
            },
        ],
    },
    {
        path: '/admin',
        component: React.lazy(() => import('~/layouts/Admin')),
    },
];

export default routers;
