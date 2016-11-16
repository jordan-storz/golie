function FavoriteButton() {

  this.imports = [
    'favoritesManager'
  ];

  this.initializeComponent = function() {}

  let $button = $('#favorite-preset-btn');
  let $icon = $('#favorite-preset-btn i');


  this.initializeComponent = function() {
    $button.click(saveFavorite.bind(this));
  }

  this.beGold = function() {
    $icon.css('color', 'gold');
  }

  this.beNotGold = function() {
    $icon.css('color', 'white');
  }

  function saveFavorite() {
    this.favoritesManager.saveFavorite();
    let isCurrentFavorite = this.favoritesManager.senseFavorite();
    console.log(isCurrentFavorite);
    if (isCurrentFavorite) {
      this.beGold();
    }
  }
}
