var bootstrap = new Bootstrap();
var app = {};

bootstrap.go(app);
app.gridMaker.initialize(16);
app.gridMaker.renderGrid();
app.gameMaker.initialize();
app.gameMaker.createInstance();
app.stateManager.getLocalUIState();
app.stateManager.getLocalColors().then(() => {
  if (app.favoritesManager.showFavorite()) {
    app.styleManager.showFavorite();
    app.favoriteButton.beGold();

  } else {
    app.styleManager.switchNextColors();
  }
  app.runner.run();
  app.runner.pause();
})
