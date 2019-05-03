'use strict';

const routes = [
    {
        name: 'index',
        path: '',
        component: Home // eslint-disable-line no-undef
    },
    {
        name: 'about',
        path: '/about',
        component: About // eslint-disable-line no-undef
    },
    {
        path: '*',
        component: ErrorPage // eslint-disable-line no-undef
    }
];
