function ColorSelect() {

  this.imports = [
    'styleManager',
    'painter'
  ];

  let $previous = $('#previous-color');
  let $next = $('#next-color');

  this.initialize = (function(self) {
    $next.click(nextColor.bind(self));
    $previous.click(previousColor.bind(self));
  })(this);

  function nextColor() {
    this.styleManager.switchNextColors();
  }

  function previousColor() {
    this.styleManager.switchPreviousColors();
  }

}
