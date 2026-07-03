import Inicio from "./../views/Inicio.vue"
import Producto from "./../views/Producto.vue"
import Login from "./../views/Login.vue"
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Blog from "../views/Blog.vue";

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
    {
        path: '/blog',
        component: Blog
    }
];

export const router = createRouter({
    history: createWebHashHistory('/app-vue-proyecto1/'),
    routes: mis_rutas
})
