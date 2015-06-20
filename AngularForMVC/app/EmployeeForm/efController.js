angularFormsApp.controller('efController',
    ["$scope", "$window", "$stateParams", "$modalInstance", "dataService", "id",
  function efController($scope, $window, $stateParams, $modalInstance, dataService, id) {

      if (id != -1)
          $scope.employee = dataService.getEmployee(id);
      else
          $scope.employee = dataService.getEmployee(-1);

      $scope.editableEmployee = angular.copy($scope.employee);

      $scope.departments = [
        "Engineering",
        "Marketing",
        "Finance",
        "Administration"
      ];

      $scope.shouldShowFullName = function () {
          return true;
      };

      $scope.programmingLanguages = [
        "C",
        "C++",
        "C#",
        "JavaScript",
        "Java",
        "Pascal",
        "Perl",
        "PHP"
      ];

      $scope.hoveringOver = function (value) {
          $scope.overStar = value;
          $scope.percent = 100 * (value / 10);
      }

      $scope.submitForm = function () {

          $scope.submitted = true;

          if ($scope.employeeForm.$invalid)
              return;

          if ($scope.editableEmployee.id == -1) {
              dataService.insertEmployee($scope.editableEmployee).then(
                  function (results) {
                      $scope.employee = angular.copy($scope.editableEmployee);
                      $scope.employee.id = results.data.id;
                      $modalInstance.close();
                  },
                  function (results) {
                      $scope.hasFormError = true;
                      $scope.formErrors = results.statusText;
                  });
          } else {
              dataService.updateEmployee($scope.editableEmployee).then(
                  function (results) {
                      $scope.employee = angular.copy($scope.editableEmployee);
                      $modalInstance.close();
                  },
                  function (results) {
                      $scope.hasFormError = true;
                      $scope.formErrors = results.statusText;
                  });
          }
      };

      $scope.cancelForm = function () {
          $modalInstance.dismiss();
      };

      $scope.resetForm = function () {
          $scope.editableEmployee = angular.copy($scope.employee);

          $scope.submitted = false;

          $scope.employeeForm.$setUntouched();
      };
  }]);