var bootstrap = new Bootstrap();
var app = {};

bootstrap.go(app);
app.gridMaker.initialize(19);
app.gridMaker.renderGrid();
app.gameMaker.initialize();
app.gameMaker.createInstance();
app.gameMaker.createInstance();

app.colorFetch.getFourSchemesAndStore().then(() => {
  app.styleManager.switchColors();
  app.runner.run();
})
