function GameMaker() {

  this.imports = [
    'instanceStorage',
    'environmentInfo',
    'stylist'
  ];

  let dimension;

  this.initialize = function() {
    dimension = this.environmentInfo.getDimension();
  }

  this.createInstance = function() {
    let matrix = [];
    let color = this.stylist.pickColor();
    for (let i = 0; i < dimension; i++) {
      matrix.push([]);
      for (let j = 0; j < dimension; j++) {
        let alive = coinToss();
        let lifeStatus = alive ? 1 : 0;
        matrix[i].push(lifeStatus)
      }
    }
    let instance = {
      lifeMatrix: matrix,
      color: color
    }
    this.instanceStorage.store(instance);
  }

  function coinToss() {
    let random = Math.floor(Math.random() * 10);
    return random > 5;
  }

}
