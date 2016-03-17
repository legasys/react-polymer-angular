'use strict';

describe('Directive: commentElapsedTime', function () {

  // load the directive's module
  beforeEach(module('commentElapsedTime'));

  var element, scope, compile;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    compile = $compile;
  }));

  it('shows how long comment has been posted', function (){
    var createdOn = Date.now();
    scope.createdOn = createdOn;
    element = angular.element('<comment-elapsed-time created-on="{{createdOn}}"></comment-elapsed-time>');
    element = compile(element)(scope);
    scope.$digest();
    expect(element.find('comment-elapsed-time')).toBeDefined();
  });


});
