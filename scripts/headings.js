function Headings() {

  this.imports = [];

  let $headings = $('hgroup');
  let lightened;
  let darkMode = false;

  let defaultColor = '#000';

  this.initialize = (function(self) {
    lightened = false;
  })(this);

  function toggleLightened() {
    lightened = !lightened;
  }

  this.toggleColor = function() {
    let color = lightened ? defaultColor : '#FFF';
    toggleLightened()
    $headings.animate({
      top: '10',
      color: color
    }, {duration: 200, queue: false});
  }

  this.darkModeOn = function() {
    defaultColor = '#aaa';
    this.toggleColor();
  }

  this.darkModeOff = function() {
    defaultColor = '#000';
    this.toggleColor();
  }
}
