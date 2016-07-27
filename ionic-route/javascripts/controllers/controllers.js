var controllers=angular.module("app-controllers",[]);

controllers.controller("main-controller",["$scope","$location","$ionicTabsDelegate",function($scope,$location,$ionicTabsDelegate){
	console.log("main")
	$scope.addfirend=function(){
		$location.path("tabs/addFirend");
	}
	
}]);
controllers.controller("add-firend",["$scope","$location","$ionicTabsDelegate",function($scope,$location,$ionicTabsDelegate){
	$scope.$on('$ionicView.beforeEnter', function(){
		$ionicTabsDelegate.showBar(false);
	});
	$scope.$on('$ionicView.leave', function(){
		$ionicTabsDelegate.showBar(true);
	});
}]);
controllers.controller("sao-firend",["$scope","$location","$ionicTabsDelegate","$stateParams",function($scope,$location,$ionicTabsDelegate,$stateParams){
	$scope.$on('$ionicView.afterEnter', function(){
		$ionicTabsDelegate.showBar(false);
	});
	console.log($stateParams)
}]);



