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
      '<p>time passed' + "{{createdOn}}" + 'will be here </p>' +
      '</div>',
      restrict: 'E',
      scope: {
        createdOn: '@'
      },
      //controller: function($scope) {
      //},
      link: function postLink(scope, element, attrs) {}
    }

  });


angular.directives.commentElapsedTime.calculateElapsed = function(createTime) {
        return Date.now()- createTime;
}



angular.directives.commentElapsedTime.presentElapsedTime = function(createTime) {
        var elapsedTimeSecs = Parse.float(Date.now() - createTime)/1000.0;


}
