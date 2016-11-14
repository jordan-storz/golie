function PatternSelect() {

  this.imports = [
    'styleManager'
  ];

  this.disabled = false;

  let $container = $('#pattern-select-container');
  let $next = $('#next-pattern');
  let $previous = $('#previous-pattern');

  this.initialize = (function(self) {
    $next.click(nextPattern.bind(self));
    $previous.click(previousPattern.bind(self));
  })(this);

  function nextPattern() {
    if (this.disabled) {
      return;
    } else {
      this.styleManager.switchNextPattern();
    }
  }

  function previousPattern() {
    if (this.disabled) {
      return;
    } else {
      this.styleManager.switchPreviousPattern();
    }
  }

  this.show = function() {
    this.toggledDisabled();
    $container.animate({
      opacity: 1
    }, {queue: false});
    $container.removeClass('disabled-mode');
    this.toggleCursor();
  }

  this.hide = function() {
    this.toggledDisabled();
    $container.animate({
      opacity: 0.4
    }, {queue: false});
    $container.addClass('disabled-mode');
    this.toggleCursor();
  }

  this.toggledDisabled = function() {
    this.disabled = !this.disabled;
  }

  this.toggleCursor = function() {
    if (this.disabled) {
      $('#pattern-select-container *').css('cursor', 'default');
    } else {
      $('#pattern-select-container *').css('cursor', 'auto');
    }
  }

}
