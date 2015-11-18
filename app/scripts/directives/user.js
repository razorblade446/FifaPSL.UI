'use strict';

angular
    .module('fifaPsluiApp')
    .directive('user', [function(){
        return {
            restrict: 'E',
            replace: true,
            scope: {
                submit: '&',
                submitted: '='
            },
            templateUrl: 'views/directive_user.html',
            link: function(scope, element){
                element.on('submit', function(){
                    console.log("OK");
                });
            }
        };
    }]);