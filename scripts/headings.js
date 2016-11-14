function Headings() {

  this.imports = [];

  let $headings = $('hgroup');
  let lightened;

  this.initialize = (function(self) {
    lightened = false;
  })(this);

  function toggleLightened() {
    lightened = !lightened;
  }

  this.toggleColor = function() {
    let color = lightened ? '#000' : '#FFF';
    toggleLightened()
    $headings.animate({
      top: '10',
      color: color
    }, {duration: 200, queue: false});
  }



}
