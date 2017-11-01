module.exports = {
    options: {
        dest: '<%= bundle.docs.target %>',
        styles: ['./grunt/ngdocs.css'],
        template: './grunt/ngdocs.tmpl'
    },

    api: {
        src: '<%= bundle.docs.src %>',
        title: '<%= bundle.docs.title %>'
    }
};