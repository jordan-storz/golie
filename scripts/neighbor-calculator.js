function NeighborCalculator() {

  this.imports = [
    'instanceStorage',
    'environmentInfo'
  ];

  function possibleNeighbors(x, y) {
     return [
       [x - 1, y - 1],
       [x, y - 1],
       [x + 1, y - 1],
       [x - 1, y],
       [x + 1, y],
       [x - 1, y + 1],
       [x, y + 1],
       [x + 1, y + 1]
    ];
  }

  this.existsOnGrid = function(xx, yy) {
    let dimension = this.environmentInfo.getDimension();
    let xxPass = (xx >= 0 && xx < dimension);
    let yyPass = (yy >= 0 && yy < dimension);
    return xxPass && yyPass;
  }


  this.aliveNeighbors = function(instance, x, y) {
    return this.allNeighbors(instance, x, y).filter((neighbor) => {
      return neighbor === 1
    }).length;
  }

  this.allNeighbors = function(instance, x, y) {
    let matrix = instance.lifeMatrix;
    let result = [];
    possibleNeighbors(x, y).forEach((neighbor) => {
      var xx = neighbor[0];
      var yy = neighbor[1];
      if (this.existsOnGrid(xx, yy)) {
        result.push(matrix[xx][yy]);
      }
    });
    return result;
  }
}
