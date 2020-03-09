<script>
    export default {
        data: function() {
            return {
                currentLocale: 'en',
                fallbackLocale: 'en',
                languages: ['en', 'de']
            };
        },
        watch: {
            currentLocale(newLocale) {
                localStorage.currentLocale = newLocale;
            }
        },
        mounted: function() {
            if (localStorage.currentLocale) {
                this.currentLocale = localStorage.currentLocale;
            }

            this.changeLang(this.currentLocale);
        },
        methods: {
            changeLang: function(lang) {
                this.$i18n.locale = lang;
                localStorage.currentLocale = lang;
                
                cookieLayer = {
                    header: this.$t('cl-header'),
                    message: this.$t('cl-message'),
                    allow: this.$t('cl-allow'),
                    dismiss: this.$t('cl-dismiss'),
                    deny: this.$t('cl-deny'),
                    link: this.$t('cl-link'),
                    messageLink: this.$t('cl-message-link'),
                    dismissLink: this.$t('cl-dismiss-link'),
                    allowLink: this.$t('cl-allow-link'),
                    policy: this.$t('cl-policy'),
                    href: this.$t('cl-href')
                };
                initCookieConsent();
            }
        }
    };
</script>

<template>
    <div class="btn-group dropup">
        <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <font-awesome-icon :icon="['fas', 'globe']" />
        </button>
        <div class="dropdown-menu">
            <a v-for="lang in languages" :key="lang" class="dropdown-item" onclick="javascript:return false;" href="#" @click="changeLang(lang)">{{ $t("lang-" + lang) }}</a>
        </div>
    </div>
</template>
