(function(){
    var app = angular.module('universityApp', []);
    
    app.controller('listCtrl', ['$scope', function($scope){
        $scope.list = ['Leonel Messi', 'Andres Iniesta', 'Xavi Hernandéz'];

        $scope.bestPlayers = {
            players: [
                {
                    name: "Leonel Messi",
                    country: "Argentina",
                    club: "FC Barcelona"
                },
                {
                    name: "Ronaldinho",
                    country: "Brasil",
                    club: "FC Barcelona"
                },
                {
                    name: "Zidane",
                    country: "Francia",
                    club: "Real Madrid"
                },
                {
                    name: "Andrea Pirlo",
                    country: "Italia",
                    club: "Milan"
                },
                {
                    name: "Steven Gerard",
                    country: "Inglaterra",
                    club: "Liverpool"
                },
                {
                    name: "Xavi Hernandéz",
                    country: "España",
                    club: "FC Barcelona"
                }
            ]
        }
    }]);
})()