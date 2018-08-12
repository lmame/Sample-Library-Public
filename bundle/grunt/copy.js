module.exports = function (grunt, config) {
    return {
        app: {
            expand: true,
            flatten: false,
            cwd: '<%= bundle.src %>',
            src: [
                'index.html',
                'error.html',
                'rsso-auth-error.html',
                'bootstrap.js'
            ],
            dest: '<%= bundle.target %>',
            options: {
                process: function fileProcess(content, srcpath) {
                    return grunt.template.process(content);
                }
            }
        }
    };
};