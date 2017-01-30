'use strict';

angular.module('chairApp')
.directive('search', [ function () {
	return {
		templateUrl : 'search.html',
		restrict: 'E',
		controller : ['$scope', '$rootScope', function($scope, $rootScope){
			var newItems = [];
			$scope.filters = [];
			$scope.filters['type'] = [];
			$scope.filters['color'] = [];

			var filtersSelected = [];
			filtersSelected['type'] = [];
			filtersSelected['color'] = [];


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
					if( $scope.filters.color.indexOf(item.color.toLowerCase()) < 0){
						$scope.filters.color.push(item.color.toLowerCase());
					}
					if( $scope.filters.type.indexOf(item.type.toLowerCase()) < 0){
						$scope.filters.type.push(item.type.toLowerCase());
					}
				});
			}

			// Mise à jour des résultats lors du filtre
			$scope.filterItems = function(index, searchFilter){

				// Mise à jour des filtres sélectionés
				if( filtersSelected[searchFilter].indexOf($scope.filters[searchFilter][index]) >= 0){
					filtersSelected[searchFilter].splice(index, 1);
				}
				else{
					filtersSelected[searchFilter].push($scope.filters[searchFilter][index]);
				}
				// Recherche dans tous le items les articles correspondant aux filtres sélectionés
				newItems = [];
				angular.forEach($rootScope.items, function(item){
					var key = '';
					// On boucle sur les différents filtres 
					for( key in filtersSelected ){
						if(filtersSelected[key].length > 0){
							// On vérifie que l'item courant contient une des occurences cochées du filtre courant
							if( filtersSelected[key].indexOf( item[searchFilter].toLowerCase() ) >=0 ){
								newItems.push(item);
							}
						}
					}
				});
				$scope.itemsToDisplay = newItems;
			}
		}]
	};
}]);