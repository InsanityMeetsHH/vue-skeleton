<script>
    import Footer from '../partials/footer';
    import Header from '../partials/header';
    import ModalCookiePolicy from '../partials/modal-cookie-policy';
    
    export default {
        components: {
            'v-footer': Footer,
            'v-header': Header,
            'v-modal-cookie-policy': ModalCookiePolicy
        }
    };
</script>

<template>
    <div>
        <v-header></v-header>
        <main>
            <div class="container">
                <router-view></router-view>
            </div>
        </main>
        <v-footer></v-footer>
        <v-modal-cookie-policy></v-modal-cookie-policy>
    </div>
</template>