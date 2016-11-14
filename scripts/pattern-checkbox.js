function PatternCheckbox() {

  this.imports = [
    'patternSelect',
    'styleManager'
  ];

  let $checkbox = $('#pattern-checkbox');

  this.initialize = (function(self) {
    $checkbox.change(function(event) {
      if (this.checked) {
        self.patternSelect.show();
        self.styleManager.addPattern();
      } else {
        self.patternSelect.hide();
        self.styleManager.removePattern();
      }
    });
  })(this);

}
