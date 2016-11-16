function ToggleMenuButton() {

  this.imports = [
    'pauseButton',
    'header',
    'headings'
  ];

  this.activated = false;

  let $button = $('.menu-toggle');

  this.initialize = (function(self) {
    self.activated = false;
    $button.click(onClick.bind(self));
    $('document').ready(onClick.bind(self));
  })(this);

  function onClick(event) {
    if (!this.activated) {
      moveDown();
      this.pauseButton.moveDown();
      this.header.activate();
    } else {
      moveUp();
      this.pauseButton.moveUp();
      this.header.deactivate();
    }
    this.headings.toggleColor();
    this.toggleActivated();
    this.toggleText();
  }

  function moveDown() {
    $button.animate({
      top: '90',
      // height: '25',
      paddingTop: '0'
    }, {duration: 200, queue: false});
  }

  function moveUp() {
    $button.animate({
      top: '-12',
      // height: '35',
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
