function LocalStorage() {

  this.imports = [
    'stateManager',
    'favoritesPackager'
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
    window.localStorage.setItem('colors', null);
  }

  this.getUI = function() {
    let result;
    let stateJSON = window.localStorage.getItem('uiState');
    if (!stateJSON) {
      result = null;
    } else {
      result = JSON.parse(stateJSON);
    }
    return result;
  }

  this.setUI = function(state) {
    let stateJSON = JSON.stringify(state);
    window.localStorage.setItem('uiState', stateJSON);
  }

  this.refreshFavorites = function(favorites) {
    let favoritesJSON = this.favoritesPackager.favoritesToJSON(favorites);
    this.set('favorites', favoritesJSON);
  }

  this.getFavorites = function() {
    return this.get('favorites');
  }


}
