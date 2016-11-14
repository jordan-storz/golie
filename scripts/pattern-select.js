function PatternSelect() {

  this.imports = [
    'styleManager'
  ];

  let $next = $('#next-pattern');
  let $previous = $('#previous-pattern');

  this.initialize = (function(self) {
    $next.click(nextPattern.bind(self));
    $previous.click(previousPattern.bind(self));
  })(this);

  function nextPattern() {
    this.styleManager.switchNextPattern();
  }

  function previousPattern() {
    this.styleManager.switchPreviousPattern();
  }

}
