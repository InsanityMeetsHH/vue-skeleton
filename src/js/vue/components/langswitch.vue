<script>
    export default {
        data: function() {
            return {
                currentLocale: 'en',
                fallbackLocale: 'en',
                languages: ['en', 'de']
            };
        },
        mounted: function() {
            if (localStorage.currentLocale) {
                this.currentLocale = localStorage.currentLocale;
            }

            this.changeLang(this.currentLocale);
        },
        watch: {
            currentLocale(newLocale) {
                localStorage.currentLocale = newLocale;
            }
        },
        methods: {
            changeLang: function(lang) {
                var $this = this;
                
                jQuery.ajax({
                    dataType: 'json',
                    method: 'GET',
                    url: 'json/app.' + lang + '.json'
                }).done(function(data) {
                    $this.$i18n.setLocaleMessage(lang, data);
                    $this.$i18n.locale = lang;
                    localStorage.currentLocale = lang;

                    cookieLayer = {
                        header: $this.$t('cl-header'),
                        message: $this.$t('cl-message'),
                        allow: $this.$t('cl-allow'),
                        dismiss: $this.$t('cl-dismiss'),
                        deny: $this.$t('cl-deny'),
                        link: $this.$t('cl-link'),
                        messageLink: $this.$t('cl-message-link'),
                        dismissLink: $this.$t('cl-dismiss-link'),
                        allowLink: $this.$t('cl-allow-link'),
                        policy: $this.$t('cl-policy'),
                        href: $this.$t('cl-href')
                    };
                    
                    jQuery('.cc-window, .cc-revoke').remove();
                    initCookieConsent();
                }).fail(function() {
                    // do something
                }).always(function() {
                    // do something
                });
            }
        }
    };
</script>

<template>
    <div class="btn-group dropup">
        <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <font-awesome-icon :icon="['fas', 'globe']"></font-awesome-icon>
        </button>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="#" onclick="javascript:return false;" v-for="lang in languages" :key="lang" @click="changeLang(lang)">{{ $t("lang-" + lang) }}</a>
        </div>
    </div>
</template>
