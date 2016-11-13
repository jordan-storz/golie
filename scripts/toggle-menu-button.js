function ToggleMenuButton() {

  this.imports = [
    'pauseButton'
  ];

  this.activated = false;

  let $button = $('.menu-toggle');

  this.initialize = (function(self) {
    this.activated = false;
    $button.click(onClick.bind(self));
  })(this);

  function onClick(event) {
    if (!this.activated) {
      moveDown();
      this.pauseButton.moveDown();
    } else {
      moveUp();
      this.pauseButton.moveUp();
    }
    this.toggleActivated();
    this.toggleText();
  }

  function moveDown() {
    $button.animate({
      top: '154',
      height: '25',
      paddingTop: '0'
    }, {duration: 200, queue: false});
  }

  function moveUp() {
    $button.animate({
      top: '-12',
      height: '35',
      paddingTop: '15'
    }, {duration: 200, queue: false});
  }

  this.toggleText = function() {
    if (!this.activated) {
      $button.text('show controls');
    } else {
      $button.text('hide controls');
    }
  }

  this.toggleActivated = function() {
    this.activated = !this.activated;
  }

}
