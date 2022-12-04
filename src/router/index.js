import { createRouter, createWebHistory } from 'vue-router'
import { navigationGuard } from '@okta/okta-vue'
//import Todos from "@/components/Todos";
import Home from "@/components/HomeComp";
import { LoginCallback } from '@okta/okta-vue'
import TodosTo from "@/components/TodosTo";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/todos',
        component: TodosTo,
        meta: {
            requiresAuth: true
        }
    },
    { path: '/callback', component: LoginCallback },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach(navigationGuard)

export default router