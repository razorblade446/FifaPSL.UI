'use strict';

angular.module('fifaPsluiApp')
    .factory('webapi', ['$resource', '$http', 'ENV', function ($resource, $http, ENV) {

        var _apiEndpoint = ENV.apiEndpoint;

        function _currentTournamentApi(apiParameters) {

            if (typeof apiParameters.success === "undefined" ||
                Object.prototype.toString.call(apiParameters.success) !== '[object Function]') {
                apiParameters.success = function () {
                };
            }

            if (typeof apiParameters.failure === "undefined" ||
                Object.prototype.toString.call(apiParameters.failure) !== '[object Function]') {
                apiParameters.failure = function () {
                };
            }

            $http({
                url: _apiEndpoint + "/tournament/current",
                method: 'GET'
            }).then(apiParameters.success, apiParameters.failure);

        }
/*
        function _loginApi(apiParameters) {

            if (typeof apiParameters.success === "undefined" ||
                Object.prototype.toString.call(apiParameters.success) !== '[object Function]') {
                apiParameters.success = function () {
                };
            }

            if (typeof apiParameters.failure === "undefined" ||
                Object.prototype.toString.call(apiParameters.failure) !== '[object Function]') {
                apiParameters.failure = function () {
                };
            }
        }
*/

        function _playerListStatisticsApi(apiParameters) {

            if (typeof apiParameters.tournament_id === "undefined") {
                apiParameters.tournament_id = 0;
            }

            if (typeof apiParameters.success === "undefined" ||
                Object.prototype.toString.call(apiParameters.success) !== '[object Function]') {
                apiParameters.success = function () {
                };
            }

            if (typeof apiParameters.failure === "undefined" ||
                Object.prototype.toString.call(apiParameters.failure) !== '[object Function]') {
                apiParameters.failure = function () {
                };
            }

            $http({
                url: _apiEndpoint + "/tournament/" + apiParameters.tournament_id + "/players/statistics",
                method: 'GET'
            }).then(apiParameters.success, apiParameters.failure);

        }

        function _tournamentListApi(apiParameters) {

            if (typeof apiParameters.success === "undefined" ||
                Object.prototype.toString.call(apiParameters.success) !== '[object Function]') {
                apiParameters.success = function () {
                };
            }

            if (typeof apiParameters.failure === "undefined" ||
                Object.prototype.toString.call(apiParameters.failure) !== '[object Function]') {
                apiParameters.failure = function () {
                };
            }

            $http({
                url: _apiEndpoint + "/tournament",
                method: 'GET'
            }).then(apiParameters.success, apiParameters.failure);

        }

        function _tournamentMatchesApi(apiParameters) {

            if (typeof apiParameters.tournament_id === "undefined") {
                apiParameters.tournament_id = 0;
            }

            if (typeof apiParameters.success === "undefined" ||
                Object.prototype.toString.call(apiParameters.success) !== '[object Function]') {
                apiParameters.success = function () {
                };
            }

            if (typeof apiParameters.failure === "undefined" ||
                Object.prototype.toString.call(apiParameters.failure) !== '[object Function]') {
                apiParameters.failure = function () {
                };
            }

            $http({
                url: _apiEndpoint + "/tournament/" + apiParameters.tournament_id + "/matches",
                method: 'GET'
            }).then(apiParameters.success, apiParameters.failure);

        }

        return {
            currentTournament: _currentTournamentApi,
            playerListStatistics: _playerListStatisticsApi,
            tournamentList: _tournamentListApi,
            tournamentMatches: _tournamentMatchesApi
        };

    }]);