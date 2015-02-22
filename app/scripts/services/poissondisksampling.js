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
        getPoints: function (width, height) {
            return (new PoissonDiskSampler(width, height, 70, 30)).sampleUntilSolution();
        }
    };
  });
