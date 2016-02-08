class CookiesCtrl {

  constructor($mdToast,$window) {
    this.$mdToast = $mdToast;
    this.$window  = $window;
  }

  closeToast(){
    if (this.$window.localStorage) this.$window.localStorage.setItem('usecookies','use');
    this.$mdToast.hide();
  }
}

export { CookiesCtrl }