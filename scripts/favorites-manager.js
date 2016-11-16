function FavoritesManager() {

  this.imports = [
    'favoritesPackager',
    'favoriteButton',
    'localStorage'
  ];

  this.favorites = [];

  this.saveFavorite = function() {
    let current = this.getCurrent();
    this.favorites.push(current);
    this.localStorage.refreshFavorites(this.favorites);
  }

  this.senseFavorite = function() {
    let current = this.getCurrent();
    return this.favorites.some(function(favorite) {
      let result = favorite.pattern === current.pattern;
      if (result) {
        for (let i = 0; i < favorite.colors.length; i++) {
          let colorScheme = favorite.colors[i];
          result = current.colors.indexOf(colorScheme) !== -1;
          if (!result) break;
        }
      }
      return result;
    });
  }

  this.retrieveLocalFavorites = function() {
    let localFavoritesJSON = this.localStorage.getFavorites();
    let localFavorites = this.favoritesPackager.parseFavorites(localFavoritesJSON);
    this.favorites = this.favorites.concat(localFavorites);
  }

  this.getCurrent = function() {
    return this.favoritesPackager.packageCurrent();
  }



}
