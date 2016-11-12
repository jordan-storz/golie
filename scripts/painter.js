function Painter() {

  this.imports = [
    'elementStorage',
    'instanceStorage',
    'globalStyles'
  ];

  let colorScheme = [];

  this.getColorScheme = () => colorScheme;

  function clearBackgrounds($cell) {
    let backgroundColor = this.globalStyles.getBackgroundColor();
    $cell.css({
      backgroundColor: backgroundColor,
      opacity: 1
    });
  }

  function addBackground($cell, color) {
    $cell.css({
      backgroundColor: color,
      opacity: 0.5
    });
  }

  function grabRandomColor() {
    let length = colorScheme.length;
    let random = Math.floor(Math.random() * (length - 1));
    return '#' + colorScheme[random];
  }

  function process$Cell() {}

  this.paint = function() {
    let instances = this.instanceStorage.getStorage();
    instances.forEach((instance) => {
      let matrix = instance.lifeMatrix;
      matrix.forEach((col, x) => {
        col.forEach((cell, y) => {
          let $cell = this.elementStorage.getElements()[x][y];
          if (cell === 1) {
            let color = grabRandomColor();
            addBackground($cell, color);
          } else {
            clearBackgrounds.apply(this, [$cell]);
          }
        });
      });
    });
  }

  this.changeColors = function(colorArray) {
    colorScheme = colorArray;
  }





}
