function ColorSelect() {

  this.imports = [
    'styleManager',
    'painter'
  ];

  let $previous = $('#previous-color');
  let $next = $('#next-color');

  this.initializeComponent = function() {
    $next.click(nextColor.bind(this));
    $previous.click(previousColor.bind(this));
  }

  function nextColor() {
    this.styleManager.switchNextColors();
  }

  function previousColor() {
    this.styleManager.switchPreviousColors();
  }

}
