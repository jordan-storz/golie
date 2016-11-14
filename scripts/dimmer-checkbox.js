function DimmerCheckbox() {

  this.imports = [
    'styleManager'
  ];

  let $checkbox = $('#dimmer-checkbox');

  this.initialize = (function(self) {
    $checkbox.change(function(event) {
      if (this.checked) {
        self.styleManager.dim();
      } else {
        self.styleManager.brighten();
      }
    });
  })(this);

  function onChange() {

  }

}
