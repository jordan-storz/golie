function GlobalStyles() {

  this.imports = [];

  var backgroundColor = '#efefee';

  this.getBackgroundColor = () => backgroundColor;

  this.setBackgroundColor = (color) => {
    backgroundColor = color;
  }
}
