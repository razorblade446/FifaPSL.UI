'use strict';

angular
    .module('fifaPsluiApp')
    .directive('header', function(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'views/partial_header.html'
        };
    });