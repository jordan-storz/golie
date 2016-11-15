var bootstrap = new Bootstrap();
var app = {};

bootstrap.go(app);
app.gridMaker.initialize(15);
app.gridMaker.renderGrid();
app.gameMaker.initialize();
app.gameMaker.createInstance();
app.stateManager.getLocalUIState();
app.stateManager.getLocalColors().then(() => {
  app.styleManager.switchNextColors();
  app.runner.run();
  app.runner.pause();
})
