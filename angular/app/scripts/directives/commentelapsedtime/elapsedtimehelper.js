'use strict';

angular.module('elapsedTimeHelper', [])
  .presentElapsedTime = function(createdTime) {
  var secondsElapsed =  Math.round(parseFloat(Date.now()-createdTime)/1000.0);
  var useSecondsAgoEndsAt = 59;
  var useMinutesAgoStartAt = 60;
  var useHoursAgoStartAt = (59*60);
  var useDaysAgoStartAt = (23*60*60)+(59*60);

  if (secondsElapsed >= useDaysAgoStartAt) {
    var daysElapsed =  Math.round(parseFloat(secondsElapsed/(60.0*60.0*24.0)));
    return  daysElapsed > 1 ? daysElapsed + " days ago" : daysElapsed + " day ago";
  }
  else if (secondsElapsed >= useHoursAgoStartAt) {
    var hoursElapsed = Math.round(parseFloat(secondsElapsed/(60.0*60.0)));
    return  hoursElapsed > 1 ? hoursElapsed + " hours ago" : hoursElapsed + " hour ago";
  }
  else if (secondsElapsed >= useMinutesAgoStartAt) {
    var minutesElapsed = Math.round(parseFloat(secondsElapsed/60.0));
    return minutesElapsed > 1 ? minutesElapsed + " minutes ago" : minutesElapsed + " minute ago";
  }
  else if (secondsElapsed <= useSecondsAgoEndsAt) {
    return secondsElapsed > 1 ? secondsElapsed + " seconds ago" : secondsElapsed + " second ago";
  }

}
