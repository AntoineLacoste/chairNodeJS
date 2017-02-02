'use strict';

angular.module('chairApp')
.directive('search', [ function () {
	return {
		templateUrl : 'directives/search.html',
		restrict: 'E',
		controller : ['$scope', '$rootScope', function($scope, $rootScope){
			var newItems = [];


			// Initialisation de l'accordéon du filtre de recherche
			$(document).ready(function(){
				$('.collapsible').collapsible();
			});

			// Mise à jour des résultats lors d'une recherche 
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