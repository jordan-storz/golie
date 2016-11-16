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
    let isCurrentFavorite = this.favoritesManager.senseFavorite();
    if (isCurrentFavorite) {
      this.beGold();
    } else {
      this.beNotGold();
    }
  }

  function saveFavorite() {
    if ($icon.css('color') === 'rgb(255, 215, 0)') {
      this.favoritesManager.removeFavorite();
    } else {
      this.favoritesManager.saveFavorite();
    }
    this.senseFavorite();
  }


}
