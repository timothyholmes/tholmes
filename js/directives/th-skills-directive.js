(function(){
	var app = angular.module('thSkillsDirective', []);

	app.directive('thSkills', function(){
		return {
			restrict: 'E',
			templateUrl: './js/templates/th-skills-template.html',
			controller: 'SkillsController',
      		controllerAs: 'skllsCtrl'
		};
	});

	app.controller('SkillsController', function() {
		var container = this;

		container.languages = [
		  {
		  	"name": "JavaScript",
		    "url": "./imgs/icons/javascript.svg",
		    "descrip": "Live Data"
		  },
		  {
		  	"name": "PHP",
		    "url": "./imgs/icons/php.svg",
		    "descrip": "Quering DB"
		  },
		  {
		  	"name": "Python",
		    "url": "./imgs/icons/python.svg",
		    "descrip": "Parsing / TCP"
		  },
		  {
		  	"name": "Java",
		    "url": "./imgs/icons/java.svg",
		    "descrip": "Senior Project"
		  }
		]

		container.frameworks = [
		  {
		  	"name": "AngularJS",
		    "url": "./imgs/icons/angular.svg",
		    "descrip": "Live App"
		  },
		  {
		  	"name": "HTML5",
		    "url": "./imgs/icons/html5_2.svg",
		    "descrip": "HTML"
		  },
		  {
		  	"name": "CSS3",
		    "url": "./imgs/icons/css.svg",
		    "descrip": "CSS"
		  },
		  {
		  	"name": "Bootstrap",
		    "url": "./imgs/icons/bootstrap.svg",
		    "descrip": "All StarChase"
		  },
		  {
		  	"name": "GoogleMaps",
		    "url": "./imgs/icons/map1.png",
		    "descrip": "Mapping"
		  }
		]

		container.tools = [
		  {
		  	"name": "GitLab",
		    "url": "./imgs/icons/gitlab.png",
		    "descrip": "Collab"
		  },
		  {
		  	"name": "Sublime",
		    "url": "./imgs/icons/Sublime_Text_Logo.png",
		    "descrip": "Sublime"
		  },
		  {
		  	"name": "MySql",
		    "url": "./imgs/icons/sql.svg",
		    "descrip": "Database!!"
		  }
		]

		container.tab = 1;

        container.isSet = function(checkTab) {
        	return container.tab === checkTab;
        };

        container.setTab = function(activeTab) {
        	container.tab = activeTab;
        };
	});
})();