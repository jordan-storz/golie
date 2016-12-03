function StyleManager() {

  this.imports = [
    'styleStorage',
    'painter',
    'backgroundImage',
    'globalStyles',
    'headings',
    'favoritesManager',
    'favoriteButton',
    'colorFetch'
  ];

  this.showFavorite = function() {
    let favorite = this.favoritesManager.getRandomFavorite();
    let colors = favorite.colors;
    let pattern = favorite.pattern;
    this.styleStorage.setCurrentColors(colors);
    this.styleStorage.setCurrentPattern(pattern);
    this.painter.changeColors(colors);
    this.backgroundImage.switchNewPattern(pattern);
    this.painter.paint();
  }

  this.switchNextColors = function() {
    let next = this.styleStorage.giveNextColors();
    this.painter.changeColors(next);
    this.painter.paint();
    this.favoriteButton.senseFavorite();
  }

  this.switchPreviousColors = function() {
    let next = this.styleStorage.givePreviousColors();
    this.painter.changeColors(next);
    this.painter.paint();
    this.favoriteButton.senseFavorite();
  }

  this.switchNextPattern = function() {
    let url = this.styleStorage.giveNextPatternStorage();
    this.backgroundImage.switchNewPattern(url);
    this.favoriteButton.senseFavorite();
  }


  this.switchPreviousPattern = function() {
    let url = this.styleStorage.givePreviousPatternStorage();
    this.backgroundImage.switchNewPattern(url);
    this.favoriteButton.senseFavorite();
  }

  this.switchInvisPattern = function() {
    let url = this.styleStorage.giveNextPatternStorage();
    this.backgroundImage.switchInvisPattern(url);
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
    this.headings.darkModeOff();
    this.headings.toggleColor();
  }

  this.dim = function() {
    this.globalStyles.setBackgroundColor('#666');
    this.painter.paint();
    $('.cell').animate({
      borderColor: '#222'
    }, {duration: 500, queue: false});
    this.headings.darkModeOn();
    this.headings.toggleColor();
  }

  this.showTitle = function () {
    this.headings.showTitle();
  }

  this.hideTitle = function () {
    this.headings.hideTitle();
  }
}
