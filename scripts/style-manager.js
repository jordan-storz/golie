function StyleManager() {

  this.imports = [
    'styleStorage',
    'painter'
  ];

  this.switchColors = function() {
    let next = this.styleStorage.giveNext();
    this.painter.changeColors(next);
  }

}
