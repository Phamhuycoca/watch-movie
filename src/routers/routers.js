const routers = [
    {
        path: '/',
        component: () => import('~/layouts/App'),
    },
    {
        path: '/admin',
        component: () => import('~/layouts/Admin'),
    },
    {
        path: '/login',
        component: () => import('~/pages/Auth/Login'),
    },
];

export default routers;
