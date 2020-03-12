import Vue from 'vue';
import VueRouter from 'vue-router';
import i18n from './i18n';
import routes from './routes';

Vue.use(VueRouter);
i18n.locale = localStorage.currentLocale ? localStorage.currentLocale : i18n.currentLocale;

const router = new VueRouter({
    // base: '/',
    // mode: 'history',
    routes: routes,
    /**
     * Returns translated meta string
     *
     * Examples:
     * i18n.nav-home (just locale key)
     * i18n.nav-home(lorem ipsum|foobar|1234) (locale key with params)
     * router.currentRoute (get current route)
     *
     * @param meta string
     * @param to null|object
     * @returns string
     */
    translateMeta: function(meta, to) {
        let currentRouteRegExp = /router\.currentRoute/gi;
        let paramsRegExp = /\([0-9a-z,| äüöß]+\)/gi;
        let metaRegExp = new RegExp('i18n\\.([a-z-]+)(' + paramsRegExp.source + ')?', 'gi');
        let cleanRegExp = new RegExp('i18n\\.|' + paramsRegExp.source, 'gi');
        let metaMatches = meta.match(metaRegExp);

        // if currentRoute exists
        if (currentRouteRegExp.test(meta)) {
            meta = meta.replace(currentRouteRegExp, window.location.origin + '/#' + to.path);
        }

        // if metaMatches is not empty
        if (metaMatches !== null) {
            for (let i = 0; i < metaMatches.length; i++) {
                let params = []; // eslint-disable-line array-bracket-newline

                // if params exists
                if (paramsRegExp.test(metaMatches[i])) {
                    params = metaMatches[i].match(paramsRegExp)[0].replace(/\(|\)/g, '').split('|');
                }

                meta = meta.replace(metaMatches[i], i18n.t(metaMatches[i].replace(cleanRegExp, ''), params));
            }
        }

        return meta;
    }
});

// this callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
    // this goes through the matched routes from last to first, finding the closest route with a title.
    // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    // find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
    const nearestWithLink = to.matched.slice().reverse().find(r => r.meta && r.meta.linkTags);
    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
    const previousNearestWithLink = from.matched.slice().reverse().find(r => r.meta && r.meta.linkTags);

    // if a route with a title was found, set the document (page) title to that value.
    if (nearestWithTitle) {
        document.title = router.options.translateMeta(nearestWithTitle.meta.title, to);
    }

    // remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

    // Skip rendering meta tags if there are none.
    if (!nearestWithMeta) {
        return next();
    }

    // turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
        const tag = document.createElement('meta');

        Object.keys(tagDef).forEach(key => {
            tag.setAttribute(key, router.options.translateMeta(tagDef[key], to));
        });

        // we use this to track which meta tags we create, so we don't interfere with other ones.
        tag.setAttribute('data-vue-router-controlled', '');

        return tag;
    }).forEach(tag => document.head.appendChild(tag));

    // skip rendering link tags if there are none.
    if (!nearestWithLink) {
        return next();
    }

    // turn the link tag definitions into actual elements in the head.
    nearestWithLink.meta.linkTags.map(tagDef => {
        const tag = document.createElement('link');

        Object.keys(tagDef).forEach(key => {
            tag.setAttribute(key, router.options.translateMeta(tagDef[key], to));
        });

        // we use this to track which link tags we create, so we don't interfere with other ones.
        tag.setAttribute('data-vue-router-controlled', '');

        return tag;
    }).forEach(tag => document.head.appendChild(tag));

    next();
});

export default router;
