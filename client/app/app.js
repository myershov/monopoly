import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import io from 'socket.io-client'
import 'normalize.css';

const socket = io('http://localhost:8080');

socket.emit('chat message', 'testAzazazatestAzazazatestAzazaza testAzazaza testAzazaza');

socket.on('chat message', function(msg, user) {
    console.log(msg)
    console.log(msg)
    console.log(msg)
    console.log(msg)
});

angular.module('app', [
    uiRouter,
    Common,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
