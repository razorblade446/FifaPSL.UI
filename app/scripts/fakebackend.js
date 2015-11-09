/*global fbMocks */
'use strict';

var app = angular.module('fifaPsluiApp');

app.requires.push('ngMockE2E');

app.run(function ($httpBackend) {

    $httpBackend.whenGET(/\/tournament\/current/)
        .respond(function () {
            return [200, fbMocks.tournamentCurrent, {}];
        });

    $httpBackend.whenGET(/\/tournament\/(\d+)\/matches(\/\d+)?/)
        .respond(function () {
            return [200, fbMocks.tournamentMatches, {}];
        });

    $httpBackend.whenGET(/views\//).passThrough();

});