// create the module and name it formApp
	var formApp = angular.module('formApp', ['ngRoute']);

	// configure our routes
	formApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'angularwelcome.html',
				controller  : 'mainController'
			})

			// route for the login page
			.when('/login', {
				templateUrl : 'anglogin.html',
				controller  : 'formController'
			})
           .when('/user', {
				templateUrl : 'anguser.html',
				controller  : 'userController'
			})

			
	});

	// create the controller and inject Angular's $scope
	formApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'welcome please login here.';
	});

	formApp.controller('formController', function($scope) {
		$scope.message = 'you have succesfully logged in.';
	});
    formApp.controller('userController', function($scope) {
		$scope.message = 'you have succesfully logged in.';
	});

	
