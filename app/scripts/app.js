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
        'ui.bootstrap',
        'config',
        'auth0',
        'angular-storage',
        'angular-jwt'
    ])
    .config(['$stateProvider', '$urlRouterProvider', 'authProvider', '$httpProvider', 'jwtInterceptorProvider',
        function ($stateProvider, $urlRouterProvider, authProvider, $httpProvider, jwtInterceptorProvider) {

            $urlRouterProvider.otherwise("/");

            authProvider.init({
                domain: 'razorblade.auth0.com',
                clientID: 'kuqUx6H5gzTvgWgmHTEyIIhzvtOLHX0g'
            });

            jwtInterceptorProvider.tokenGetter = function (store) {
                return store.get('token');
            };

            $httpProvider.interceptors.push('jwtInterceptor');

        }])
    .run(function (auth) {
        auth.hookEvents();
    });
