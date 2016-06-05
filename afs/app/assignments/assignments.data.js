(function () {
    'use strict';

    angular
        .module('afs')
        .factory('AssignmentService', AssignmentService);

    AssignmentService.$inject = ['$rootScope', '$http'];

    function AssignmentService($rootScope, $http) {
        var service = {
            readAssignments: readAssignments
        }

        return service;

        function readAssignments() {
            return $http.get('assignments.json').then(function (response) {
                return response.data;
            });
        }
    }
})();
