(function(){

  var app = angular.module('universityApp',[ ]);
  app.controller('listCtrl', ['$scope', function($scope){

    $scope.persons = [
      {
        "id": 0,
        "gender": "men",
        "name": "Kari Carr",
        "avatar": "kari.jpg",
        "telephone": "(826) 453-3497",
        "cellPhone": "(801) 9175-8136"
      },
      {
        "id": 1,
        "gender": "female",
        "name": "Tameka Gamble",
        "avatar": "tameka.jpg",
        "telephone": "(824) 438-2499",
        "cellPhone": "(801) 8595-8337"
      },
      {
        "id": 2,
        "gender": "female",
        "name": "Charity Austin",
        "avatar": "charity.jpg",
        "telephone": "(817) 512-2258",
        "cellPhone": "(801) 9375-3830"
      },
      {
        "id": 3,
        "gender": "female",
        "name": "Slater Hunt",
        "avatar": "slater.jpg",
        "telephone": "(842) 413-3023",
        "cellPhone": "(801) 9555-1729"
      },
      {
        "id": 4,
        "gender": "female",
        "name": "Chen Hanson",
        "avatar": "chen.jpg",
        "telephone": "(966) 520-2696",
        "cellPhone": "(801) 9324-4423"
      },
      {
        "id": 5,
        "gender": "men",
        "name": "Obrien Davis",
        "avatar": "obrien.jpg",
        "telephone": "(996) 595-3896",
        "cellPhone": "(801) 8195-2732"
      },
      {
        "id": 6,
        "gender": "men",
        "name": "Le Haley",
        "avatar": "le.jpg",
        "telephone": "(967) 527-3286",
        "cellPhone": "(801) 8074-5225"
      },
      {
        "id": 7,
        "gender": "men",
        "name": "Lester Carney",
        "avatar": "lester.jpg",
        "telephone": "(994) 465-3542",
        "cellPhone": "(801) 9044-7522"
      },
      {
        "id": 8,
        "gender": "men",
        "name": "Rosario Perry",
        "avatar": "rosario.jpg",
        "telephone": "(848) 499-2977",
        "cellPhone": "(801) 8495-0625"
      },
      {
        "id": 9,
        "gender": "female",
        "name": "Marilyn Huber",
        "avatar": "marilyn.jpg",
        "telephone": "(982) 580-3235",
        "cellPhone": "(801) 8184-2624"
      }
    ];

  }]);

})();
