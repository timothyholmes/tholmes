(function(){
	var app = angular.module('content-directives', []);

	app.directive("thBio", function(){
		return {
			restrict: 'E',
			templateUrl: "./scripts/templates/bio.html"
		};
	});
})();