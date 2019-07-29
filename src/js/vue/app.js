import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import routes from './app/routes'
import App from './components/app';
import LangSwitch from './components/langswitch';
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faCss3 as fabCss3,
    faFontAwesomeFlag as fabFontAwesomeFlag,
    faHtml5 as fabHtml5,
    faVuejs as fabVuejs,
} from '@fortawesome/free-brands-svg-icons'
import { faSquare as farSquare } from '@fortawesome/free-regular-svg-icons'
import { 
    faBold as fasBold,
    faChevronLeft as fasChevronLeft,
    faChevronRight as fasChevronRight,
    faCircle as fasCircle,
    faGlobe as fasGlobe,
    faImage as fasImage,
    faSquare as fasSquare,
    faSync as fasSync,
    faUserSecret as fasUserSecret
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
const messages = {};

library.add(fabCss3, fabFontAwesomeFlag, fabHtml5, fabVuejs);
library.add(farSquare);
library.add(fasBold, fasChevronLeft, fasChevronRight, fasCircle, fasGlobe, fasImage, fasSquare, fasSync, fasUserSecret);

Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
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
