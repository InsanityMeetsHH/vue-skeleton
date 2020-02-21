import Home from '../components/home';
import About from '../components/about';
import ErrorPage from '../components/error-page';

const routes = [
    {
        name: 'index',
        path: '',
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

export default routes