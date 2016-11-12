function StyleStorage() {

  this.imports = [
    'colorFetch'
  ];

  let colorArrayStorage = [];
  let patternStorage;

  this.store = function(colorArray) {
    colorArrayStorage.push(colorArray);
  }

  this.giveNext = function() {
    let next = colorArrayStorage.pop();
    if (colorArrayStorage.length < 2) {
      this.colorFetch.getFourSchemesAndStore();
    }
    return next;
  }

  this.storePattern = function(patternUrl) {
    patternStorage = patternUrl;
  }

  this.getStorage = () => patternStorage;

}
