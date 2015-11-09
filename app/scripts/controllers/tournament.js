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
    .controller('tournament_status', ['webapi','$scope', function(webapi, $scope){

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
                    $scope.tournamentId = response.data.TournamentId;
                    $scope.tournamentName = response.data.name;
                    $scope.fnTournamentMatches();
                }
            });
        };

        $scope.fnSelectTournament = _fnSelectTournament;

        $scope.fnSelectTournament();

    }]);