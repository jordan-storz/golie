function Runner() {

  this.imports = [
    'gameMaker',
    'lifeTransformer',
    'painter',
    'revitalizer'
  ];

  function turn() {
    this.lifeTransformer.transformInstances();
    this.painter.paint();
  }

  let self = this;
  let paused = false;

  this.run = function() {
    setInterval(function() {
      if (!paused) {
        return turn.apply(self);
      }
    }, 500)
  }

  this.pause = () => paused = true;

  this.resume = () => paused = false;

}
