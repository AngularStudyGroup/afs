// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

var sourcePreprocessors = ['coverage'];

function isDebug() {
    return process.argv.indexOf('--debug') >= 0;
}

if (isDebug()) {
    // Disable JS minification if Karma is run with debug option.
    sourcePreprocessors = [];
}

module.exports = function (config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: 'afs/test/'.replace(/[^/]+/g, '..'),

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            // bower:js
            'afs/bower_components/jquery/dist/jquery.js',
            'afs/bower_components/json3/lib/json3.js',
            'afs/bower_components/messageformat/messageformat.js',
            'afs/bower_components/angular/angular.js',
            'afs/bower_components/angular-loader/angular-loader.js',
            'afs/bower_components/angular-route/angular-route.js',
            'afs/bower_components/angular-aria/angular-aria.js',
            'afs/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'afs/bower_components/angular-cache-buster/angular-cache-buster.js',
            'afs/bower_components/angular-cookies/angular-cookies.js',
            'afs/bower_components/ngstorage/ngStorage.js',
            'afs/bower_components/angular-loading-bar/build/loading-bar.js',
            'afs/bower_components/angular-resource/angular-resource.js',
            'afs/bower_components/angular-sanitize/angular-sanitize.js',
            'afs/bower_components/angular-ui-router/release/angular-ui-router.js',
            'afs/bower_components/bootstrap-ui-datetime-picker/dist/datetime-picker.js',
            'afs/bower_components/ng-file-upload/ng-file-upload.js',
            'afs/bower_components/ngInfiniteScroll/build/ng-infinite-scroll.js',
            'afs/bower_components/angular-mocks/angular-mocks.js',
            // end:bower
            'afs/app/app.module.js',
            'afs/app/app.constants.js',
            'afs/app/app.js',
            'afs/app/**/*.+(js|html)',
            'afs/test/spec/helpers/module.js',
            'afs/test/spec/helpers/httpBackend.js',
            'afs/test/**/!(karma.conf).js'
        ],

        // list of files / patterns to exclude
        exclude: [],

        preprocessors: {
            './**/*.js': sourcePreprocessors
        },

        reporters: ['dots', 'coverage', 'progress'],

        coverageReporter: {
            dir: 'www/test-results/coverage',
            reporters: [
                {type: 'lcov', subdir: 'report-lcov'}
            ]
        },

        // web server port
        port: 9876,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        // to avoid DISCONNECTED messages when connecting to slow virtual machines
        browserDisconnectTimeout: 10000, // default 2000
        browserDisconnectTolerance: 1, // default 0
        browserNoActivityTimeout: 4 * 60 * 1000 //default 10000
    });
};
