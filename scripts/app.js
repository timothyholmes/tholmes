(function(){
	var app = angular.module('personalSite', []);

	app.controller('ContentController', ['$http', function($http){
    	var body = this;
    	body.components = [];
    
    	$http.get('./docs/data.json').success(function(data){
      		body.components = data;
    	});
  	}] );
})();