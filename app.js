var bootstrap = new Bootstrap();
var engine = {};

bootstrap.go(engine);
engine.gridMaker.initialize(16);
engine.gridMaker.renderGrid();
engine.gameMaker.initialize();
engine.gameMaker.createInstance();
engine.stateManager.getLocalUIState();
engine.stateManager.getLocalColors().then(() => {
  if (engine.favoritesManager.showFavorite()) {
    engine.styleManager.showFavorite();
    engine.favoriteButton.beGold();

  } else {
    engine.styleManager.switchNextColors();
  }
  engine.runner.run();
  // engine.runner.pause();
})
