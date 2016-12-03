function Headings() {

  this.imports = [
    'stateManager'
  ];

  let $headings = $('hgroup');
  let lightened;
  let hidden;
  let darkMode = false;

  let defaultColor = '#000';

  this.initializeComponent = function() {
    let dim = this.stateManager.getUIState().dim;
    hidden = this.stateManager.getUIState().hideTitle;
    if (hidden) {
      this.hideTitle();
    } else {
      this.showTitle();
    }
  }

  function toggleLightened() {
    lightened = !lightened;
  }

  this.toggleColor = function() {
    let color = lightened ? hidden ? 'rgba(0,0,0,0)' : defaultColor : '#FFF';
    toggleLightened();
    $headings.animate({
      top: '10',
      color: color
    }, {duration: 200, queue: false});
  }

  this.darkModeOn = function() {
    defaultColor = '#aaa';
    this.toggleColor();
  }

  this.darkModeOff = function() {
    defaultColor = '#000';
    this.toggleColor();
  }

  this.showTitle = function () {
    hidden = false;
  }

  this.hideTitle = function () {
    hidden = true;
  }
}
