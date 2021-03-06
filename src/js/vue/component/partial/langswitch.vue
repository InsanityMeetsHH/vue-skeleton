<script>
    import cookieConsent from '../../module/cookie-consent';
    import slider from '../../module/slider';
    
    export default {
        mixins: [cookieConsent, slider],
        props: {
            drop: {
                type: String,
                default: 'up'
            }
        },
        data: function() {
            return {
                currentLocale: window.localStorage.getItem('currentLocale') ? window.localStorage.getItem('currentLocale') : 'en',
                fallbackLocale: 'en',
                languages: ['en', 'de']
            };
        },
        watch: {
            currentLocale(newLocale) {
                window.localStorage.currentLocale = newLocale;
            }
        },
        mounted: function() {
            this.changeLang(this.currentLocale);
        },
        methods: {
            changeLang: function(lang) {
                let $this = this;
                $this.$i18n.locale = lang;
                localStorage.currentLocale = lang;

                // workaround: initSlider() is called, but it's not right translated
                // if you slide to the left, after language has changed
                setTimeout(function() {
                    $this.initCookieConsent();
                    $this.initSlider();
                }, 100);
            },
            getButtonClass: function() {
                return 'drop' + this.drop;
            }
        }
    };
</script>

<template>
    <div class="col-auto">
        <div class="btn-group" :class="getButtonClass()">
            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <font-awesome-icon :icon="['fas', 'globe']" />
            </button>
            <div class="dropdown-menu">
                <a v-for="lang in languages" :key="lang" class="dropdown-item" onclick="javascript:return false;" href="#" @click="changeLang(lang)">{{ $t("lang-" + lang) }}</a>
            </div>
        </div>
    </div>
</template>
