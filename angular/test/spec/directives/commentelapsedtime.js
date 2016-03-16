'use strict';

describe('Directive: commentElapsedTime', function () {

  // load the directive's module
  beforeEach(module('commentElapsedTime'));

  var element, scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    element = angular.element('<comment-elapsed-time>hola</comment-elapsed-time>');
    element = $compile(element)(scope);
    scope.$digest();
  }));

  it('should render the author', function (){
    expect(element.find('h2').html()).toBe('Santiago');
  });

  it('should render the msg', function (){
    expect(element.find('span').html()).toBe('hola');
  });
});
