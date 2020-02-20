import LangSwitch from "../components/langswitch";
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {};
const i18n = new VueI18n({
	messages,
	locale: LangSwitch.data().currentLocale,
	fallbackLocale: LangSwitch.data().fallbackLocale,
	silentFallbackWarn: true,
	silentTranslationWarn: true
});

export default i18n