<script>
    const layout = 'default';
    
    export default {
        computed: {
            layout() {
                return 'v-' + (this.$route.meta.layout || layout) + '-layout';
            }
        }
    };
</script>

<template>
    <component v-bind:is="layout"></component>
</template>
