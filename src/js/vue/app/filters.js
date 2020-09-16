const filters = {
    /**
     * Returns formated timestamp or "-"
     * 
     * @param {string|integer} timestamp in seconds
     * @param {string} format see https://momentjs.com/docs/#/parsing/
     * @returns {string}
     */
    formatDateTime: function(timestamp, format) {
        if (timestamp) {
            return moment(parseInt(timestamp) * 1000).format(format);
        } else {
            return '-';
        }
    },
    /**
     * Returns formated duration in "HH:MM:SS h"
     * 
     * @param {string|integer} timestamp in seconds
     * @param {string} format see https://momentjs.com/docs/#/durations/
     * @returns {string}
     */
    formatDuration: function(duration) {
        if (duration) {
            const durationObject = moment.duration(parseInt(duration) * 1000, 'ms');
            const hours = ('0' + durationObject.hours()).substr(-2);
            const minutes = ('0' + durationObject.minutes()).substr(-2);
            const seconds = ('0' + durationObject.seconds()).substr(-2);
            
            return hours + ':' + minutes + ':' + seconds + ' h';
        } else {
            return '-';
        }
    }
};

export default filters;
