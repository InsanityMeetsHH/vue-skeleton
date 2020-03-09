import Home from '../components/pages/home';
import About from '../components/pages/about';
import ErrorPage from '../components/pages/error-page';
import i18n from './i18n';

const routes = [
    {
        component: Home,
        name: 'index',
        path: '',
        meta: {
            title: 'i18n.nav-home - Vue Skeleton',
            layout: 'default',
            metaTags: [
                {
                    name: 'description',
                    content: 'The home page of our example app.'
                },
                {
                    property: 'og:description',
                    content: 'The home page of our example app.'
                }
            ]
        }
    },
    {
        component: About,
        name: 'about',
        path: '/about',
        meta: {
            title: 'i18n.nav-about - Vue Skeleton',
            layout: 'default',
            metaTags: [
                {
                    name: 'description',
                    content: 'The about page.'
                },
                {
                    property: 'og:description',
                    content: 'The about page.'
                }
            ]
        }
    },
    {
        component: ErrorPage,
        path: '*',
        meta: {
            title: 'i18n.nav-error - Vue Skeleton',
            layout: 'default'
        }
    }
];

export default routes;