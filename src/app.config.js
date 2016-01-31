function config($routeProvider, $locationProvider, $mdIconProvider,$mdThemingProvider){

  $mdIconProvider.defaultFontSet( 'fontawesome' );

  $mdThemingProvider.theme('default')
      .primaryPalette('light-green')
      .accentPalette('orange');

  $routeProvider
      .when('/home', {
        template: require('./pages/home.html')
      })
      .when('/lessons', {
        template: require('./pages/lessons.html')
      })
      .when('/terms', {
        template: require('./pages/terms.html')
      })
      .when('/trial', {
        template: require('./pages/trial.html'),
        controller: "TrialCtrl as trial"
      })
      .when('/trialok', {
        template: require('./pages/trialok.html')
      })
      .when('/trialko', {
        template: require('./pages/trialko.html')
      })
      .otherwise({
        redirectTo: '/home'
      })
  ;



}

export { config }