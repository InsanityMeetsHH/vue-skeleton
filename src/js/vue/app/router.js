import routes from './routes';
import Vue from "vue";
import VueRouter from "vue-router";
import i18n from './i18n';

Vue.use(VueRouter);
i18n.locale = localStorage.currentLocale ? localStorage.currentLocale : i18n.currentLocale;

const router = new VueRouter({
    // base: '/',
    // mode: 'history',
    routes: routes
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
    let title = '';
    
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if(nearestWithTitle) {
        title = nearestWithTitle.meta.title;
        let titleMatch = nearestWithTitle.meta.title.match(/i18n\.([a-z-]+)/g);
        
        // If titleMatch is not empty
        if (titleMatch !== null) {
            for (let i = 0; i < titleMatch.length; i++) {
                title = nearestWithTitle.meta.title.replace(titleMatch[i], i18n.t(titleMatch[i].replace('i18n.', '')));
            }
        }
        
        document.title = title;
    }

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

    // Skip rendering meta tags if there are none.
    if(!nearestWithMeta) {
        return next();
    }

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
        const tag = document.createElement('meta');

        Object.keys(tagDef).forEach(key => {
          tag.setAttribute(key, tagDef[key]);
        });

        // We use this to track which meta tags we create, so we don't interfere with other ones.
        tag.setAttribute('data-vue-router-controlled', '');

        return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

    next();
});

export default router;
