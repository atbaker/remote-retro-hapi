/* global require, module, exports */
/* jslint browser: true */

var app = require('./../_module_init.js');
var constants = require('../../../../shared/constants/boardConstants');

app.directive('summary', [function() {
    "use strict";
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/summary.html',
        scope: {
            board: '='
        },
        controller: ['$scope', function($scope) {
            $scope.phases = constants.phases;
        }]
    };
}]);

module.exports = app;
