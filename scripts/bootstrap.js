function Bootstrap() {

  var injector = new Injector();

  var components = [
    StateManager,
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
    ColorSelect,
    PatternSelect,
    PatternCheckbox,
    DimmerCheckbox,
    LocalStorage
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

  function initializeComponents() {
    components.forEach((component) => {
      let instance = injector.provide(component);
      if (instance.hasOwnProperty('initializeComponent')) {
        instance.initializeComponent();
      };
    });
  }

  this.go = function(obj) {
    registerComponents();
    wireComponents();
    initializeComponents();
    exportInstances(obj)
  }
}
