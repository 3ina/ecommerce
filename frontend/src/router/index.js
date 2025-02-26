import {createRouter,createWebHistory} from "vue-router";
import store from "../store/index.js";

const routes = [
    {
        path: '/app',
        name: 'app',
        component: () => import('../components/AppLayout.vue'),
        meta: {
            requiresAuth: true,
        },
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
        meta: {
            requiresGuest: true,
        }
    },
    {
        path: '/request-password',
        name: 'requestPassword',
        component: () => import('../views/RequestPasswordReset.vue'),
        meta: {
            requiresGuest: true,
        }
    },
    {
        path: '/reset-password/:token',
        name: 'ResetPassword',
        component: () => import('../views/ResetPassword.vue'),
        meta: {
            requiresGuest: true,
        }
    },
    {
        path: '/:pathMatch(.*)',
        name: '404',
        component: () => import('../views/404.vue'),

    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({name: 'login'});
    }else if (to.meta.requiresGuest && store.state.user.token) {
       next({name: 'app.dashboard'});
    }
    else {
        next();
    }
})

export default router;
