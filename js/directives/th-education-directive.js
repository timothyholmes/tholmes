(function(){
	var app = angular.module('thEducationDirective', []);

	app.directive('thEducation', function(){
		return {
			restrict: 'E',
			templateUrl: './js/templates/th-education-template.html',
			controller: 'EducationController',
      		controllerAs: 'edctnCtrl'
		};
	});

	app.controller('EducationController', function() {

	});
})();