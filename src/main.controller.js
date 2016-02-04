class MainCtrl {

  constructor($scope, $location, $window) {
    this.$scope     = $scope;
    this.$location  = $location;
    this.$window    = $window;

    this.listenForPageChange();
  }

  listenForPageChange(){
    this.$scope.$on('$viewContentLoaded', event => {

      if (this.$location.absUrl().indexOf('localhost:') === -1) {
        this.$window.ga('sendpageview', { page: this.$location.path() });
      }

    })

  }
}

export { MainCtrl }