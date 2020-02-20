import App from './components/app';
import fontawesome from './app/fontawesome'
import i18n from './app/i18n'
import router from './app/router'
import Vue from 'vue';

const app = new Vue({
    fontawesome: fontawesome,
    i18n: i18n,
    router: router,
    render: h => h(App)
}).$mount('#app');