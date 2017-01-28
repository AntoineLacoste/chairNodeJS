'use strict';

angular.module('chairApp')
.directive('search', [ function () {
	return {
		templateUrl : 'search.html',
		restrict: 'E',
		controller : ['$scope', '$rootScope', function($scope, $rootScope){
			$scope.resetItems = function(){
				if($scope.search != ''){
					var newItems = [];
					angular.forEach($rootScope.items, function(item){
						if(item.name.toLowerCase().search($scope.search) >= 0){
							newItems.push(item);
						}
					});
					$scope.itemsToDisplay = newItems;
				}
				else{
					$scope.itemsToDisplay = $rootScope.items;
				}
			}
		}]
	};
}]);