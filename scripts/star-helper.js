function StarHelper() {

  this.imports = [
    'stateManager'
  ];

  this.initializeComponent = function() {
    let state = this.stateManager.getUIState();
    if (state.useCount < 2) {
      this.addTooltip();
      this.stateManager.saveUIProperty('useCount', state.useCount + 1);
    }
  }

  this.addTooltip = function() {
    let $a = $('#favorite-preset-btn');
    let message = 'Mark a visual as favorite and we\'ll keep it in rotation!';
    $a.addClass('tooltipped');
    $a.attr({
      'data-position': 'left',
      'data-delay': 10,
      'data-tooltip': message
    });
  }

}
