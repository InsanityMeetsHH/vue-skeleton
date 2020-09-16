<script>
    import LangSwitch from '../partial/langswitch';
    import ModalCookiePolicy from '../partial/modal-cookie-policy';
    import Navigation from '../partial/navigation';

    export default {
        components: {
            'c-langswitch': LangSwitch,
            'c-modal-cookie-policy': ModalCookiePolicy,
            'c-navigation': Navigation
        }
    };
</script>

<template>
    <div>
        <header>
            <div class="container">
                <div class="row">
                    <c-navigation />
                </div>
            </div>
        </header>
        <main>
            <div class="container">
                <router-view />
            </div>
        </main>
        <footer>
            <div class="container">
                <div class="row">
                    <c-langswitch drop="up" />
                </div>
            </div>
        </footer>
        <c-modal-cookie-policy />
    </div>
</template>
