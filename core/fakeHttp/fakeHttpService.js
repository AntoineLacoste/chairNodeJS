'use strict';

angular.module('chairApp')
    .service('fakeHttp', function($http, $q) {

	this.get = function(url) {
		var deferred = $q.defer();
		var regexGetChair = new RegExp('\/chair\/[0-9]+$');
		if (url.match(regexGetChair)) {
			deferred.resolve({
			    data:getChair(url.substr(('/chair/').length))
			});
		} else if(url == '/chair/getallchairs') {
            deferred.resolve({
                data: getAllChairs()
            });
        }
        else{
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
    return getAllChairs().chairs[id];
}

function getAllChairs() {
    return {
        'chairs':[
            {
                'reference': 15244,
                'name': 'Ingolf',
                'description' : 'Chaise, blanc',
                'imageURL': 'http://www.ikea.com/fr/fr/images/products/ingolf-chaise-blanc__0454095_PE602593_S4.JPG',
                'type': 'Fonctionnel',
                'color': 'Blanc',
                'code': '#FFFFFF',
                'price': 550,
                'material': 'Bois massif'
            },
            {
                'reference': 48775,
                'name': 'BÖRJE',
                'description' : 'Chaise, brun, Gobo blanc',
                'imageURL': 'http://www.ikea.com/fr/fr/images/products/borje-chaise-blanc__0121732_PE278342_S4.JPG',
                'type': 'Confort',
                'color': 'Marron',
                'code': '#a8572e',
                'price': 399,
                'material': '100% coton'
            },
            {
                'reference': 78445,
                'name': 'DXRacer Gaming Chair',
                'description' : 'Chaise gaming professionnelle, se penche jusqu\'a 30°',
                'imageURL': 'http://images.dxracer-europe.com/data/product/390f660/dxracer_tank_gaming_chair__ohtc29ne.jpg',
                'type': 'Gaming',
                'color': 'Vert',
                'code': '#1b9532',
                'price': 5490,
                'material': 'Cuir'
            },
            {
                'reference': 65341,
                'name': 'DXRacer Gaming Chair',
                'description' : 'Chaise gaming professionnelle, se penche jusqu\'a 30°',
                'imageURL': 'http://images.dxracer-europe.com/data/product/390f660/dxracer_tank_gaming_chair__ohtc29ne.jpg',
                'type': 'Gaming',
                'color': 'Vert',
                'code': '#1b9532',
                'price': 5490,
                'material': 'Cuir'
            },
            {
                'reference': 12441,
                'name': 'Confetti',
                'description' : 'Chaises pliantes de jardin en métal rouge',
                'imageURL': 'http://www.maisonsdumonde.com/img/2-chaises-pliantes-de-jardin-en-metal-rouge-confetti-1000-8-32-155422_3.jpg',
                'type': 'Extérieur',
                'color': 'white',
                'code': '#FFFFFF',
                'price': 499,
                'material': 'Métal'
            }

        ]
    }
}