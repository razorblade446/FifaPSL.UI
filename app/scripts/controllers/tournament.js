'use strict';

angular.module('fifaPsluiApp')
    .config(['$stateProvider', function($stateProvider){

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'tournament_status',
                templateUrl: 'views/partial_tournament_status'
            });

    }])
    .controller('tournament_status', function(){

    });