/*global PoissonDiskSampler:false */

'use strict';

/**
 * @ngdoc service
 * @name trianglesApp.Poissondisksampling
 * @description
 * # Poissondisksampling
 * Service in the trianglesApp.
 */
angular.module('trianglesApp')
  .service('Poissondisksampling', function () {
    return {
        getPoints: function (width, height, nPoints) {
            var area = width * height;
            var areaFactor = 2;

            var minDist = Math.sqrt((areaFactor * area) / (nPoints * Math.PI));

            return (new PoissonDiskSampler(width, height, minDist, 30)).sampleUntilSolution();
        }
    };
  });
