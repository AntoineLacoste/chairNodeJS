'use strict';

angular.module('chairApp')
.directive('headerTop', [function () {
	return {
		templateUrl : 'header-top.html',
		restrict: 'E'
	};
}]);

// angular.module('chairApp')
// .directive('headerTop', [function () {
// 	return {
// 		templateUrl : 'header-top.html',
// 		restrict: 'E',
// 		link: function (scope, iElement, iAttrs){
// 		}
// 	};
// }]);