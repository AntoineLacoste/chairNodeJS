'use strict';

angular.module('chairApp')
    .service('fakeHttp', function($http, $q) {

	this.get = function(url) {
		var deferred = $q.defer();
		var regexGetChair = new RegExp('\/article\/[0-9]+$');
		if (url.match(regexGetChair)) {
			deferred.resolve({
			    data:getChair(url.substr(('/article/').length))
			});
		} else if(url == '/article/getallchairs') {
            deferred.resolve({
                data: getAllChairs()
            });
        }
        else{
            deferred.reject("Invalid url");
        }
        return deferred.promise;
	};
});

function getChair(reference) {
    for (var i = 0; i < getAllChairs().chairs.length; i++){
        if (getAllChairs().chairs[i].reference == reference){
            return getAllChairs().chairs[i];
        }
    }
    return null;
}

function getAllChairs() {
    return {
        'chairs':[
            {
                'reference': 15244,
                'name': 'Ingolf',
                'description' : 'Chaise, blanc. Maecenas ipsum velit, consectetuer eu, lobortis ut, dictum at, dui. In rutrum. Sed ac dolor sit amet purus malesuada congue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Suspendisse sagittis ultrices augue. Mauris metus. Nunc dapibus tortor vel mi dapibus sollicitudin. Etiam posuere lacus quis dolor. Praesent id justo in neque elementum ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. In convallis. Fusce suscipit libero eget elit. Praesent vitae arcu tempor neque lacinia pretium. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus.',
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
                'description' : 'Chaise, brun, Gobo blanc. Maecenas ipsum velit, consectetuer eu, lobortis ut, dictum at, dui. In rutrum. Sed ac dolor sit amet purus malesuada congue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Suspendisse sagittis ultrices augue. Mauris metus. Nunc dapibus tortor vel mi dapibus sollicitudin. Etiam posuere lacus quis dolor. Praesent id justo in neque elementum ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. In convallis. Fusce suscipit libero eget elit. Praesent vitae arcu tempor neque lacinia pretium. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus.',
                'imageURL': 'http://www.ikea.com/fr/fr/images/products/borje-chaise-blanc__0121732_PE278342_S4.JPG',
                'type': 'Confort',
                'color': 'Marron',
                'code': '#a8572e',
                'price': 399,
                'material': '100% coton'
            },
            {
                'reference': 78445,
                'name': 'Fauteuil design multicolore',
                'description' : 'Fauteuil très design, effet atténue sur les daltoniens. Maecenas ipsum velit, consectetuer eu, lobortis ut, dictum at, dui. In rutrum. Sed ac dolor sit amet purus malesuada congue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Suspendisse sagittis ultrices augue. Mauris metus. Nunc dapibus tortor vel mi dapibus sollicitudin. Etiam posuere lacus quis dolor. Praesent id justo in neque elementum ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. In convallis. Fusce suscipit libero eget elit. Praesent vitae arcu tempor neque lacinia pretium. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus.',
                'imageURL': 'https://www.sofamobili.com/boutique/images_produits/fauteuil-design-capitonne-frank-z.jpg',
                'type': 'Gaming',
                'color': 'Vert',
                'code': '#1b9532',
                'price': 5490,
                'material': 'Cuir'
            },
            {
                'reference': 65341,
                'name': 'DXRacer Gaming Chair',
                'description' : 'Chaise gaming professionnelle, se penche jusqu\'a 30°.  Maecenas ipsum velit, consectetuer eu, lobortis ut, dictum at, dui. In rutrum. Sed ac dolor sit amet purus malesuada congue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Suspendisse sagittis ultrices augue. Mauris metus. Nunc dapibus tortor vel mi dapibus sollicitudin. Etiam posuere lacus quis dolor. Praesent id justo in neque elementum ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. In convallis. Fusce suscipit libero eget elit. Praesent vitae arcu tempor neque lacinia pretium. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus.',
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
                'description' : 'Chaises pliantes de jardin en métal rouge. Maecenas ipsum velit, consectetuer eu, lobortis ut, dictum at, dui. In rutrum. Sed ac dolor sit amet purus malesuada congue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Suspendisse sagittis ultrices augue. Mauris metus. Nunc dapibus tortor vel mi dapibus sollicitudin. Etiam posuere lacus quis dolor. Praesent id justo in neque elementum ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. In convallis. Fusce suscipit libero eget elit. Praesent vitae arcu tempor neque lacinia pretium. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus.',
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