var bootstrap = new Bootstrap();
var app = {};

bootstrap.go(app);
app.gridMaker.initialize(15);
app.gridMaker.renderGrid();
app.gameMaker.initialize();
app.gameMaker.createInstance();
app.patternFetch.getPatternAndStore().then(() => {
  app.styleManager.switchPattern();
});
app.colorFetch.getFourSchemesAndStore().then(() => {
  app.styleManager.switchColors();
  app.runner.run();
  // app.runner.pause();
})
