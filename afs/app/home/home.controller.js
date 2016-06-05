(function() {
    'use strict';

    angular
        .module('afs')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$state'];

    function HomeController ($scope, $state) {
        var vm = this;
    }
})();
