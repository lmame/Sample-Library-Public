module.exports = function (grunt, config) {
    var chunks = config.bundle.options && config.bundle.options['test-chunks'] || [{
            name: 'unit'
        }];

    return chunks.reduce(function (acc, chunk) {
        acc[chunk.name] = {
            configFile: 'karma.conf.js',
            options: {
                filePath: chunk.path,
                name: chunk.name
            }
        };

        return acc;
    }, {});
};