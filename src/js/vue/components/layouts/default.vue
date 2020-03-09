<script>
    import Footer from '../partials/footer';
    import Header from '../partials/header';
    import ModalCookiePolicy from '../partials/modal-cookie-policy';

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
