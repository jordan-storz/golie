function LocalStorage() {

  this.imports = [
    'stateManager'
  ];

  this.initialize = (function(self) {

  })(this);

  this.get = function(property) {
    let result = window.localStorage.getItem(property);
    return result;
  }

  this.set = function(property, value) {
    window.localStorage.setItem(property, value);
  }

  this.getColors = function() {
    let colorsJSON = this.get('colors');
    let colors = JSON.parse(colorsJSON);
    return colors;
  }

  this.setColors = function(colorsArray) {
    let colorsJSON = JSON.stringify(colorsArray)
    this.set('colors', colorsJSON);
  }

  this.clearColors = function() {
    console.log('clearing colors');
    window.localStorage.setItem('colors', null);
  }



}
