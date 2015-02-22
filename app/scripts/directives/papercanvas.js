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

        function drawPath(points, closed, color) {
          new paper.Path({
            segments: points,
            // strokeColor: 'black',
            closed: closed,
            fillColor: color
          });
        }

        function drawTriangles (triangles, gradient) {
          for (var j = triangles.length - 1; j >= 0; j--) {
            var tri = triangles[j];

            var center = getCenter(tri);
            drawPoint(center);

            var color = gradient.getPixel(center);
            drawPath(tri, true, color);
          }
        }

        function getCenter (triangle) {
            var center = triangle.reduce(function (prev, curr) {
              return [prev[0] + curr[0], prev[1] + curr[1]];
            });
            center[0] /= 3;
            center[1] /= 3;

            return center;
        }

        function getGradient (colors) {
          var g = new paper.Path.Rectangle({
            topLeft: [0, 0],
            bottomRight: [900, 700],
            fillColor: {
              gradient: {
                stops: colors
              },
              origin: [0, 0],
              destination: [900, 700]
            }
          });

          return g.rasterize();
        }

        function drawStuff () {
          var points = Poissondisksampling.getPoints(1000, 800);
          for (var i = points.length - 1; i >= 0; i--) {
            points[i].x -= 50;
            points[i].y -= 50;
          }

          var triangles = Triangulation.triangulate(points);
          var gradient = getGradient(['#ED91E8', '#E5F794', '#60C1AD', '#FEA203', '#FAE503']);
          drawTriangles(triangles, gradient);


          paper.view.draw();
        }

        initPaper();
        drawStuff();
      }
    };
  }]);
