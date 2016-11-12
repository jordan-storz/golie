function StyleStorage() {

  this.imports = [
    'colorFetch'
  ];

  let colorArrayStorage = [];
  let patternStorage = [];

  this.storeColor = function(colorArray) {
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
    patternStorage.push(patternUrl);
  }

  this.getStorage = () => patternStorage;

}
