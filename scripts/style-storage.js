function StyleStorage() {

  this.imports = [
    'colorFetch'
  ];

  let colorArrayStorage = [];
  let patternStorage = [];

  let current = 0;

  this.storeColor = function(colorArray) {
    colorArrayStorage.push(colorArray);
  }

  this.unshiftColor = function(colorArray) {
    colorArrayStorage.unshift(colorArray);
  }

  this.giveNext = function() {
    current += 1;
    let result = colorArrayStorage[current];
    if (current > (colorArrayStorage.length - 3)) {
      this.colorFetch.getFourSchemesAndStore();
    }
    return result;
  }

  this.givePrevious = function() {
    current -= 1;
    let result = colorArrayStorage[current];
    if (current < 1) {
      current = 4;
      this.colorFetch.getFourSchemesAndUnshift();
    }
    return result;
  }

  this.storePattern = function(patternUrl) {
    patternStorage.push(patternUrl);
  }

  this.getPatternStorage = () => patternStorage;

}
