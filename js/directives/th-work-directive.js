(function(){
	var app = angular.module('thWorkDirective', []);

	app.directive('thWork', function(){
		return {
			restrict: 'E',
			templateUrl: './js/templates/th-work-template.html',
			controller: 'WorkController',
      		controllerAs: 'wrkCtrl'
		};
	});

	app.controller('WorkController', function() {
		this.tab = 1;

        this.isSet = function(checkTab) {
        	return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
        	this.tab = activeTab;
        };
	});
})();