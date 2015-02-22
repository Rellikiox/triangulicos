/*global Delaunay:false */

'use strict';

/**
 * @ngdoc service
 * @name trianglesApp.Triangulation
 * @description
 * # Triangulation
 * Service in the trianglesApp.
 */
angular.module('trianglesApp')
  .service('Triangulation', function () {
    var Triangles = {};

    Triangles.triangulate = function (points) {
        if (points.length <= 0) {
            return;
        }

        if (! (points[0] instanceof Array)) {
          var pointsArray = [];
          for (var i = 0; i < points.length; i++) {
            pointsArray.push([points[i].x, points[i].y]);
          }
          points = pointsArray;
        }

        var triPoints = Delaunay.triangulate(points);

        return Triangles._pointsToTriangles(triPoints, points);
    };

    Triangles._pointsToTriangles = function (pointTriangles, points) {
        var triangles = [];
        var i = pointTriangles.length - 1;
        while (i >= 0) {
            triangles.push([
              points[pointTriangles[i--]],
              points[pointTriangles[i--]],
              points[pointTriangles[i--]]
            ]);
        }

        return triangles;
    };

    return Triangles;
  });
