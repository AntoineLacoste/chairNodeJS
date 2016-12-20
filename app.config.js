'use strict';

angular.module('chairApp')
.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'HomeController',
		templateUrl:  'home.html'
	})
	.when('/article/:reference', {
		controller: 'ArticleController',
		templateUrl:  'article.html'
	})
	.when('/cart', {
		controller: 'CartController',
		templateUrl:  'cart.html'
	})
	.otherwise({
		redirectTo: '/'
	})
});