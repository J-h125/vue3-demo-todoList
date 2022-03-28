import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import TodoList from '../components/TodoList.vue'
import Rate from '../pages/Rate.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component:Home
    },
    {
        path: '/about',
        name: 'About',
        component:About
    },
    {
        path: '/todolist',
        name: 'TodoList',
        component:TodoList
    },
    {
        path: '/rate',
        name: 'Rate',
        component:Rate
    },

]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
