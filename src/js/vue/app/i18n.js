import LangSwitch from "../components/partials/langswitch";
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { languages } from './i18n-languages';
const messages = Object.assign(languages);

Vue.use(VueI18n);

const i18n = new VueI18n({
    messages: messages,
    locale: LangSwitch.data().currentLocale,
    fallbackLocale: LangSwitch.data().fallbackLocale,
    silentFallbackWarn: true,
    silentTranslationWarn: true
});

export default i18n;