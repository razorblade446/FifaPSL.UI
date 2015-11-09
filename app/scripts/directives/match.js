'use strict';

angular.module('fifaPsluiApp')
    .directive('fifaMatch', [function () {
        return {
            restrict: 'E',
            scope: {
              match: '='
            },
            replace: true,
            templateUrl: 'views/directive_match.html',
            link: function ($scope) {
                $scope.Player = [];

                $scope.$watch('match', function(newMatch){
                    $scope.Player = newMatch.Players;
                    console.log($scope.Player);
                });
            }
        };
    }]);