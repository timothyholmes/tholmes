(function(){
	var app = angular.module('thAboutDirective', []);

	app.directive('thAbout', function(){
		return {
			restrict: 'E',
			templateUrl: './js/templates/th-about-template.html',
			controller: 'AboutController',
      		controllerAs: 'abtCtrl'
		};
	});

	app.controller('AboutController', function() {

	});
})();