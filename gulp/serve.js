var gulp = require('gulp'),
    util = require('./utils'),
    url = require('url'),
    browserSync = require('browser-sync');

var config = require('./config');

module.exports = function () {
    var baseUri = config.uri + config.port;

    browserSync({
        open: true,
        port: config.port,
        server: {
            baseDir: config.app,
        }
    });

    gulp.start('watch');
}
