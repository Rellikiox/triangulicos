'use strict';

/**
 * @ngdoc directive
 * @name trianglesApp.directive:colorPicker
 * @description
 * # colorPicker
 */
angular.module('trianglesApp')
  .directive('colorPicker', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the colorPicker directive');
      }
    };
  });
