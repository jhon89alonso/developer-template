import { createRouter, createWebHistory } from "vue-router";

import InvoicesIndex from "../Pages/Invoices/Index.vue";
import notFound from "../Components/NotFound.vue";
import Login from "../Pages/Login.vue";
import Dashboard from "../Pages/Dashboard.vue";

const routes = [
    {
        path: "/",
        component: InvoicesIndex,
    },

    {
        path: "/:pathMatch(.*)*",
        component: notFound,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
   
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
