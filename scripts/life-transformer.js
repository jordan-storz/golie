function LifeTransformer() {

  this.imports = [
    'instanceStorage',
    'neighborCalculator'
  ];

  this.shouldLive = function(val, livingNeighbors) {
    let result;
    let n = livingNeighbors;
    if (val === 1) {
      result = (n >= 2 && n <= 3);
    } else {
      result = (n === 3);
    }
    return result;
  }

  this.getNext = function(instance) {
    let matrix = instance.lifeMatrix;
    return matrix.map((col, x) => {
      return col.map((cell, y) => {
        let aliveNeighbors = this.neighborCalculator.aliveNeighbors(instance, x, y);
        let shouldLive = this.shouldLive(cell, aliveNeighbors);
        return shouldLive ? 1 : 0;
      });
    });
  }

  this.transformInstances = function() {
    let instances = this.instanceStorage.getStorage();
    instances.forEach((instance) => {
      let nextMatrix = this.getNext(instance);
      instance.lifeMatrix = nextMatrix;
    });
  }

}
