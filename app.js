var bootstrap = new Bootstrap();
var app = {};

bootstrap.go(app);
app.gridMaker.initialize(23);
app.gridMaker.renderGrid();
app.gameMaker.initialize();
app.gameMaker.createInstance();
app.gameMaker.createInstance();
app.runner.run();
