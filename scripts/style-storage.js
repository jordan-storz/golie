function StyleStorage() {

  this.imports = [
    'colorFetch',
    'patternFetch'
  ];

  let colorArrayStorage = [];
  let patternStorage = [];

  let currentColorIndex = 0;
  let currentPatternIndex = 0;

  this.storeColor = function(colorArray) {
    colorArrayStorage.push(colorArray);
  }

  this.unshiftColor = function(colorArray) {
    colorArrayStorage.unshift(colorArray);
  }

  this.giveNextColors = function() {
    currentColorIndex += 1;
    let result = colorArrayStorage[currentColorIndex];
    if (currentColorIndex > (colorArrayStorage.length - 3)) {
      this.colorFetch.getFourSchemesAndStore();
    }
    return result;
  }

  this.giveCurrentColors = function() {
    let result = colorArrayStorage[currentColorIndex];
    return result;
  }

  this.givePreviousColors = function() {
    currentColorIndex -= 1;
    let result = colorArrayStorage[currentColorIndex];
    if (currentColorIndex < 1) {
      currentColorIndex = 4;
      this.colorFetch.getFourSchemesAndUnshift();
    }
    return result;
  }

  this.storePattern = function(patternUrl) {
    patternStorage.push(patternUrl);
  }

  this.unshiftPattern = function(patternUrl) {
    patternStorage.unshift(patternUrl);
  }

  this.giveNextPatternStorage = function() {
    currentPatternIndex += 1;
    let result = patternStorage[currentPatternIndex];
    if (currentPatternIndex > (patternStorage.length - 3)) {
      this.patternFetch.getFourPatternsAndStore();
    }
    return result;
  }

  this.giveCurrentPattern = function() {
    let result = patternStorage[currentPatternIndex];
    return result;
  }

  this.givePreviousPatternStorage = function() {
    currentPatternIndex -= 1;
    let result = patternStorage[currentPatternIndex];
    if (currentPatternIndex < 1) {
      currentPatternIndex = 4;
      this.patternFetch.getFourPatternsAndUnshift();
    }
    return result;
  }

  this.embedFavorite = function(favorite) {
    let colors = favorite.colors;
    let pattern = favorite.pattern;
    console.log(pattern);
    console.log(colors);
  }

}
