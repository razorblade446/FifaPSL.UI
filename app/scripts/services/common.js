'use strict';

angular.module('fifaPsluiApp')
    .factory('common', function(){
        var _tournamentId = 0;
        var _tournamentName = "";

        var _isNumeric = function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        };

        return {
            isNumeric: _isNumeric,
            tournamentId: _tournamentId,
            tournamentName: _tournamentName
        };

    });