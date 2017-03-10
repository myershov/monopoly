import angular from 'angular';
import uiRouter from 'angular-ui-router';
import listComponent from './list.component';

let listModule = angular.module('list', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('list', {
      url: '/list',
      component: 'list'
    });
})

.component('list', listComponent)
  
.name;

export default listModule;
