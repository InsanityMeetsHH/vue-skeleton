/*global cssua*/
const cssuaMonitor = {
    methods: {
        /**
         * Init cssua monitor
         * 
         * @returns {undefined}
         */
        initCssuaMonitor: function() {
            (function($) {
                if ($('.cssua-monitor').text() === '') {
                    $.each(cssua.ua, function(key, value) {
                        $('.cssua-monitor').append(key + ': ' + value + '<br>');
                    });
                    $('.cssua-monitor').append('html tag classes: ' + $('html').attr('class') + '<br>');
                }
            })(jQuery);
        }
    }
};

export default cssuaMonitor;
