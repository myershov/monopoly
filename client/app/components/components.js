import angular from 'angular';
import Home from './home/home';
import Login from './login/login';
import Main from './main/main';

let componentModule = angular.module('app.components', [
  Home,
  Login,
  Main
])

.name;

export default componentModule;
