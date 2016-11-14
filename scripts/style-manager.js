function StyleManager() {

  this.imports = [
    'styleStorage',
    'painter',
    'backgroundImage'
  ];

  this.switchNextColors = function() {
    let next = this.styleStorage.giveNextColors();
    this.painter.changeColors(next);
    this.painter.paint();
  }

  this.switchPreviousColors = function() {
    let next = this.styleStorage.givePreviousColors();
    this.painter.changeColors(next);
    this.painter.paint();
  }

  this.switchNextPattern = function() {
    let url = this.styleStorage.giveNextPatternStorage();
    // $('#background-image').css('background-image', `url(${url})`);
    this.backgroundImage.switchNewPattern(url);
  }

  this.switchPreviousPattern = function() {
    let url = this.styleStorage.givePreviousPatternStorage();
    this.backgroundImage.switchNewPattern(url);
  }

  this.removePattern = function() {
    this.backgroundImage.removePattern();
  }

  this.addPattern = function() {
    this.backgroundImage.addPattern();
  }
}
