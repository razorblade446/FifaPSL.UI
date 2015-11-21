'use strict';

angular.module('fifaPsluiApp')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('security_login', {
                url: '/auth/login',
                controller: 'SecurityLoginController',
                templateUrl: 'views/partial_security_login.html'
            });

    }])
    .controller('SecurityLoginController', function ($scope, $http, auth, $location, store) {

            $scope.username = "";
            $scope.password = "";

            function onLoginSuccess(profile, token) {
                $scope.message.text = '';
                store.set('profile', profile);
                store.set('token', token);
                $location.path('/');
                $scope.loading = false;
            }

            function onLoginFailed() {
                $scope.message.text = 'Credenciales inválidas';
                $scope.loading = false;
            }

            $scope.submit = function() {
                $scope.message = "Iniciando sesiòn...";
                $scope.loading = true;

                auth.signin({
                    connection: 'Username-Password-Authentication',
                    username: $scope.username,
                    password: $scope.password,
                    authParams: {
                        scope: 'openid name email'
                    }
                }, onLoginSuccess, onLoginFailed);

            };


        });