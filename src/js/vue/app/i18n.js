import LangSwitch from '../components/partials/langswitch';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { locales } from './i18n-locales';
const messages = Object.assign(locales);

Vue.use(VueI18n);

const i18n = new VueI18n({
    messages: messages,
    locale: LangSwitch.data().currentLocale,
    fallbackLocale: LangSwitch.data().fallbackLocale,
    silentFallbackWarn: true,
    silentTranslationWarn: true
});

export default i18n;
