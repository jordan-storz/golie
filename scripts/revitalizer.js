 function Revitalizer() {

  this.imports = [
    'gameMaker',
    'environmentInfo'
  ];

  let limit;
  let deadCellCounts = [0, 0, 0];

  function calculateLimit(count) {
    let part = count * 0.9;
    return Math.floor(part);
  }

  this.initialize = function() {
    let dimension = this.environmentInfo.getDimension();
    let totalCellCount = dimension * dimension;
    limit = calculateLimit(totalCellCount);
  }

  this.assessDeadCellCount = function(count) {
    if (count >= limit) {
      this.revitalize();
    }
  }

  this.revitalize = function() {
    deadCellCounts = [0, 0, 0];
    this.gameMaker.createInstance();
  }
}
