'use strict';

angular.module('chairApp')
.directive('search', [ function () {
	return {
		templateUrl : 'search.html',
		restrict: 'E',
		controller : ['$scope', '$rootScope', function($scope, $rootScope){
			var newItems = [];
			$scope.itemsColor = [];
			$scope.itemsType = [];

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
			}

			// Initialisation des filtres
			$scope.initFilter = function(){
				angular.forEach($rootScope.items, function(item){
					console.log($scope.itemsColor, '   ', item.color.toLowerCase());
					if( $scope.itemsColor.indexOf(item.color.toLowerCase()) < 0){
						console.log($scope.itemsColor, '   ', item.color.toLowerCase());
						$scope.itemsColor.push(item.color.toLowerCase());
					}
					if( $scope.itemsType.indexOf(item.type.toLowerCase()) < 0){
						$scope.itemsType.push(item.type.toLowerCase());
					}
				});
				console.log($scope.itemsColor);
			}

			// Mise à jour des résultats lors du filtre
			$scope.filterItems = function(){

			}
		}]
	};
}]);