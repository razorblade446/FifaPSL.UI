'use strict';

angular
    .module('fifaPsluiApp')
    .directive('user', [function(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'views/directive_user.html',
            link: function(){

            }
        };
    }]);