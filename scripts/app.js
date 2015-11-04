(function(){
	var app = angular.module('personalSite', ['content-directives']);

	app.controller('ContentController', ['$http', function($http){
    	var body = this;
    	body.components = [];
    
    	$http.get('./docs/data.json').success(function(data){
      		body.components = data;
    	});
  	}] );
})();