var angularFormsApp = angular.module('angularFormsApp', ['ui.router', 'ui.bootstrap']);

angularFormsApp.config(
    ["$stateProvider", "$urlRouterProvider", "$locationProvider",
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
          .state('home', {
              url: '/home',
              templateUrl: '../app/home.html',
              controller: 'homeController'
          });
    }]);

angularFormsApp.controller('homeController',
    ["$scope", "$modal", "dataService",
    function ($scope, $modal, dataService) {

        dataService.getEmployees().then(
            function (results) {
                var data = results.data;
                alert("Success!");
            },
            function (results) {
                var data = results.data;
                alert("Error");
            }
        );

        $scope.openEmployeeModal = function (id) {
            $modal.open({
                templateUrl: '../app/EmployeeForm/efTemplate.html',
                controller: 'efController',
                resolve: {
                    id: function () {
                        return id;
                    }
                }
            });
        };
    }]);