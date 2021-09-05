

module.exports = {
    /**
     * for all requests use json headers
     */
     plainHeader: function () {
        var headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "charset": "UTF-8"
        };

        return headers;
    },
}