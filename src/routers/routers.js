import React from 'react';

const routers = [
    {
        path: '/',
        component: React.lazy(() => import('~/layouts/App')),
        children: [
            {
                path: '/login',
                component: React.lazy(() => import('~/pages/Auth/Login')),
            },
        ],
    },
    {
        path: '/admin',
        component: React.lazy(() => import('~/layouts/Admin')),
    },
];

export default routers;
