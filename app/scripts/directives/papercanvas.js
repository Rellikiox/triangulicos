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

          // Create a Paper.js Path to draw a line into it:
          var path = new paper.Path.Rectangle({
            topLeft: [50, 50],
            bottomRight: [450, 450],
            fillColor: {
              gradient: {
                stops: ['yellow', 'blue']
              },
              origin: [50, 50],
              destination: [450, 450]
            }
          });


          paper.view.draw();
        }

        initPaper();
        drawStuff();
      }
    };
  });
