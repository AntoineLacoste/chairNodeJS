'use strict';

angular.module('chairApp')
.directive('search', [ function () {
	return {
		templateUrl : 'directives/search.html',
		restrict: 'E',
		controller : ['$scope', '$rootScope', function($scope, $rootScope){
			var newItems = [];


			// Initialization of the filter
			$(document).ready(function(){
				$('.collapsible').collapsible();
			});

			// Refresh of the items displayed
			$scope.searchItems = function(){
				if($scope.search != ''){
					newItems = [];
					angular.forEach($rootScope.items, function(item){
						if(item.name.toLowerCase().search($scope.search.toLowerCase()) >= 0){
							newItems.push(item);
						}
					});
					$scope.itemsToDisplay = newItems;
				}
				else{
					$scope.itemsToDisplay = $rootScope.items;
				}
			};
		}]
	}
}]);