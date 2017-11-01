module.exports = function (grunt, options) {
    grunt.registerTask('combineCodeCoverageReports', 'Combine code coverage reports generated during unit test execution', function () {
        var path = require('path'),
            istanbulCombine = require(path.join(process.cwd(), 'node_modules/istanbul-combine'));

        istanbulCombine.sync(this.options());
    });

    return {
        options: {
            dir: 'target/coverage/PhantomJS',
            pattern: 'target/coverage/PhantomJS/*.json',
            print: 'summary',
            reporters: {
                html: {}
            }
        }
    };
};