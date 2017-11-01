module.exports = function (grunt, config) {
    var path = 'http://' + grunt.option('host') + ':' + grunt.option('port') + '/<%= bundle.id %>/index.html';

    if (config.bundle.id === grunt.option('STANDARDLIB_BUNDLE_ID') && grunt.option('application-id')) {
        path += '#/' + grunt.option('application-id');
    }

    return {
        app: {
            path: path
        }
    };
};