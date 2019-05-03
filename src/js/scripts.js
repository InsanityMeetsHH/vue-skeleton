/*global initCookieConsent initSlider initImageLazyLoad initCssuaMonitor*/
'use strict';

// jQuery.noConflict();
(function($) {
    $(document).ready(function() {
        $('html').removeClass('no-js');
        $('[data-toggle="tooltip"]').tooltip();
        
        //initCookieConsent();
        initCssuaMonitor();
        initImageLazyLoad();
        initSlider();
    });
})(jQuery);
