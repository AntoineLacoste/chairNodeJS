'use strict';

angular.module('chairApp')
.service('localStorage', [function() {


	this.init = function () {
        localStorage.clear();
    };

	this.get = function(){
		return JSON.parse(localStorage.getItem('cart'));
	};

	this.set = function(item){
		var currentCart = this.get();
		var added = false;
		if(currentCart != null){
			for(var i=0; i<currentCart.length;i++){
				if(currentCart[i].id == item){
					currentCart[i].qty++;
					added = true;
				}
			}
			if(!added){
				var itemToAdd = {id : item, qty : 1};
				currentCart.push(itemToAdd);
			}
		}
		else{
			currentCart = [];
			var itemToAdd = {id : item, qty : 1};
			currentCart.push(itemToAdd);
		}


		localStorage.setItem('cart', JSON.stringify(currentCart));
	};
}]);
