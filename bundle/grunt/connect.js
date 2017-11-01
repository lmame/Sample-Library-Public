module.exports = function (grunt, config) {
    var path = require('path'),
        serveStatic = require(path.join(process.cwd(), 'node_modules/serve-static'));

    return {
        app: {
            proxies: [
                {
                    context: '/api',
                    host: grunt.option('api-host'),
                    port: grunt.option('api-port'),
                    https: grunt.option('api-https')
                }, {
                    context: '/innovationsuite',
                    host: grunt.option('host'),
                    port: grunt.option('port'),
                    rewrite: {
                        '^/innovationsuite': '/standardlib'
                    }
                }
            ],
            options: {
                hostname: grunt.option('host'),
                port: grunt.option('port'),
                middleware: function (connect, options, middlewares) {
                    return grunt.config.process([
                        // Path concated with process working directory as workaround to grunt-cinnect-proxy bug
                        require(path.join(process.cwd(), 'node_modules/grunt-connect-proxy2/lib/utils')).proxyRequest,
                        require('connect-livereload')({port: parseInt(grunt.option('livereload-port'))})
                    ])
                        .concat(config.bundle.resources.map(function (dep) {
                            return ['/' + dep.bundle.id, serveStatic(path.join(dep.dir, dep.bundle.target))]
                        }))
                        .concat(config.bundle.resources.map(function (dep) {
                            return ['/' + dep.bundle.id, serveStatic(path.join(dep.dir, dep.bundle.src))]
                        }))
                        .concat(middlewares);
                }
            }
        }
    }
};