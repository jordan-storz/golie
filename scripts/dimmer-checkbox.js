function DimmerCheckbox() {

  this.imports = [
    'styleManager',
    'stateManager'
  ];

  let $checkbox = $('#dimmer-checkbox');

  this.initialize = (function(self) {
    $checkbox.change(function(event) {
      if (this.checked) {
        self.styleManager.dim();
        self.stateManager.saveUIProperty('dim', true);
      } else {
        self.styleManager.brighten();
        self.stateManager.saveUIProperty('dim', false);
      }
    });
  })(this);
}
