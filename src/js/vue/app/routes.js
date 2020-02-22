import Home from '../components/pages/home';
import About from '../components/pages/about';
import ErrorPage from '../components/pages/error-page';

const routes = [
    {
        name: 'index',
        path: '',
//        meta: { layout: 'empty' },
        component: Home
    },
    {
        name: 'about',
        path: '/about',
        component: About
    },
    {
        path: '*',
        component: ErrorPage
    }
];

export default routes;