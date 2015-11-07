'use strict';

angular
    .module('fifaPsluiApp')
    .directive('header', function(){
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'views/partial_header.html'
        };
    });