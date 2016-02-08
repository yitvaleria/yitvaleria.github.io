class MainCtrl {

  constructor($scope, $location, $window, $document, $mdToast) {
    this.$scope     = $scope;
    this.$location  = $location;
    this.$window    = $window;
    this.$document  = $document;
    this.$mdToast   = $mdToast;


    this.listenForPageChange();
    this.showCookieWarning();
  }

  listenForPageChange(){
    this.$scope.$on('$viewContentLoaded', event => {

      if (this.$location.absUrl().indexOf('localhost:') === -1) {
        this.$window.ga('send','pageview', { page: this.$location.path() });
      }

    })

  }
  showCookieWarning(){
    if (this.$window.localStorage && this.$window.localStorage.getItem('usecookies') === 'use') return;
    this.$mdToast.show({
      controller: 'CookiesCtrl as toast',
      template: require('./pages/cookies.html'),
      parent : this.$document[0].querySelector('#toastBounds'),
      position:  "top",
      hideDelay: false
    });
  }
}

export { MainCtrl }