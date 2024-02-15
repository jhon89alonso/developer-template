import { createRouter, createWebHistory } from "vue-router";

import InvoicesIndex from "../Pages/Invoices/Index.vue";
import notFound from "../Components/NotFound.vue";

const routes = [
    {
        path: "/",
        component: InvoicesIndex,
    },
    {
        path: "/:pathMatch(.*)*",
        component: notFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
});
export default router;
