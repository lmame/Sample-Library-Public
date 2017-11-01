module.exports = function (grunt, config) {
    return {
        options: {
            sourceMap: !!grunt.option('sourcemap'),
        },
        app: {
            src: '<%= bundle.target %>/scripts/<%= bundle.id %>.js',
            dest: '<%= bundle.target %>/scripts/<%= bundle.id %>.js'
        }
    };
};