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
        children: [
            {
                path: 'category',
                component: React.lazy(() =>
                    import('~/modules/admin.category/List'),
                ),
            },
            {
                path: 'login',
                component: React.lazy(() => import('~/pages/Auth/Login/Login')),
            },
        ],
    },
];

export default routers;
