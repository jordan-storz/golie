function FavoritesManager() {

  this.imports = [
    'favoritesPackager',
    'favoriteButton',
    'localStorage',
    'styleStorage'
  ];

  this.favorites = [];
  this.showingFavorite = false;

  this.initializeComponent = function() {
    this.retrieveLocalFavorites();
  }

  this.saveFavorite = function() {
    let current = this.getCurrent();
    this.favorites.push(current);
    this.localStorage.refreshFavorites(this.favorites);
  }

  this.removeFavorite = function() {
    let current = this.getCurrent();
    console.log(current);
    this.favorites.forEach((favorite, index) => {
      if (favorite.pattern === current.pattern) {
        for (let i = 0; i < favorite.colors.length; i++) {
          if (favorite.colors[i] !== current.colors[i]) {
            return;
          }
        }
        console.log('removing favorite');
        this.favorites.splice(index, 1);
        this.localStorage.refreshFavorites(this.favorites);
      }
    })
  }

  this.senseFavorite = function() {
    let current = this.getCurrent();
    return this.favorites.some(function(favorite) {
      let result = favorite.pattern == current.pattern;
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
    if (!localFavoritesJSON) {
      return;
    }
    let localFavorites = this.favoritesPackager.parseFavorites(localFavoritesJSON);
    this.favorites = this.favorites.concat(localFavorites);
  }

  this.getCurrent = function() {
    return this.favoritesPackager.packageCurrent();
  }

  this.getRandomFavorite = function() {
    let random = Math.floor(Math.random() * this.favorites.length);
    return this.favorites[random];
  }

  this.showFavorite = function() {
    let result = false;
    if (this.favorites.length) {
      result = coinFlip()
    }
    if (result) {
      this.showingFavorite = true;
    }
    return result;
  }

  function coinFlip() {
    let random = Math.floor(Math.random() * 10);
    return random > 1;
  }

}
