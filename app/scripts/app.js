'use strict';

/**
 * @ngdoc overview
 * @name fifaPsluiApp
 * @description
 * # fifaPsluiApp
 *
 * Main module of the application.
 */
angular
    .module('fifaPsluiApp', [
        'ngAnimate',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'config'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise("/");

    }]);
