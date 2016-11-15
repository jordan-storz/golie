function BackgroundImage() {

  this.imports = [];

  this.switchNewPattern = function(src) {
    let $old = $('#background-image');
    let $new = $(`<img id="background-image">`);
    $new.css({
      display: 'none',
      backgroundImage: `url(${src})`
    });
    $('body').append($new);
    $new.imagesLoaded({background: true}, function() {
      $old.remove();
      $new.fadeIn(300);
    });
  }

  this.switchInvisPattern = function(src) {
    let $old = $('#background-image');
    let $new = $(`<img id="background-image">`);
    $new.css({
      display: 'none',
      backgroundImage: `url(${src})`
    });
    $('body').append($new);
    $new.imagesLoaded({background: true}, function() {
      $old.remove();
    });
  }

  this.removePattern = function() {
    let $background = $('#background-image');
    $background.fadeOut();
  }

  this.addPattern = function() {
    let $background = $('#background-image');
    $background.fadeIn();
  }

  this.initializeComponent = function() {
  }

}
