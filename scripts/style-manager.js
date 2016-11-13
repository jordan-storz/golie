function StyleManager() {

  this.imports = [
    'styleStorage',
    'painter'
  ];

  this.switchColors = function() {
    let next = this.styleStorage.giveNext();
    this.painter.changeColors(next);
  }

  this.switchPattern = function() {
    let url = this.styleStorage.getStorage();
    console.log(url);
    // $('body').css('background-image', `url(${url})`);
    $('#background-image').css('background-image', `url(${url})`);
  }

}
