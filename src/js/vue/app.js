import Vue from 'vue';
import fontawesome from './app/fontawesome';
import i18n from './app/i18n';
import router from './app/router';
import DefaultLayout from './component/layout/default';
import EmptyLayout from './component/layout/empty';
import App from './component/partial/app';

Vue.component('l-default', DefaultLayout);
Vue.component('l-empty', EmptyLayout);

Vue.config.productionTip = false;

const app = new Vue({
    fontawesome: fontawesome,
    i18n: i18n,
    router: router,
    render: h => h(App)
}).$mount('#app');
