<script>
    import Footer from './footer';
    import Header from './header';
    import Modal from './modal';
    
    export default {
        components: {
            'v-footer': Footer,
            'v-header': Header,
            'v-modal': Modal
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
        <v-modal></v-modal>
    </div>
</template>
