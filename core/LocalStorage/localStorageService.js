'use strict';

//service to store the cart in the local storage of the browser
angular.module('chairApp')
.service('localStorage', ['$q', function($q) {

	this.init = function () {
		if(this.get() === null){
			var LS = [];
			localStorage.setItem('cart', JSON.stringify(LS));
		}
	};

	this.get = function(){
		return JSON.parse(localStorage.getItem('cart'));
	};

	// Add an item to the LS if it is not in, if it is add 1 to the quantity
	this.set = function(item){
		var defer = $q.defer();
		var currentCart = this.get();
		var added = false;
		if(currentCart != null){
			for(var i=0; i<currentCart.length;i++){
				if(currentCart[i].reference == item.reference){
					currentCart[i].qty++;
					added = true;
				}
			}
			if(!added){
				var itemToAdd = item;
				itemToAdd.qty = 1;
				currentCart.push(itemToAdd);
			}
		}
		else{
			currentCart = [];
			var itemToAdd = item;
			itemToAdd.qty = 1;
			currentCart.push(itemToAdd);
		}
		localStorage.setItem('cart', JSON.stringify(currentCart));
		console.log('--- set LocalStorage Done ---');
		defer.resolve();
		return defer.promise;
	};

	// Return the total of items in cart
	this.getNumberOfItems = function(){
		var items = JSON.parse(localStorage.getItem('cart'));
		var numberOfItems = 0;
		items.forEach(function(item){
			numberOfItems += item.qty;
		});
		return numberOfItems;
	}

	// Remove item from the cart
	this.remove = function(reference){
		var defer = $q.defer();
		var currentCart = this.get();
		if(currentCart != null){
			for(var i=0; i<currentCart.length;i++){
				if(currentCart[i].reference == reference){
					currentCart.splice(i, 1);
					localStorage.setItem('cart', JSON.stringify(currentCart));
					return;
				}
			}
		}
		defer.resolve();
		return defer.promise;
	}

	// Insert item quantity for the item with reference parameter
	this.refresh = function(reference, qty){
		var defer = $q.defer();
		var currentCart = this.get();
		if(currentCart != null){
			for(var i=0; i<currentCart.length;i++){
				if(currentCart[i].reference == reference){
					currentCart[i].qty = qty;
					localStorage.setItem('cart', JSON.stringify(currentCart));
					return;
				}
			}
		}
		defer.resolve();
		return defer.promise;
	}
}]);
