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
		    "time": "8 months",
		    "descrip": "JavaScript is what I've had the most consistent exposure to professionally, as well as where I like to spend my time. at StarChase, most of my projects have used JavaScript. For the email processor I used JavaScript to manipulate data before sending it to the back end. I've exclusively used JavaScript to interact with the Google Maps API.",
		    "projects": [
		    	{
		    		"name": "StarChase Email Processor"
		    	},
		    	{
		    		"name": "StarChase R&D"
		    	},
		    	{
		    		"name": "STEM Website"
		    	},
		    	{
		    		"name": "Personal Website"
		    	}
		    ]
		  },
		  {
		  	"id": "2",
		  	"name": "PHP",
		    "url": "./imgs/icons/php.svg",
		    "time": "1 year",
		    "descrip": "All of the web applications I've worked on at StarChase have had to extensively interact with a database. PHP came into play here, and I almost exclusively used it to query the database, and serve the data to the front end as an XML or JSON document. For the StarChase task managaer, I used PHP to send out various email notifications to users.",
		    "projects": [
		    	{
		    		"name": "StarChase Email Processor"
		    	},
		    	{
		    		"name": "StarChase Task Manager"
		    	},
		    	{
		    		"name": "StarChase R&D"
		    	},
		    	{
		    		"name": "STEM Website"
		    	},
		    	{
		    		"name": "Personal Website"
		    	}
		    ]
		  },
		  {
		  	"id": "3",
		  	"name": "Python",
		    "url": "./imgs/icons/python.svg",
		    "time": "6 months",
		    "descrip": "While at StarChase, I've had to develop a couple back end scripts to process data, and I've used python for the most of these implementations. I developed one script that pulls mail from an exchange account, parses that data based on some pre-defined formats, and then inserts the data into a database. I've worked on another script that listens to a range of sockets and establishes a connection with a device that makes contact using TCP.",
		    "projects": [
		    	{
		    		"name": "StarChase Email Processor"
		    	},
		    	{
		    		"name": "StarChase Socket Listener"
		    	}
		    ]
		  },
		  {
		  	"id": "4",
		  	"name": "Java",
		    "url": "./imgs/icons/java.svg",
		    "time": "1 year",
		    "descrip": "I used Java in a few different courses at ODU, but really had an oppurtunity to get my hand dirty with it during my senior project. I worked on a team of students that developed a program that could display and manipulate genome files. We extensively utilized the BioJava API in order to develop this program. My contribution was implementing the file exporting, and change saving functionality.",
		    "projects": [
		    	{
		    		"name": "Unverified Join Viewer"
		    	},
		    	{
		    		"name": "Virtual File System Simulator"
		    	}
		    ]
		  }
		]

		container.frameworks = [
		  {
		  	"id": 1,
		  	"name": "HTML5/CSS3",
		    "url": "./imgs/icons/html_this.png",
		    "time": "5 years",
		    "descrip": "HTML/CSS is what got me thinking about programming. Truly, I've been tinkering with these frameworks for the majority of my life. I spent a lot of time as a kid buildiing themes for social networks (MySpace and Tumblr.) Professionally, every computer related job I've encountered has required editing webpages. I've played around with new features introduced in HTML5/CSS3, but haven't interacted with them enough to know how to use them without reference.",
		    "projects": [
		    	{
		    		"name": "StarChase Email Processor"
		    	},
		    	{
		    		"name": "StarChase Task Manager"
		    	},
		    	{
		    		"name": "StarChase R&D"
		    	},
		    	{
		    		"name": "Personal Website"
		    	}
		    ]
		  },
		  {
		  	"id": 1,
		  	"name": "HTML5/CSS3",
		    "url": "./imgs/icons/css.svg",
		    "time": "5 years",
		    "descrip": "HTML/CSS is what got me thinking about programming. Truly, I've been tinkering with these frameworks for the majority of my life. I spent a lot of time as a kid buildiing themes for social networks (MySpace and Tumblr.) Professionally, every computer related job I've encountered has required editing webpages. I've played around with new features introduced in HTML5/CSS3, but haven't interacted with them enough to know how to use them without reference.",
		    "projects": [
		    	{
		    		"name": "StarChase Email Processor"
		    	},
		    	{
		    		"name": "StarChase Task Manager"
		    	},
		    	{
		    		"name": "StarChase R&D"
		    	},
		    	{
		    		"name": "Personal Website"
		    	}
		    ]
		  },
		  {
		  	"id": 2,
		  	"name": "Bootstrap",
		    "url": "./imgs/icons/bootstrap.svg",
		    "time": "8 months",
		    "descrip": "In our modern world, responsive design is critical. Bootstrap makes designing web applications that adjust to any screen size easy. My mentor/supervisor at StarChase was keen that everything we built needed to be built with Bootstrap. ",
		    "projects": [
		    	{
		    		"name": "StarChase Email Processor"
		    	},
		    	{
		    		"name": "StarChase Task Manager"
		    	},
		    	{
		    		"name": "StarChase R&D"
		    	},
		    	{
		    		"name": "Personal Website"
		    	}
		    ]
		  },
		  {
		  	"id": 3,
		  	"name": "AngularJS",
		    "url": "./imgs/icons/angular.svg",
		    "time": "2 months",
		    "descrip": "AngularJS is my favorite framework of recent memory. I've used it for two of my three major projects at StarChase, and it has allowed me to create web pages that truly behave like applications. I feel comfortable using Angular, but I am still pretty new to it. I keep the API documentation open while I'm developing. This website was built with Angluar!",
		    "projects": [
		    	{
		    		"name": "StarChase Email Processor"
		    	},
		    	{
		    		"name": "StarChase Task Manager"
		    	},
		    	{
		    		"name": "StarChase R&D"
		    	},
		    	{
		    		"name": "Personal Website"
		    	}
		    ]
		  },
		  {
		  	"id": 4,
		  	"name": "Google Maps API V3",
		    "url": "./imgs/icons/map1.png",
		    "time": "8 months",
		    "descrip": "Google offers an service with their mapping API. I've been in an out of this API, and the functionality they offer is extremely impressive. NDAs keep me from being too specific about what I've done with this API, but I can demonstrate general knowledge about how it works.",
		    "projects": [
		    	{
		    		"name": "StarChase R&D"
		    	}
		    ]
		  }
		]

		container.tools = [
		  {
		  	"id": 1,
		  	"name": "GitLab CE / Git",
		    "url": "./imgs/icons/gitlab.png",
		    "time": "1.5 years",
		    "descrip": "While I was at ODU, one of my professors told me that good programming \"doesn't happen in a vacuum.\" During my academic and professional career, I've taken this philosophy to heart. Collaboration is crucial when developing as a team. Any development I do, I keep in a git repository. While working at StarChase, I initialized and maintained a Gitlab CE server so our team could properly collaborate."
		  },
		  {
		  	"id": 2,
		  	"name": "Sublime",
		    "time": "1 year",
		    "url": "./imgs/icons/Sublime_Text_Logo.png",
		    "descrip": "Sublime Text is quick, responsive, and supported by a large development community that enhances the functionality beyond imagination. The current plugins I use with Sublime are: Package Control, Sublime SFTP, and DocBlockr."
		  },
		  {
		  	"id": 3,
		  	"name": "MySql",
		    "time": "1 year",
		    "url": "./imgs/icons/sql.svg",
		    "descrip": "While at ODU, one of my electives was in an entry level relational database course. There I learned how to query, how joins work, what schemas look like, primary/foreign keys, etc. At StarChase, I had the oppurtunity to get some hands on experience with SQL. In this position I've had experience with integrating databases into a web application (both entering data and retrieving data), defining database and table characteristics, and accessing remote databases. I've interacted with them via the terminal, and PHPmyAdmin.",
		    "projects": [
		    	{
		    		"name": "StarChase Email Processor"
		    	},
		    	{
		    		"name": "StarChase Task Manager"
		    	},
		    	{
		    		"name": "StarChase R&D"
		    	}
		    ]
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