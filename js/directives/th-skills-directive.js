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

		container.activeEle = 0;
		container.tab = 1;
		container.detailView = [];

		container.languages = [
		  {
		  	"id": "1",
		  	"name": "JavaScript",
		    "url": "./imgs/icons/javascript.svg",
		    "time": "1.5 years",
		    "rank": 7,
		    "descrip": "Live Data"
		  },
		  {
		  	"id": "2",
		  	"name": "PHP",
		    "url": "./imgs/icons/php.svg",
		    "time": "1.5 years",
		    "rank": 7,
		    "descrip": "Quering DB"
		  },
		  {
		  	"id": "3",
		  	"name": "Python",
		    "url": "./imgs/icons/python.svg",
		    "time": "1.5 years",
		    "rank": 7,
		    "descrip": "Parsing / TCP"
		  },
		  {
		  	"id": "4",
		  	"name": "Java",
		    "url": "./imgs/icons/java.svg",
		    "time": "1.5 years",
		    "rank": 7,
		    "descrip": "Senior Project"
		  }
		]

		container.frameworks = [
		  {
		  	"id": 1,
		  	"name": "AngularJS",
		    "url": "./imgs/icons/angular.svg",
		    "time": "1.5 years",
		    "rank": 7,
		    "descrip": "Live App"
		  },
		  {
		  	"id": 2,
		  	"name": "HTML5/CSS3",
		    "url": "./imgs/icons/html5_2.svg",
		    "time": "5 years",
		    "rank": 6,
		    "descrip": "HTML/CSS is what got me thinking about programming. Truly, I've been tinkering with these frameworks for the majority of my life. I spent a lot of time as a kid buildiing themes for social networks (MySpace and Tumblr.) Professionally, every computer related job I've encountered as required editing webpages. I played around with new features introduced in HTML5/CSS3, but haven't interacted with them enough to know how to use them without reference."
		  },
		  {
		  	"id": 2,
		  	"name": "HTML5/CSS3",
		    "url": "./imgs/icons/css.svg",
		    "time": "1.5 years",
		    "rank": 3,
		    "descrip": ""
		  },
		  {
		  	"id": 3,
		  	"name": "Bootstrap",
		    "url": "./imgs/icons/bootstrap.svg",
		    "time": "8 months",
		    "rank": 5,
		    "descrip": "In our modern world, responsive design is critical. Bootstrap makes designing web applications that adjust to any screen size easy. My mentor/supervisor at StarChase was keen that everything we built needed to be built with Bootstrap. "
		  },
		  {
		  	"id": 4,
		  	"name": "Google Maps API V3",
		    "url": "./imgs/icons/map1.png",
		    "time": "8 months",
		    "rank": 6,
		    "descrip": "Google offers an service with their mapping API. I've been in an out of this API, and the functionality they offer is extremely impressive. NDAs keep me from being too specific about what I've done with this API. Here's a small map of some resturants I recommend:"
		  }
		]

		container.tools = [
		  {
		  	"id": 1,
		  	"name": "GitLab CE / Git",
		    "url": "./imgs/icons/gitlab.png",
		    "time": "1.5 years",
		    "rank": 7,
		    "descrip": "While I was at ODU, one of my professors told me that good programming \"doesn't happen in a vacuum.\" During my academic and professional career, I've taken this philosophy to heart. Collaboration is crucial when developing as a team. Any development I do, I keep in a git repository. While working at StarChase, I initialized and maintained a Gitlab CE server so our team could properly collaborate."
		  },
		  {
		  	"id": 2,
		  	"name": "Sublime",
		    "time": "1 year",
		    "rank": 7,
		    "url": "./imgs/icons/Sublime_Text_Logo.png",
		    "descrip": "Sublime Text is quick, responsive, and supported by a large development community that enhances the functionality beyond imagination. The current plugins I use with Sublime are: Package Control, Sublime SFTP, and DocBlockr."
		  },
		  {
		  	"id": 3,
		  	"name": "MySql",
		    "time": "1 year",
		    "rank": 4,
		    "url": "./imgs/icons/sql.svg",
		    "descrip": "While at ODU, one of my electives was in an entry level relational database course. There I learned how to query, how joins work, what schemas look like, primary/foreign keys, etc. At StarChase, I had the oppurtunity to get some hands on experience with SQL. In this position I've had experience with integrating databases into a web application (both entering data and retrieving data), defining database and table characteristics, and accessing remote databases. I've interacted with them via the terminal, and PHPmyAdmin."
		  }
		]

        container.isSet = function(checkTab) {
        	return container.tab === checkTab;
        };

        container.setTab = function(activeTab) {
        	container.tab = activeTab;
        	container.activeEle = 0;
        };

        container.setActiveEle = function(setId) {
        	container.activeEle = setId;
        	displayTab(container.tab, container.activeEle);
        }

        container.isActiveEle = function(checkId) {
        	return container.activeEle == checkId;
        }

       	var displayTab = function(tab, id) {
       		container.detailView = [];
        	if (tab == 1) {
        		for(var i = 0; i < container.languages.length; i++) {
        			if(id == container.languages[i].id) {
        				container.detailView.push(container.languages[i]);
        			}
        		}
        	} else if (tab == 2) {
        		for(var i = 0; i < container.frameworks.length; i++) {
        			if(id == container.frameworks[i].id) {
        				container.detailView.push(container.frameworks[i]);
        			}
        		}
        	} else if (tab == 3) {
        		for(var i = 0; i < container.tools.length; i++) {
        			if(id == container.tools[i].id) {
        				container.detailView.push(container.tools[i]);
        			}
        		}
        	} else {
        		console.log("Incorrect tab val");
        	}
        }
	});
})();