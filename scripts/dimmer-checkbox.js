function DimmerCheckbox() {

  this.imports = [
    'styleManager',
    'stateManager'
  ];

  let $checkbox = $('#dimmer-checkbox');

  this.initializeComponent = function() {
    let styleManager = this.styleManager;
    let stateManager = this.stateManager;
    $checkbox.change(function(event) {
      if (this.checked) {
        styleManager.dim();
        stateManager.saveUIProperty('dim', true);
      } else {
        styleManager.brighten();
        stateManager.saveUIProperty('dim', false);
      }
    });
    this.retrieveState();
  };

  this.retrieveState = function() {
    let checked = this.stateManager.getUIState().dim;
    if (checked) {
      $checkbox.attr('checked', true);
      $checkbox.trigger('change');
    } else {
      $checkbox.attr('checked', false);
      $checkbox.trigger('change');
    }
  }

}
