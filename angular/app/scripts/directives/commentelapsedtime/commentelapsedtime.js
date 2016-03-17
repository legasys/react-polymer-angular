'use strict';


angular.module('commentElapsedTime', ['elapsedTimeHelper'])
  .directive('commentElapsedTime', function () {
    return {
      template: '<div class="comment-elapsed-time">' +
      '<p>time passed' + " {{elapsedTime}} " + 'will be here </p>' +
      '</div>',
      restrict: 'E',
      scope: {
        createdOn: '@'
      },
      controller: function($scope) {
          $scope.elapsedTime=angular.module('elapsedTimeHelper').presentElapsedTime($scope.createdOn);
      }
    }

  });


