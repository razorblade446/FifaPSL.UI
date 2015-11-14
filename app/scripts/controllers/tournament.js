'use strict';

angular.module('fifaPsluiApp')
    .config(['$stateProvider', function($stateProvider){

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'tournament_status',
                templateUrl: 'views/partial_tournament_status.html'
            });

    }])
    .controller('tournament_status', ['webapi','$scope','common', function(webapi, $scope, common){

        $scope.matchList = [];
        $scope.tournamentId = "";
        $scope.tournamentName = "";

        var _fnTournamentMatches = function(){
            webapi.tournamentMatches({
                tournament_id: $scope.tournamentId,
                success: function(response){
                    $scope.matchList = response.data;
                }
            });
        };

        $scope.fnTournamentMatches = _fnTournamentMatches;

        var _fnSelectTournament = function(){
            webapi.currentTournament({
                success: function(response){
                    $scope.tournamentId = response.data.id;
                    $scope.tournamentName = response.data.name;
                    common.tournamentId = response.data.id;
                    common.tournamentName = response.data.name;
                    $scope.fnTournamentMatches();
                }
            });
        };

        $scope.fnSelectTournament = _fnSelectTournament;

        if (common.tournamentId <= 0) {
            $scope.fnSelectTournament();
        }else{
            $scope.tournamentId = common.tournamentId;
            $scope.tournamentName = common.tournamentName;
            $scope.fnTournamentMatches();
        }

    }]);