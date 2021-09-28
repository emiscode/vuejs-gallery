import Home from './components/pages/Home.vue'
import Create from './components/pages/Create.vue'

export const routes = [
    {
        id: 1,
        path: '/',
        name: 'home',
        component: Home,
        title: 'Home',
        menu: true
    },
    {
        id: 2,
        path: '/create',
        name: 'create',
        component: Create,
        title: 'Create',
        menu: true
    },
    {
        id: 3,
        path: '*',
        component: Home,
        menu: false
    }
]