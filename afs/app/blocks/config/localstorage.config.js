(function() {
    'use strict';

    angular
        .module('afs')
        .config(localStorageConfig);

    localStorageConfig.$inject = ['$localStorageProvider'];

    function localStorageConfig($localStorageProvider) {
        $localStorageProvider.setKeyPrefix('afs-');
    }
})();
