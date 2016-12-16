'use strict';

angular.module('chairApp')
    .service('fakeHttp', function($http, $q) {

	this.get = function(url) {
		var deferred = $q.defer();
		var regex = new RegExp(apiBaseURL + '\/chair\/\d');
		if (url.match(regex)) {
			deferred.resolve({
			    data:getChair(url.substr((apiBaseURL + '/chaise/').length))
			});
		} else {
			deferred.reject("Invalid url"); 
		}
		return deferred.promise;
	};

	/*this.post = function(url, loginData, headers) {
		var deferred = $q.defer();
		if (url == apiBaseURL + '/Users/login') {
			if (loginData.email == 'admin@localhost' && loginData.password == 'azerty') {
				deferred.resolve({data:templateLoginToken(1)});
			} else {
				deferred.reject("Invalid credentials"); 
			}
		} else {
			deferred.reject("Invalid url"); 
		}
		return deferred.promise;
	};*/
});

function getChair(id) {
	switch(id){
		case(1):
            return {
                'id': id,
                'name': 'Ingolf',
                'description' : 'Chaise, blanc',
                'imageURL': 'http://www.ikea.com/fr/fr/images/products/ingolf-chaise-blanc__0454095_PE602593_S4.JPG',
                'type': 'Fonctionnel',
                'color': 'Blanc',
                'code': '#FFFFFF',
                'price': 550,
                'material': 'Bois massif',
                'reference': 15244
            };
        case(2):
            return {
                'id': id,
                'name': 'BÖRJE',
                'description' : 'Chaise, brun, Gobo blanc',
                'imageURL': 'http://www.ikea.com/fr/fr/images/products/borje-chaise-blanc__0121732_PE278342_S4.JPG',
                'type': 'Confort',
                'color': 'Marron',
                'code': '#a8572e',
                'price': 399,
                'material': '100% coton',
                'reference': 48775
            };
        case(3):
            return {
                'id': id,
                'name': 'DXRacer Gaming Chair',
                'description' : 'Chaise gaming professionnelle, se penche jusqu\'a 30°',
                'imageURL': 'http://images.dxracer-europe.com/data/product/390f660/dxracer_tank_gaming_chair__ohtc29ne.jpg',
                'type': 'Gaming',
                'color': 'Vert',
                'code': '#1b9532',
                'price': 5490,
                'material': 'Cuir',
                'reference': 96154
            };
        case(4):
            return {
                'id': id,
                'name': 'Fauteuil oeuf patchwork multicolore',
                'description' : 'Posé sur un socle rond en métal pour garantir sa stabilité, ce fauteuil design allie à la fois confort et modernité.',
                'imageURL': 'http://www.so-inside.com/media/fauteuil_oeuf_patchwork_arne_jacobsen__002663500_0950_29042015.jpg',
                'type': 'Design',
                'color': 'white',
                'code': '#FFFFFF',
                'price': 4290,
                'material': 'Mousse polyuréthane et tissu patchwork',
                'reference': 62115
            };
        case(5):
            return {
                'id': id,
                'name': 'Confetti',
                'description' : 'Chaises pliantes de jardin en métal rouge',
                'imageURL': 'http://www.maisonsdumonde.com/img/2-chaises-pliantes-de-jardin-en-metal-rouge-confetti-1000-8-32-155422_3.jpg',
                'type': 'Extérieur',
                'color': 'white',
                'code': '#FFFFFF',
                'price': 499,
                'material': 'Métal',
                'reference': 78445
            };
	}
}

function getAll() {
    var chairs      = {};
    var chairsArray = [];

    for(var i = 0; i < 6; i++){
        chairsArray.push(getChair(i));
    }

    chairs.chairs = chairsArray;
    return chairs;
}
