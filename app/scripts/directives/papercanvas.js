/*global paper:false */

'use strict';

/**
 * @ngdoc directive
 * @name trianglesApp.directive:paperCanvas
 * @description
 * # paperCanvas
 */
angular.module('trianglesApp')
  .directive('paperCanvas', function () {
    return {
      template: '<canvas id="canvas" height="500" width="500"></canvas>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        function initPaper () {
          paper.install(window);
          paper.setup('canvas');
        }

        function drawStuff () {
          var path = new paper.Path();
          path.strokeColor = 'black';
          path.add(new paper.Point(50, 50));
          path.add(new paper.Point(50, 60));
        }

        initPaper();
        drawStuff();
      }
    };
  });
