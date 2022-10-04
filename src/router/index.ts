import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Songs from "../pages/Songs.vue";
import Login from "../pages/Login.vue";
const routes = [
    {
        path: "/homepage",
        component: Home,
    },
    {
        path: "/songs",
        component: Songs,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/",
        redirect: "/homepage",
    },
];
const router = createRouter({ history: createWebHistory(), routes });
export default router;
