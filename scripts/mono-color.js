function MonoColor() {

  this.imports = [
    'styleStorage'
  ]

  this.createFourAndStore = function() {
    let colors = [1, 2, 3, 4];
    colors.map(count => [createColor()]).forEach((color) => {
      this.styleStorage.storeColor(color);
    });
  }

  this.createFourAndUnshift = function() {
    let colors = [1, 2, 3, 4];
    colors.map(count => [createColor()]).forEach((color) => {
      this.styleStorage.unshiftColor(color);
    });
  }

  function createColor() {
    let hexDigits = 'abcdef0123456';
    let result = '';
    for (let i = 0; i < 7; i++) {
      result += randomLetter(hexDigits);
    }
    return result;
  }

  function randomLetter(str) {
    let randomIndex = Math.floor(Math.random() * str.length);
    return str.charAt(randomIndex);
  }

}
