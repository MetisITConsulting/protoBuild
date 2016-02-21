'use strict';

angular.module('protoBuild.view2', ['ngRoute'])
/*
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])*/

.controller('View2Ctrl', [function(PROPERTY_TYPES) {
  var property = this;
  property.propertyTypes = PROPERTY_TYPES;

  property.master = {};

  property.update = function(edit){
    property.master = angular.copy(edit);
  }

}]);