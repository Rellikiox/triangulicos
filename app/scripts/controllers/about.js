'use strict';

/**
 * @ngdoc function
 * @name trianglesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the trianglesApp
 */
angular.module('trianglesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
