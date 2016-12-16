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
                'title': 'Quel est la capital de l\'Ouzbékistan ?',
                'errorMessage' : 'Try again!',
                'imageURL': null,
                'response1': 'Tachkent',
                'response2': 'Alimbaba',
                'response3': 'La réponse C',
                'validResponseId': 1,
                'score': 150,
                'activated': true,
                'id': id
            };
        case(2):
            return {
                'title': 'Quel est la couleur du cheval blanc d\'Henry IV ?',
                'errorMessage' : 'Try again!',
                'imageURL': null,
                'response1': 'Bleu',
                'response2': 'Vert',
                'response3': '42',
                'validResponseId': 2,
                'score': 200,
                'activated': true,
                'id': id
            };
        case(3):
            return {
                'title': 'Combien font 1 + 1 ?',
                'errorMessage' : 'Try again!',
                'imageURL': null,
                'response1': '11',
                'response2': 'Pi/4',
                'response3': 'Racine carrée de 2 au carré',
                'validResponseId': 3,
                'score': 4.5,
                'activated': true,
                'id': id
            };
	}
}

function getAll() {
	return {
		'id': '5XtrTRSD9uoTGO111fOcuHIgXdNiKuVhVHxFSdiKWFnPcf0xzMYicFuIwJvE5K7w',
		'ttl': 1209600,
		'userId': userId
	};
}
