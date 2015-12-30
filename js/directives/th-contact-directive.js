(function(){
	var app = angular.module('thContactDirective', []);

	app.directive('thContact', function(){
		return {
			restrict: 'E',
			templateUrl: './js/templates/th-contact-template.html',
			controller: 'FormController',
      		controllerAs: 'cntCtrl'
		};
	});

	app.controller('FormController', ['$scope', '$http', function($scope, $http) {

		var container = this;

		  // creating a blank object to hold our form information.
  //$scope will allow this to pass between controller and view
  $scope.formData = {};
  $scope.error = false;
  // submission message doesn't show when page loads
  $scope.submission = false;
  // Updated code thanks to Yotam
  var param = function(data) {
        var returnString = '';
        for (d in data){
            if (data.hasOwnProperty(d))
               returnString += d + '=' + data[d] + '&';
        }
        // Remove last ampersand and return
        return returnString.slice( 0, returnString.length - 1 );
  };
  $scope.submitForm = function() {
    $http({
    method : 'POST',
    url : './php/email.php',
    data : param($scope.formData), // pass in data as strings
    headers : { 'Content-Type': 'application/x-www-form-urlencoded' } // set the headers so angular passing info as form data (not request payload)
  })
    .success(function(data) {
      if (!data.success) {
       // if not successful, bind errors to error variables
       $scope.errorName = data.errors.name;
       $scope.errorEmail = data.errors.email;
       $scope.errorTextarea = data.errors.message;
       $scope.submissionMessage = data.messageError;
       $scope.submission = true; //shows the error message
       $scope.error = true;
       $scope.madeIt = false;
      } else {
      // if successful, bind success message to message
       $scope.submissionMessage = data.messageSuccess;
       $scope.formData = {}; // form fields are emptied with this line
       $scope.submission = true; //shows the success message
       $scope.errorName = false;
       $scope.errorEmail = false;
       $scope.errorTextarea = false;
       $scope.error = false;
       $scope.madeIt = true;
      }
     });
   };

	}]);
})();