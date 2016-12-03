function Bootstrap() {

  var injector = new Injector();

  var components = [
    EnvironmentInfo,
    GridMaker,
    GameMaker,
    LifeTransformer,
    StateManager,
    StyleManager,
    Runner,
    Painter,
    ElementStorage,
    InstanceStorage,
    StyleStorage,
    NeighborCalculator,
    ColorFetch,
    PatternFetch,
    GlobalStyles,
    LocalStorage,
    FavoritesManager,
    FavoritesPackager,
    FavoriteButton,
    PauseButton,
    ToggleMenuButton,
    Header,
    Headings,
    ColorSelect,
    PatternSelect,
    PatternCheckbox,
    TitleCheckbox,
    DimmerCheckbox,
    BackgroundImage,
    Revitalizer,
    MonoColor,
    StarHelper
  ];

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
    exportInstances(obj);
  }
}
