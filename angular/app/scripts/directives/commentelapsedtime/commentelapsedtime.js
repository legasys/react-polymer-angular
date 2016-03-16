'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:comment
 * @description
 * # comment
 */
angular.module('commentElapsedTime', [])
  .directive('commentElapsedTime', function () {
    return {
      template: '<div class="comment-elapsed">' +
      '<p>time passed will be here</p>' +
      '</div>',
      restrict: 'E'
    }
  });

