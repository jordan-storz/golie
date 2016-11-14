function Bootstrap() {

  var injector = new Injector();

  var components = [
    Runner,
    GridMaker,
    GameMaker,
    LifeTransformer,
    Stylist,
    Painter,
    ElementStorage,
    InstanceStorage,
    EnvironmentInfo,
    NeighborCalculator,
    ColorFetch,
    StyleStorage,
    StyleManager,
    PatternFetch,
    GlobalStyles,
    PauseButton,
    ToggleMenuButton,
    Header,
    Headings,
    BackgroundImage,
    StateManager
  ]

  function registerComponents() {
    components.forEach(component => injector.create(component));
  }

  function wireComponents() {
    components.forEach((component) => {
      var instance = injector.provide(component);
      injector.injectInto(instance);
    });
  }

  function exportInstances(obj) {
    components.forEach((component) => {
      var instance = injector.provide(component);
      var name = injector.getName(instance);
      obj[name] = instance;
    });
  }

  this.go = function(obj) {
    registerComponents();
    wireComponents();
    exportInstances(obj)
  }
}
