function FavoritesPackager() {

  this.imports = [
    'styleStorage',
    'patternSelect'
  ];

  this.packageCurrent = function() {
    let colors = this.styleStorage.giveCurrentColors();
    let pattern = '';
    if (!this.patternSelect.isDisabled()) {
      pattern = this.styleStorage.giveCurrentPattern();
    }
    return {
      colors: colors,
      pattern: pattern
    }
  }

  this.favoritesToJSON = function(favorites) {
    return JSON.stringify(favorites);
  }

  this.parseFavorites = function(favoritesJSON) {
    return JSON.parse(favoritesJSON);
  }

}
