import Home from './components/pages/Home.vue'
import Create from './components/pages/Create.vue'

export const routes = [
    {
        id: 1,
        path: '/',
        component: Home,
        title: 'Home'
    },
    {
        id: 2,
        path: '/create',
        component: Create,
        title: 'Create'
    }
]