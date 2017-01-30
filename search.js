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

			$scope.selection = {
				color: '',
				type: ''
			}


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
			$scope.toto = function(){
				console.log('toto');
				console.log('erreur ', $scope.test);
			}

			$scope.$watch('test', function(test) {
				console.log(test);
			});
		}]
	};
}]);