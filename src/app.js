const angular = require('angular');

import { MainCtrl }     from "./main.controller";
import { TrialCtrl }    from "./trial.controller";
import { CookiesCtrl }  from "./cookies.controller";
import { config }       from "./app.config";

require("../node_modules/angular-material/angular-material.css");
require("./style.css");


angular
  .module('YIT',[
      require('angular-material'),
      require('angular-route'),
      require('angular-animate')
  ])
  .controller('MainCtrl',MainCtrl)
  .controller('TrialCtrl',TrialCtrl)
  .controller('CookiesCtrl', CookiesCtrl)
  .config(config)

;

MainCtrl.$inject    = ['$scope', '$location', '$window', '$document', '$mdToast'];
CookiesCtrl.$inject = ['$mdToast','$window'];
config.$inject      = ['$routeProvider', '$locationProvider', '$mdIconProvider', '$mdThemingProvider'];
