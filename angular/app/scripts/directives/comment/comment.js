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
                      '{{author}}' + 'x ' +
                  '</h2>' +
                  '<ng-transclude></ng-transclude>' +
                  'yy'+'<comment-elapsed-time></comment-elapsed-time>' +
                '</div>',
      restrict: 'E',
      transclude: true,
      scope: {
        author: '@',
        createdOn: '@'
      },
      link: function postLink(scope, element, attrs) {}
    };
  });
