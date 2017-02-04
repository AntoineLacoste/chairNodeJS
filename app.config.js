'use strict';

angular.module('chairApp')
.config(function($routeProvider){
	$routeProvider
	//homepage route
	.when('/', {
        template:  '<home-page></home-page>'
	})
	//single article route
	.when('/article/:reference', {
        template:  '<article-page></article-page>'
	})
	//access to the user cart
	.when('/cart', {
        template:  '<cart-page></cart-page>'
	})
	.otherwise({
		redirectTo: '/'
	})
});