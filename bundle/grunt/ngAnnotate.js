module.exports = function (grunt, config) {
    return {
        options: {
            sourceMap: !!grunt.option('sourcemap'),
            singleQuotes: true
        },
        app: {
            expand: true,
            src: '<%= bundle.target %>/scripts/<%= bundle.id %>.js'
        }
    };
};