<script>
    export default {
        data: function() {
            return {
                defaultLayout: 'default'
            };
        },
        computed: {
            layout() {
                return 'l-' + (this.$route.meta.layout || this.defaultLayout);
            }
        },
        mounted: function() {
            jQuery('html').attr('lang', this.$t('lang'));
            jQuery('html').removeClass('no-js');
        }
    };
</script>

<template>
    <component :is="layout" />
</template>
