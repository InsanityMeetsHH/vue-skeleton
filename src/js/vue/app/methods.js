import cookieConsent from '../method/cookie-consent';
import cssuaMonitor from '../method/cssua-monitor';
import imageLazyLoad from '../method/image-lazyload';
import slider from '../method/slider';

const methods = {
    methods: {
        initCookieConsent: cookieConsent.methods.initCookieConsent,
        initCssuaMonitor: cssuaMonitor.methods.initCssuaMonitor,
        forceImageLoad: imageLazyLoad.methods.forceImageLoad,
        initImageLazyLoad: imageLazyLoad.methods.initImageLazyLoad,
        initSlider: slider.methods.initSlider
    }
};

export default methods;
