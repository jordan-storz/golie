function PatternCheckbox() {

  this.imports = [
    'patternSelect',
    'styleManager',
    'stateManager',
    'patternFetch',
    'favoritesManager'
  ];

  let $checkbox = $('#pattern-checkbox');

  this.initializeComponent = function() {
    let styleManager = this.styleManager;
    let patternSelect = this.patternSelect;
    let stateManager = this.stateManager;
    $checkbox.change(function(event) {
      if (this.checked) {
        patternSelect.show();
        styleManager.addPattern();
        stateManager.saveUIProperty('includePattern', true);
      } else {
        patternSelect.hide();
        styleManager.removePattern();
        stateManager.saveUIProperty('includePattern', false);
      }
    });
    this.retrieveState();
  };

  this.retrieveState = function() {
    let checked = this.stateManager.getUIState().includePattern;
    if (checked) {
      this.patternFetch.getFourPatternsAndStore().then(() => {
        if (!this.favoritesManager.showingFavorite) {
          app.styleManager.switchNextPattern();
        }
      });
      $checkbox.attr('checked', true);
      $checkbox.trigger('change');
    } else {
      this.patternFetch.getFourPatternsAndStore().then(() => {
        app.styleManager.switchInvisPattern();
      });
      $checkbox.attr('checked', false);
      $checkbox.trigger('change');
    }
  }

}
