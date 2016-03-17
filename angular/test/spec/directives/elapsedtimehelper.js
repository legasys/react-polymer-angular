'use strict';

describe('Helper: elapsedTimeHelper', function () {

  beforeEach(module('elapsedTimeHelper'));
 // var  targetFunction = angular.module('elapsedTimeHelper').presentElapsedTime;
  //angular.module('elapsedTimeHelper').presentElapsedTime($scope.createdOn);

    it('should say one minute ago if posted 59 seconds ago', function (){
         var testTime = Date.now()-(59*1000);
         var expectedText = '59 seconds ago';
         expect(angular.module('elapsedTimeHelper').presentElapsedTime(testTime)).toEqual(expectedText);
    });

    it('should say number of minutes ago if more than 59 seconds ago but less than 59 minutes ago,', function (){
        var testTime = Date.now()-(60*1000);
        var expectedText = '1 minute ago';
        expect(angular.module('elapsedTimeHelper').presentElapsedTime(testTime)).toEqual(expectedText);
    });

    it('should say one hour ago if more than 59 minutes ago but less than 23 hours and 59 mins ago', function (){
        var testTime = Date.now()-((60*59+1)*1000);
        var expectedText = '1 hour ago';
        expect(angular.module('elapsedTimeHelper').presentElapsedTime(testTime)).toEqual(expectedText);
    });

    it('should say number of days ago if was posted more than 1 day ago', function (){
        var testTime = Date.now()-(24*60*60*1000);
        var expectedText = '1 day ago';
        expect(angular.module('elapsedTimeHelper').presentElapsedTime(testTime)).toEqual(expectedText);
    });


});
