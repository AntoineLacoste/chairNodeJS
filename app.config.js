'use strict';

angular.module('chairApp')
.config(function($routeProvider){
	$routeProvider
	//homepage route
	.when('/', {
		controller: 'HomeController',
		templateUrl:  'home.html'
	})
	//signle article route
	.when('/article/:reference', {
		controller: 'ArticleController',
		templateUrl:  'article.html'
	})
	//access to the user cart
	.when('/cart', {
		controller: 'CartController',
		templateUrl:  'cart.html'
	})
	.otherwise({
		redirectTo: '/'
	})
});