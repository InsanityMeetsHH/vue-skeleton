<div class="btn-group dropup">
    <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fas fa-globe"></i>
    </button>
    <div class="dropdown-menu">
        <a class="dropdown-item" href="#" onclick="javascript:return false;" v-for="lang in languages" :key="lang" @click="changeLang(lang)">{{ $t("lang-" + lang) }}</a>
    </div>
</div>
