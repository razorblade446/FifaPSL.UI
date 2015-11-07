'use strict';

angular.module('fifaPsluiApp')
    .factory('webapi', ['$resource', '$http', 'ENV', function($resource, $http, ENV){

        var _apiEndpoint = ENV.apiEndpoint;

        function _currentTournamentApi(apiParameters){

            if( typeof apiParameters.success === "undefined" ||
                Object.prototype.toString.call(apiParameters.success) !== '[object Function]' ){
                apiParameters.success = function (){
                };
            }

            if( typeof apiParameters.failure === "undefined" ||
                Object.prototype.toString.call(apiParameters.failure) !== '[object Function]' ){
                apiParameters.failure = function (){
                };
            }

            $http({
                url: _apiEndpoint + "/tournament/current",
                method: 'GET'
            }).then(apiParameters.success, apiParameters.failure);

        }

        function _tournamentListApi(apiParameters){

            if( typeof apiParameters.success === "undefined" ||
                Object.prototype.toString.call(apiParameters.success) !== '[object Function]' ){
                apiParameters.success = function (){
                };
            }

            if( typeof apiParameters.failure === "undefined" ||
                Object.prototype.toString.call(apiParameters.failure) !== '[object Function]' ){
                apiParameters.failure = function (){
                };
            }

            $http({
                url: _apiEndpoint + "/tournament",
                method: 'GET'
            }).then(apiParameters.success, apiParameters.failure);

        }

        return {
            currentTournament:      _currentTournamentApi,
            tournamentList:         _tournamentListApi
        };

    }]);