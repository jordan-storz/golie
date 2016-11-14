var bootstrap = new Bootstrap();
var app = {};

bootstrap.go(app);
app.gridMaker.initialize(15);
app.gridMaker.renderGrid();
app.gameMaker.initialize();
app.gameMaker.createInstance();
app.patternFetch.getFourPatternsAndStore().then(() => {
  app.styleManager.switchNextPattern();
});
app.colorFetch.getFourSchemesAndStore().then(() => {
  app.styleManager.switchNextColors();
  app.runner.run();
  // app.runner.pause();
})
