function StyleManager() {

  this.imports = [
    'styleStorage',
    'painter',
    'backgroundImage'
  ];

  this.switchColors = function() {
    let next = this.styleStorage.giveNext();
    this.painter.changeColors(next);
  }

  this.switchPattern = function() {
    let url = this.styleStorage.getStorage();
    // $('#background-image').css('background-image', `url(${url})`);
    this.backgroundImage.switchNewPattern(url);
  }

}
