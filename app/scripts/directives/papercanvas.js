/*global paper:false */

'use strict';

/**
 * @ngdoc directive
 * @name trianglesApp.directive:paperCanvas
 * @description
 * # paperCanvas
 */
angular.module('trianglesApp')
  .directive('paperCanvas', ['Poissondisksampling', 'Triangulation', function (Poissondisksampling, Triangulation) {
    return {
      template: '<canvas id="canvas" width="900" height="700"></canvas>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        function initPaper () {
          paper.install(window);
          paper.setup('canvas');
        }

        function drawPoint(point) {
          new paper.Path.Circle({
            center: point,
            radius: 1,
            fillColor: 'black'
          });
        }

        function drawPoints(points) {
          for (var i = 0; i < points.length; i++) {
            drawPoint(points[i]);
          }
        }

        function drawPath(points, closed) {
          new paper.Path({
            segments: points,
            strokeColor: 'black',
            closed: closed
          });
        }

        function drawStuff () {
          var points = Poissondisksampling.getPoints(1000, 800);
          for (var i = points.length - 1; i >= 0; i--) {
            points[i].x -= 50;
            points[i].y -= 50;
          }

          var triangles = Triangulation.triangulate(points);

          for (var j = triangles.length - 1; j >= 0; j--) {
            var tri = triangles[j];

            drawPath(tri, true);

            var center = tri.reduce(function (prev, curr) {
              return [prev[0] + curr[0], prev[1] + curr[1]];
            });
            center[0] /= 3;
            center[1] /= 3;
            drawPoint(center);
          }

          paper.view.draw();
        }

        initPaper();
        drawStuff();
      }
    };
  }]);
