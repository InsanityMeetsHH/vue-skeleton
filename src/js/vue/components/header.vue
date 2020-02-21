<script>
    export default {
        
    };
</script>

<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-12 pb-3">
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'index' }">{{ $t("nav-home") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'about' }">{{ $t("nav-about") }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/foobar">{{ $t("nav-error") }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
