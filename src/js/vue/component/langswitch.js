/*global i18n*/
'use strict';

const LangSwitch = {
    template: vueTemplates.langswitch, // eslint-disable-line no-undef
    data: function() {
        return {
            currentLocale: 'en',
            fallbackLocale: 'en',
            languages: ['en', 'de'] // eslint-disable-line array-bracket-newline
        };
    },
    mounted: function() {
        if (localStorage.currentLocale) {
            this.currentLocale = localStorage.currentLocale;
        }
        
        this.changeLang(this.currentLocale); // eslint-disable-line no-undef
    },
    watch: {
        currentLocale(newLocale) {
            localStorage.currentLocale = newLocale;
        }
    },
    methods: {
        changeLang: function(lang) {
            jQuery.ajax({
                dataType: 'json',
                method: 'GET',
                url: 'json/app.' + lang + '.json'
            }).done(function(data) {
                i18n.setLocaleMessage(lang, data);
                i18n.locale = lang;
                localStorage.currentLocale = lang;
                
                cookieLayer = { // eslint-disable-line no-undef
                    header: i18n.t('cl-header'),
                    message: i18n.t('cl-message'),
                    allow: i18n.t('cl-allow'),
                    dismiss: i18n.t('cl-dismiss'),
                    deny: i18n.t('cl-deny'),
                    link: i18n.t('cl-link'),
                    messageLink: i18n.t('cl-message-link'),
                    dismissLink: i18n.t('cl-dismiss-link'),
                    allowLink: i18n.t('cl-allow-link'),
                    policy: i18n.t('cl-policy'),
                    href: i18n.t('cl-href')
                };
                
                if (jQuery('.cc-window').length) {
                    jQuery('.cc-window, .cc-revoke').remove();
                    initCookieConsent(); // eslint-disable-line no-undef
                }
            }).fail(function() {
                // do something
            }).always(function() {
                // do something
            });
        }
    }
};

