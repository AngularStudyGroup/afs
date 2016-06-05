'use strict';

var fs = require('fs');
var packageInfo = require("../package.json")

module.exports = {
    endsWith: endsWith,
    parseVersion: parseVersion,
    isLintFixed: isLintFixed
}

function endsWith(str, suffix) {
    return str.indexOf('/', str.length - suffix.length) !== -1;
};

function parseVersion() {
    return packageInfo.version;
}

function isLintFixed(file) {
    // Has ESLint fixed the file contents?
    return file.eslint !== null && file.eslint.fixed;
}
