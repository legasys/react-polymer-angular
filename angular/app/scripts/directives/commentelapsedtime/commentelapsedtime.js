'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:commentElapsedTime
 * @description
 * # comment
 */
angular.module('commentElapsedTime', [])
  .directive('commentElapsedTime', function () {
    return {
      template: '<div class="comment-elapsed-time">' +
      '<p>time passed will be here </p>' +
      '</div>',
      restrict: 'E',
      scope: {
        createdOn: '@'
      },
      controller: function($scope) {
      },
      link: function postLink(scope, element, attrs) {}
    }

  });

