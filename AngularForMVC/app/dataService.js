angularFormsApp.factory('dataService',
    ["$http",
  function ($http) {

      var getEmployees = function () {
          return $http.get("api/EmployeeWeb/Get");
      };

      var getEmployee = function (id) {
          if (id == 123) {
              return {
                  id: 123,
                  fullName: "Milton Waddams",
                  email: "miltonwiddams@myemailprovider.com",
                  notes: "The ideal employee. Just don't touch his red stapler",
                  department: "Administration",
                  topProgrammingLanguage: "",
                  interviewRating: 8,
                  isUnderNonCompete: false,
                  nonCompeteNotes: "",
                  perkCar: true,
                  perkStock: false,
                  perkSixWeeks: true,
                  payrollType: "none"
              };
          } else if (id == -1) {
              return {
                  id: -1,
                  fullName: "",
                  email: "",
                  notes: "",
                  department: "",
                  topProgrammingLanguage: "",
                  interviewRating: 0,
                  isUnderNonCompete: false,
                  nonCompeteNotes: "",
                  perkCar: false,
                  perkStock: false,
                  perkSixWeeks: false,
                  payrollType: ""
              }
          }
          return undefined;
      };

      var getBlankEmployee = function () {

      }

      var insertEmployee = function (newEmployee) {
          return $http.post("Employee/Create", newEmployee);
      };

      var updateEmployee = function (employee) {
          return $http.post("Employee/Update", employee);
      };

      return {
          insertEmployee: insertEmployee,
          updateEmployee: updateEmployee,
          getEmployee: getEmployee,
          getEmployees: getEmployees
      };
  }]);