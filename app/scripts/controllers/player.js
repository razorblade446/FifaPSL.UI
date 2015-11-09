'use strict';

angular.module('fifaPsluiApp')
    .config(['$stateProvider', function($stateProvider){

        $stateProvider
            .state('player_list_statistics', {
                url: '/players/statistics',
                controller: 'player_list_statistics',
                templateUrl: 'views/partial_player_statistics.html'
            });

    }])
    .controller('player_list_statistics', ['webapi','common','$scope','$location', function(webapi, common, $scope, $location){

        if(common.tournamentId <= 0){
            $location.path('/');
        }

        $scope.tournamentId = common.tournamentId;
        $scope.tournamentName = common.tournamentName;

        $scope.playerList = [];

        $scope.fnGetPlayerList = function (){
            webapi.playerListStatistics({
                tournament_id: common.tournamentId,
                success: function(response){
                    $scope.playerList = response.data;
                }
            });
        };

        $scope.fnGetPlayerList();

    }]);