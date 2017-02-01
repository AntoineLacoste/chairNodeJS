'use strict';

angular.module('chairApp')
.directive('headerTop', [ function () {
	return {
		templateUrl : 'directives/header-top.html',
		restrict: 'E',
		controller : ['$scope', 'routing', 'localStorage', function($scope, routing, localStorage){
			var cart = 'cart';
			$scope.itemsInCart = localStorage.get(cart);
			$scope.numberOfItems = localStorage.getNumberOfItems();
			$scope.goTo = function(reference){
				routing.changeURL(reference);
			}	
		}]
	};
}]);