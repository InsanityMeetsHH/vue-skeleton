'use strict';

var loadCss = function(config) {
    var head = document.getElementsByTagName('head')[0];

    if (config.content) {
        var style  = document.createElement('style');
        style.type = 'text/css';

        if (style.styleSheet) {
            style.styleSheet.cssText = config.content;
        } else {
            style.innerHTML = config.content;
        }

        head.appendChild(style);
    } else if (config.url) {
        var link  = document.createElement('link');
        link.href = config.url;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
    }
};
