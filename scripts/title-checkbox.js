function TitleCheckbox() {

  this.imports = [
    'styleManager',
    'stateManager'
  ];

  let $checkbox = $('#title-checkbox');

  this.initializeComponent = function() {
    let styleManager = this.styleManager;
    let stateManager = this.stateManager;
    $checkbox.change(function(event) {
      if (this.checked) {
        styleManager.hideTitle();
        stateManager.saveUIProperty('hideTitle', true);
      } else {
        styleManager.showTitle();
        stateManager.saveUIProperty('hideTitle', false);
      }
    });
    this.retrieveState();
  };

  this.retrieveState = function() {
    let hidden = this.stateManager.getUIState().hideTitle;
    if (hidden) {
      $checkbox.attr('checked', true);
      $checkbox.trigger('change');
    } else {
      $checkbox.attr('checked', false);
      $checkbox.trigger('change');
    }
  }

}
