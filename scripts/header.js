function Header() {

  this.imports = [];

  this.activated = false;

  let $header = $('header');

  this.initialize = (function(self) {
  })(this);

  this.activate = function() {
    $header.animate({
      opacity: 1
    }, {duration: 300, queue: false});
  }

  this.deactivate = function() {
    $header.animate({
      opacity: 0
    }, {duration: 300, queue: false});
  }
}
