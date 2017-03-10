import angular from 'angular';
import Home from './home/home';
import Login from './login/login';
import Main from './main/main';
import Create from './create/create';
import List from './list/list';

let componentModule = angular.module('app.components', [
  Home,
  Login,
  Main,
  Create,
  List
])

.name;

export default componentModule;
