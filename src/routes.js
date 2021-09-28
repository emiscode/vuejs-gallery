import Home from './components/pages/Home.vue'
const Create = () => System.import('./components/pages/Create.vue')
//import Create from './components/pages/Create.vue'

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
        path: '/modify/:id',
        name: 'modify',
        component: Create,
        title: 'Modify',
        menu: false
    },
    {
        id: 4,
        path: '*',
        component: Home,
        menu: false
    }
]