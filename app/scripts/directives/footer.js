'use strict';

angular
    .module('fifaPsluiApp')
    .directive('footer', function(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'views/partial_footer.html'
        };
    });