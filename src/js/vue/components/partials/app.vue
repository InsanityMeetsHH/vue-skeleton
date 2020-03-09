<script>
    const layout = 'default';

    export default {
        computed: {
            layout() {
                return 'l-' + (this.$route.meta.layout || layout);
            }
        },
        mounted: function() {
            jQuery('html').removeClass('no-js');
            jQuery('[data-toggle="tooltip"]').tooltip();
        }
    };
</script>

<template>
    <component :is="layout" />
</template>
