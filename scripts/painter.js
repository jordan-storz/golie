function Painter() {

  this.imports = [
    'elementStorage',
    'instanceStorage',
    'globalStyles',
    'revitalizer'
  ];

  let colorScheme = [];

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
      opacity: 0.6
    });
  }

  function grabRandomColor() {
    let length = colorScheme.length;
    let random = Math.floor(Math.random() * (length - 1));
    return '#' + colorScheme[random];
  }


  this.paint = function() {
    let deadCellCount = 0;
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
            deadCellCount += 1;
          }
        });
      });
    });
    this.revitalizer.assessDeadCellCount(deadCellCount);
    deadCellCount = 0;
  }

  this.changeColors = function(colorArray) {
    colorScheme = colorArray;
  }
}
