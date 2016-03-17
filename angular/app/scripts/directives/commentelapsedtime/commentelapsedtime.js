'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:commentElapsedTime
 * @description
 * # comment
 */
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
      },
      link: function postLink(scope, element, attrs) {}
    }

  });


angular.module('elapsedTimeHelper', [])
  .presentElapsedTime = function(createdTime) {

  var secondsElapsed =  Math.round(parseFloat(Date.now()-createdTime)/1000.0);
  var minutesElapsed=Math.round(parseFloat(secondsElapsed/60.0));
  var hoursElapsed=Math.round(parseFloat(secondsElapsed/(60.0*60.0)));
  var daysElapsed=Math.round(parseFloat(secondsElapsed/(60.0*60.0*24.0)));
  var useSecondsAgoEndsAt = 59;
  var useMinutesAgoStartAt= 60;
  var useHoursAgoStartAt= (59*60);
  var useDaysAgoStartAt= (23*60*60)+(59*60);

  if (secondsElapsed >= useDaysAgoStartAt) {
    return  daysElapsed > 1 ? daysElapsed + " days ago" : daysElapsed + " day ago";
  }
  else if (secondsElapsed >= useHoursAgoStartAt) {
    return  hoursElapsed > 1 ? hoursElapsed + " hours ago" : hoursElapsed + " hour ago";
  }
  else if (secondsElapsed >= useMinutesAgoStartAt) {
    return minutesElapsed > 1 ? minutesElapsed + " minutes ago" : minutesElapsed + " minute ago";
  }
  else if (secondsElapsed <= useSecondsAgoEndsAt) {
    return secondsElapsed > 1 ? secondsElapsed + " seconds ago" : secondsElapsed + " second ago";
  }

}
