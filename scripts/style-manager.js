function StyleManager() {

  this.imports = [
    'styleStorage',
    'painter',
    'backgroundImage',
    'globalStyles',
    'headings'
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

  this.brighten = function() {
    this.globalStyles.setBackgroundColor('lightgray');
    this.painter.paint();
    $('.cell').animate({
      borderColor: '#aaa'
    }, {duration: 500, queue: false});
    this.headings.darkModeOn();
    this.headings.toggleColor();
  }

  this.dim = function() {
    this.globalStyles.setBackgroundColor('#101');
    this.painter.paint();
    $('.cell').animate({
      borderColor: '#222'
    }, {duration: 500, queue: false});
    this.headings.darkModeOn();
    this.headings.toggleColor();
  }
}
