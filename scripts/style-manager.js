function StyleManager() {

  this.imports = [
    'styleStorage',
    'painter',
    'backgroundImage'
  ];

  this.switchNextColors = function() {
    let next = this.styleStorage.giveNext();
    this.painter.changeColors(next);
    this.painter.paint();
  }

  this.switchPreviousColors = function() {
    let next = this.styleStorage.givePrevious();
    this.painter.changeColors(next);
    this.painter.paint();
  }

  this.switchPattern = function() {
    let url = this.styleStorage.getPatternStorage();
    // $('#background-image').css('background-image', `url(${url})`);
    this.backgroundImage.switchNewPattern(url);
  }

}
