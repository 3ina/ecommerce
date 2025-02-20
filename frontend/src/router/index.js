import {createRouter,createWebHistory} from "vue-router";

const routes = [
    {
        path: '/app',
        name: 'app',
        component: () => import('../components/AppLayout.vue'),
        children: [
            {
                path: 'dashboard',
                name: 'app.dashboard',
                component: () => import('../views/Dashboard.vue'),
            },
            {
                path: 'products',
                name: 'app.products',
                component: () => import('../views/Products.vue'),
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
    },
    {
        path: '/request-password',
        name: 'requestPassword',
        component: () => import('../views/RequestPasswordReset.vue'),
    },
    {
        path: '/reset-password/:token',
        name: 'ResetPassword',
        component: () => import('../views/ResetPassword.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
