import Inicio from "./../views/Inicio.vue"
import Producto from "./../views/Producto.vue"
import Login from "./../views/Login.vue"
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Blog from "../views/Blog.vue";
import NotFoundComponent from "../views/errors/NotFoundComponent.vue";

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
    },
    { path: '/:pathMatch(.*)', component: NotFoundComponent }
];

export const router = createRouter({
    history: createWebHistory('/app-vue-proyecto1/'),
    routes: mis_rutas
})
