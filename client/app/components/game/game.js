import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gameComponent from './game.component';

let gameModule = angular.module('game', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('game', {
      url: '/game',
      component: 'game'
    });
})

.component('game', gameComponent)
  
.name;

export default gameModule;
