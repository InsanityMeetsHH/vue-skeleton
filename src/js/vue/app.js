import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import routes from './app/routes'
import App from './components/app';
import LangSwitch from './components/langswitch';

const messages = {};

Vue.use(VueRouter);
Vue.use(VueI18n);

var router = new VueRouter({
    //base: '/',
    mode: 'history',
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

var i18n = new VueI18n({
    messages,
    locale: LangSwitch.data().currentLocale,
    fallbackLocale: LangSwitch.data().fallbackLocale,
    silentFallbackWarn: true,
    silentTranslationWarn: true
});
 
var app = new Vue({
    router: router,
    i18n: i18n,
    render: h => h(App)
}).$mount('#app');
