'use strict';

// Declare app level module which depends on views, and components
var propertyMaster = angular.module('protoBuild', [
  'ngRoute',
  'ui.router',
  'protoBuild.propertyForm',
  'protoBuild.view2'
]);

propertyMaster.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state("propertyForm", {
            url:'/propertyForm',
            templateUrl: 'propertyForm/propertyForm.html',
            controller: 'propertyFormCtl',
            data: {
                selectedTab: 0
            }
        })
        .state("view2", {
            url:'/view2',
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl',
            data: {
                selectedTab: 1
            }
        });
});

propertyMaster.run(['$state', function ($state) {}]);

propertyMaster.controller('tabCtrl', function($scope, $route, $state, $log) {
    var self = this;

    self.currentTab = 0;

    $scope.$on('$stateChangeSuccess', function(event, toState) {
        self.currentTab = toState.data.selectedTab;
    });
/*
    $rootScope.$on('$viewContentLoading',
        function(event, viewConfig){
            console.log('content loading: ', event, viewConfig);
        });*/

    //var currentTab = $state.data.selectedTab;


});

propertyMaster.factory('propertyFactory', function(){
    var property = {};

    return property;
});

propertyMaster.value('PROPERTY_TYPES', [
  {id: 0, name: 'Detatched House'},
  {id: 1, name: 'Semi'},
  {id: 2, name: 'Bungalow'},
  {id: 3, name: 'Flat'},
  {id: 4, name: 'Studio'}
]);

