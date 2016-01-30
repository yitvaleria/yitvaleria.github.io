const angular = require('angular');

import { TrialCtrl }  from "./trial.controller";
import { config }     from "./app.config";

require("../node_modules/angular-material/angular-material.css");
require("./style.css");


angular
  .module('YIT',[
      require('angular-material'),
      require('angular-route'),
      require('angular-animate')
  ])
  .controller('TrialCtrl',TrialCtrl)
  .config(config)

;

config.$inject    = ['$routeProvider', '$locationProvider', '$mdIconProvider', '$mdThemingProvider'];
