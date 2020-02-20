import About from '../components/about';
import ErrorPage from '../components/error-page';
import Home from '../components/home';
import Vue from "vue";
import VueRouter from "vue-router";

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

Vue.use(VueRouter);

const router = new VueRouter({
    // base: '/',
    // mode: 'history',
    routes: routes
});

router.afterEach((to, from) => {
    if (to.name === 'index') {
        setTimeout(function() {
            initCssuaMonitor();
            initImageLazyLoad();
            initSlider();
        }, 100);
    }
});

export default router
