'use strict';

const messages = '';

const router = new VueRouter({ // eslint-disable-line no-undef
    //base: '/',
    mode: 'history',
    routes: routes // eslint-disable-line no-undef
});

router.afterEach((to, from) => {
    if (to.name === 'index') {
        setTimeout(function() {
            initCssuaMonitor(); // eslint-disable-line no-undef
            initImageLazyLoad(); // eslint-disable-line no-undef
            initSlider(); // eslint-disable-line no-undef
        }, 100);
    }
});

const i18n = new VueI18n({ // eslint-disable-line no-undef
    messages, // set locale messages
    locale: LangSwitch.data().currentLocale, // eslint-disable-line no-undef
    fallbackLocale: LangSwitch.data().fallbackLocale, // eslint-disable-line no-undef
    silentFallbackWarn: true,
    silentTranslationWarn: true
});

Vue.component('v-langswitch', LangSwitch); // eslint-disable-line no-undef

const app = new Vue({ // eslint-disable-line no-undef
    template: vueTemplates.app, // eslint-disable-line no-undef
    router: router,
    i18n: i18n,
    components: {
        'v-footer': Footer, // eslint-disable-line no-undef
        'v-header': Header, // eslint-disable-line no-undef
        'v-modal': Modal // eslint-disable-line no-undef
    }
}).$mount('#app');
