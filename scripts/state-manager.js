function StateManager() {

  this.imports = [
    'localStorage',
    'colorFetch',
    'styleStorage'
  ];

  let stateUI = {
    dim: true,
    includePattern: true
  }

  this.getLocalColors = function() {
    let self = this;
    let localColors = this.localStorage.getColors();
    if (!!localColors) {
      localColors.forEach((colors) => {
        this.styleStorage.storeColor(colors);
      });
      replaceLocalColors.bind(self)();
      return Promise.resolve();
    } else {
      this.colorFetch.getFourAndLocalStore();
      return this.colorFetch.getFourSchemesAndStore();
    }
  }

  function replaceLocalColors() {
    this.localStorage.clearColors();
    this.colorFetch.getFourAndLocalStore();
  }

  this.getLocalUIState = function() {
    let localUI = this.localStorage.getUI();
    if (!localUI) {
      stateUI = {
        dim: false,
        includePattern: true
      }
    } else {
      stateUI = localUI;
    }
    return localUI;
  }

  this.setLocalUIState = function() {
    this.localStorage.setUI(stateUI);
  }

  this.getUIState = () => stateUI;

  this.saveUIProperty = function(property, val) {
    stateUI[property] = val;
    this.setLocalUIState();
  }

  this.initializeComponent = function() {
    this.getLocalUIState();
  }

}
