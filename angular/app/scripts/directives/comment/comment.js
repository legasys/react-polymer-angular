'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:comment
 * @description
 * # comment
 */
angular.module('comment', ['commentElapsedTime'])
  .directive('commentModel', function () {
    return {
      template: '<div class="comment">' +
                  '<h2 class="commentAuthor">' +
                      '{{author}}' +
                  '</h2>' +
                  '<comment-elapsed-time></comment-elapsed-time>' +
                  '<ng-transclude></ng-transclude>' +
                '</div>',
      restrict: 'E',
      transclude: true,
      scope: {
        author: '@'
      },
      link: function postLink(scope, element, attrs) {}
    };
  });
