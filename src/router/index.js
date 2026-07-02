import Inicio from "./../views/Inicio.vue"
import Producto from "./../views/Producto.vue"
import Login from "./../views/Login.vue"
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const mis_rutas = [
    {
        path: '/',
        component: Inicio
    },
    {
        path: '/producto',
        component: Producto
    },
    {
        path: '/login',
        component: Login
    },
];

export const router = createRouter({
    history: createWebHistory('/app-vue-proyecto1/'),
    routes: mis_rutas
})
