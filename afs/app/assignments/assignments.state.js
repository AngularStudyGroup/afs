(function () {
    'use strict';

    angular
        .module('afs')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('assignments', {
            parent: 'app',
            url: '/assignments',
            data: {
                authorities: [],
                pageTitle: 'Angular.js Assignments'
            },
            views: {
                'content@': {
                    templateUrl: 'app/assignments/assignments.html',
                    controller: 'AssignmentController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
