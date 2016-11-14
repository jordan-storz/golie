function ColorSelect() {

  this.imports = [
    'styleManager'
  ];

  let $previous = $('#previous-color');
  let $next = $('#next-color');

  this.initialize = (function(self) {
    $next.click(nextColor.bind(self));
  })(this);

  function nextColor() {
    console.log('next color');
    this.styleManager.switchColors();
  }

}
