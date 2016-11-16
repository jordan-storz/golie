function FavoriteButton() {

  this.imports = [
    'favoritesManager'
  ];

  let $button = $('#favorite-preset-btn');
  let $icon = $('#favorite-preset-btn i');


  this.initializeComponent = function() {
    let self = this;
    $button.click(saveFavorite.bind(this));
  }

  this.beGold = function() {
    $icon.css('color', 'gold');
  }

  this.beNotGold = function() {
    $icon.css('color', 'white');
  }

  this.senseFavorite = function() {
    console.log('sensing favorite');
    let isCurrentFavorite = this.favoritesManager.senseFavorite();
    if (isCurrentFavorite) {
      console.log('this is a favorite');
      this.beGold();
    } else {
      this.beNotGold();
    }
  }

  function saveFavorite() {
    this.favoritesManager.saveFavorite();
    this.senseFavorite();
  }


}
