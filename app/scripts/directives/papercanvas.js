/*global paper:false */
/*global Delaunay:false */

'use strict';

/**
 * @ngdoc directive
 * @name trianglesApp.directive:paperCanvas
 * @description
 * # paperCanvas
 */
angular.module('trianglesApp')
  .directive('paperCanvas', ['Poissondisksampling', function (Poissondisksampling) {
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

        function drawPath(points) {
          new paper.Path({
            segments: points,
            strokeColor: 'black'
          });
        }

        function drawStuff () {
          var points = Poissondisksampling.getPoints(1000, 800);
          for (var i = points.length - 1; i >= 0; i--) {
            points[i].x -= 50;
            points[i].y -= 50;
          }

          var pointsArray = [];
          for (i = 0; i < points.length; i++) {
            pointsArray.push([points[i].x, points[i].y]);
          }

          var triangles = Delaunay.triangulate(pointsArray);
          i = triangles.length - 1;
          while (i >= 0) {
            var tri = [
              pointsArray[triangles[i--]],
              pointsArray[triangles[i--]],
              pointsArray[triangles[i--]]
            ];
            drawPath(tri);

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
