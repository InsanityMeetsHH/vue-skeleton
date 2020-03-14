<script>
    import Footer from '../partial/footer';
    import Header from '../partial/header';
    import ModalCookiePolicy from '../partial/modal-cookie-policy';

    export default {
        components: {
            'c-footer': Footer,
            'c-header': Header,
            'c-modal-cookie-policy': ModalCookiePolicy
        }
    };
</script>

<template>
    <div>
        <header>
            <c-header />
        </header>
        <main>
            <div class="container">
                <router-view />
            </div>
        </main>
        <footer>
            <c-footer />
        </footer>
        <c-modal-cookie-policy />
    </div>
</template>
