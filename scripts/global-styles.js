function GlobalStyles() {

  this.imports = [];

  var backgroundColor = 'lightgray';

  this.getBackgroundColor = () => backgroundColor;

  this.setBackgroundColor = (color) => {
    console.log(backgroundColor);
    backgroundColor = color;
  }

}
