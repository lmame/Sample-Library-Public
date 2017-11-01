module.exports = function (karmaConfig) {
    var path = require('path'),
        _ = require(path.join(process.cwd(), 'node_modules/lodash')),
        grunt = require(path.join(process.cwd(), 'node_modules/grunt')),
        rxEnvironment = require('./grunt/rxEnvironment.js'),
        bundleConfPath = './bundle.conf.json';

    grunt.file.setBase(process.cwd());

    var pkg = grunt.file.readJSON('./package.json');

    _.merge(pkg.config, grunt.file.readJSON(bundleConfPath));

    pkg.config.bundle.resources = pkg.config.bundle.resources.map(function (resource) {
        var expandedResource = rxEnvironment.processConfigValue(resource, process.env);

        return _.merge(grunt.file.readJSON(path.join(expandedResource, bundleConfPath)), {dir: expandedResource});
    });

    _.forEach(pkg.config, function (value, key) {
        var expandedValue = pkg.config[key] = rxEnvironment.processConfigValue(value, process.env);

        grunt.config(key, expandedValue);
    });

    var standardlibProxyPath = '/' + path.join('base', pkg.config.standardlibTarget).split(path.sep).join('/').replace(/\.\.\//g, '') + '/';

    var allFiles = grunt.file.expand(grunt.config.process([]
        .concat([
            '<%= standardlibTarget %>/lib/classlist/classlist.js',
            '<%= standardlibTarget %>/resources/css/standardlib-deps.min.css'
        ])
        .concat(Array.prototype.concat.apply([], pkg.config.bundle.resources.map(function (resource) {
            return resource.bundle.packages.lib.scripts.map(function (file) {
                return path.join(resource.dir, resource.bundle.target, file) + '.js';
            });
        })))
        .concat([
            '<%= standardlibTarget %>/lib/angular-1.4.7/angular-mocks.js',
            '<%= standardlibTarget %>/lib/jquery-simulate-1.0.1/jquery.simulate.js',
            '<%= standardlibTarget %>/lib/jasmine-jquery-2.0.5/jasmine-jquery.js',
            '<%= standardlibTarget %>/resources/css/standardlib.css',
            '<%= standardlibTarget %>/scripts/standardlib.js',
            '<%= bundle.target %>/resources/css/<%= bundle.id %>.css'
        ])
        .concat(pkg.config.bundle.packages.app.scripts.map(function (file) {
            var prefix = '<%= bundle.src %>/';

            if (file[0] == '!') {
                file = file.replace('!', '');
                prefix = '!' + prefix;
            }

            return prefix + file + '.js';
        }))
        .concat([
            '<%= bundle.target %>/scripts/**/<%= bundle.id %>-templates.min.js',
            '<%= standardlibTarget %>/**/*.+(jpg|svg|ttf|png|woff)',
            '<%= bundle.src %>/**/*.+(jpg|svg|ttf|png|woff)',
            '<%= bundle.src %>/scripts/**/*.html',
            '<%= standardlibTarget %>/scripts/**/*.html',
            '<%= bundle.src %>/scripts/**/*.test.js'
        ])
    )).map(function (filepath) {
        var extname = path.extname(filepath);

        if (['.js', '.html', '.css'].indexOf(extname) > -1) {
            return filepath;
        } else {
            return {
                included: false,
                served: true,
                pattern: filepath
            };
        }
    });

    karmaConfig.set(grunt.config.process({
        files: allFiles,

        preprocessors: _.mapKeys({
            '<%= bundle.src %>/scripts/**/!(*.test).js': ['coverage'],
            '<%= bundle.src %>/scripts/**/*.html': ['ng-html2js']
        }, function (value, key) {
            return grunt.config.process(key);
        }),

        proxies: _.mapKeys({
            // Proxies /standardlib to fix unit test warnings due to invalid paths to standardlib static resources
            '/standardlib/resources/': standardlibProxyPath + 'resources/',
            '/standardlib/lib/': standardlibProxyPath + 'lib/'
        }, function (value, key) {
            return grunt.config.process(key);
        }),

        ngHtml2JsPreprocessor: {
            stripPrefix: pkg.config.bundle.src.replace(/^\.\//, '') + '/',
            moduleName: 'templates'
        },

        frameworks: ['jasmine'],

        plugins: [
            'karma-jasmine',
            'karma-firefox-launcher',
            'karma-chrome-launcher',
            'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-ng-html2js-preprocessor'
        ],

        logLevel: 'WARN',

        reporters: [
            'dots',
            'coverage'
        ],

        coverageReporter: {
            type: 'html',
            dir: path.join(process.cwd(), 'target/coverage/')
        },

        port: 9090,
        urlRoot: '/',
        autoWatch: false,
        browsers: ['PhantomJS'],

        captureTimeout: 90000,
        browserDisconnectTimeout: 10000,
        browserDisconnectTolerance: 3,
        browserNoActivityTimeout: 120000,

        singleRun: true,
        background: false,
        reportSlowerThan: 0
    }));
};