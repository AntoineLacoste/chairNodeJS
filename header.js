'use strict';

angular.module('chairApp')
.directive('headerTop', [ function () {
	return {
		templateUrl : 'header-top.html',
		restrict: 'E',
		controller : ['$scope', 'routing', function($scope, routing){
			$scope.goTo = function(reference){
				routing.changeURL(reference);
			}	
		}]
	};
}]);