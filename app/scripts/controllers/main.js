'use strict';

/**
 * @ngdoc function
 * @name trianglesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trianglesApp
 */
angular.module('trianglesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.topLeftColor = '#FFFFFF';
    $scope.bottomRightColor = '#000000';
    $scope.nPoints = 150;
  });
