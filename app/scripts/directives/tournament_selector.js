'use strict';

angular.module('fifaPsluiApp')
    .directive('tournamentSelector', ['webapi','common', function(webapi, common){

        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'views/directive_tournament_selector.html',
            link: function(scope, element){

                scope.tournamentInfo = {
                    tournamentId: common.tournamentId,
                    tournamentName: common.tournamentName
                };

                webapi.tournamentList({
                    success: function(response){
                        var myList = element.find('ul');
                        myList.html('');
                        for(var i = 0; i < response.data.length; i++){
                            myList.append(angular.element('<li><a href="#" onclick="alert(this)" data-tournament-name="' + response.data[i].name + '" data-tournament-id="' + response.data[i].TournamentId + '">' + response.data[i].name + '</a></li>'));
                        }
                    }
                });

            }
        };

    }]);