var myApp = angular.module('myApp', ['ionic','app-controllers']);

myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state("tabs",{
		url: '/tabs',
		templateUrl:'views/tabs.html',
		abstract: true //这个模板作为app的基石
	})
	.state("tabs.main",{
		url:"/main",
		views:{
			'main-tab':{
				templateUrl: "views/main-view/main.html",
				controller:"main-controller"
			}
		}	
	})
	.state("tabs.contact",{
		url:"/contact",
		views:{
			'contact-tab':{
				templateUrl: "views/contact-view/contact-tab.html"
				//controller:"maincontroller"
			}
		}	
	})
	.state("tabs.discover",{
		url:"/discover",
		views:{
			'discover-tab':{
				templateUrl: "views/discover-view/discover-tab.html"
				//controller:"maincontroller"
			}
		}	
	})
	.state("tabs.me",{
		url:"/me",
		views:{
			'me-tab':{
				templateUrl: "views/me-view/me-tab.html"
				//controller:"maincontroller"
			}
		}	
	})
	.state("tabs.addFirend",{
		url:"/addFirend",
		views:{
			'main-tab':{
				templateUrl: "views/main-view/add-firend.html",
				controller:"add-firend"
			}
		}	
	})
	.state("tabs.saoFirend",{
		url:"/saoFirend/:firendId",
		views:{
			'main-tab':{
				templateUrl: "views/main-view/sao-firend.html",
				controller:"sao-firend"
			}
		}	
	})
	
	$urlRouterProvider.otherwise("/tabs/main")
	
}])





