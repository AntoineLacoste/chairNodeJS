'use strict';

angular.module('chairApp')
.config(function($routeProvider){
	$routeProvider
	//homepage route
	.when('/', {
		controller: 'HomeController',
		templateUrl:  'home-page/home.html'
	})
	//signle article route
	.when('/article/:reference', {
		controller: 'ArticleController',
		templateUrl:  'article-page/article.html'
	})
	//access to the user cart
	.when('/cart', {
		controller: 'CartController',
		templateUrl:  'cart-page/cart.html'
	})
	.otherwise({
		redirectTo: '/'
	})
});