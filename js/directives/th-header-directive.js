(function(){
	var app = angular.module('thHeaderDirective', []);

	app.directive('thHeader', function(){
		return {
			restrict: 'E',
			templateUrl: './js/templates/th-header-template.html',
			controller: 'HeaderController',
      		controllerAs: 'hdrCtrl'
		};
	});

	app.controller('HeaderController', function() {

	});
})();