function FavoritesManager() {

  this.imports = [
    'favoritesPackager',
    'favoriteButton',
    'localStorage'
  ];

  this.favorites = [];

  this.saveFavorite = function() {
    let current = this.favoritesPackager.packageCurrent();
    this.favorites.push(current);
    this.localStorage.refreshFavorites(this.favorites);
  }

}
