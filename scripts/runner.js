function Runner() {

  this.imports = [
    'gameMaker',
    'lifeTransformer',
    'painter'
  ];

  function turn() {
    this.lifeTransformer.transformInstances();
    this.painter.paint();
  }

  let self = this;

  this.run = function() {
    setInterval(function() {
      return turn.apply(self);
    }, 500)
  }

}
