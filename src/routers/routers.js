const routers = [
    {
        path: '/',
        component: () => import('~/layouts/App'),
    },
    {
        path: '/admin',
        component: () => import('~/layouts/Admin'),
    },
];

export default routers;
