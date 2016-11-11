function ElementStorage() {

  var imports = [];

  this.matrix = [];

  this.loadDimension = function(dimension) {
    for (let i = 0; i < dimension; i++) {
      this.matrix.push([]);
    }
  }

  this.pushToColumn = function(colNumber, $element) {
    this.matrix[colNumber].push($element);
  }

  this.getElements = () => this.matrix;
}
