function GridMaker() {

  this.imports = [
    'elementStorage',
    'environmentInfo'
  ];

  var dimension = 4;

  this.initialize = function(size) {
    dimension = size;
    this.elementStorage.loadDimension(dimension)
    this.environmentInfo.setDimension(dimension);
  }

  var $body = $('body');
  var $main = $('main');

  function make$Grid() {
    $grid = $(`<div class="grid"></div>`);
    apply$GridStyles();
  }

  function cellStyles() {
    let length = $body.width() / dimension;
    let height = (100 / dimension) + '%';
    return {
      width: '100%',
      height: height
    }
  }

  function colStyles() {
    var width = (100 / dimension) + '%';
    return {
      width: width,
      height: '100%',
      display: 'flex',
      flexFlow: 'column nowrap',
    }
  }

  function apply$CellStyles($cell) {
    $cell.css(cellStyles());
  }

  function apply$ColStyles($col) {
    $col.css(colStyles());
  }

  function makeColumn() {
    let $column = $(`<div class="column"></div>`);
    apply$ColStyles($column);
    return $column;
  }

  this.insert$Cells = function() {
    for (var i = 0; i < dimension; i++) {
      let $column = makeColumn();
      for (var j = 0; j < dimension; j++) {
        let $cell = $(`<div class="cell z-depth-3"></div>`);
        apply$CellStyles($cell);
        $column.append($cell);
        this.elementStorage.pushToColumn(i, $cell);
      }
      $main.append($column);
    }
  }

  this.storeCell = function($cell) {
    this.elementStorage.pushToColumn($cell);
  }

  this.renderGrid = function() {
    this.insert$Cells();
  }
}
