(function(){

    var app = angular.module('examplesApp',[ ]);
    app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
        $scope.teachers = {};

        $http.get('json/teachers.json')
            .then(function(response){
                $scope.teachers = response.data.teachers;
                console.log('Response: ', response.data.teachers)
            })
    }]);

})();
