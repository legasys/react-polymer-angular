'use strict';

describe('Directive: commentElapsedTime', function () {

  // load the directive's module
  beforeEach(module('commentElapsedTime'));

  var element, scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    element = angular.element('<comment-elapsed-time></comment-elapsed-time>');
    element = $compile(element)(scope);
    scope.$digest();
  }));


});
