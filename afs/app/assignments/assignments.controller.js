(function () {
    'use strict';

    angular
        .module('afs')
        .controller('AssignmentController', AssignmentController);

    AssignmentController.$inject = ['AssignmentService', '$scope', '$state'];

    function AssignmentController(AssignmentService, $scope, $state) {
        var vm = this;
        vm.refresh = refresh;
        vm.refresh();

        function refresh() {
            AssignmentService.readAssignments().then(function (response) {
                vm.assignmentData = response;
            });
        }
    }
})();
