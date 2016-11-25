function ColorFetch() {

  this.imports = [
    'styleStorage',
    'localStorage',
    'monoColor'
  ];

  const COLOR_ENDPOINT = 'https://galvanize-cors-proxy.herokuapp.com/colourlovers.com/api/palettes/random?format=json';

  this.getRandomScheme = function() {
    return $.get(COLOR_ENDPOINT);
  }

  this.getFourSchemesAndStore = function() {
    let styleStorage = this.styleStorage;
    return $.when(
      this.getRandomScheme(),
      this.getRandomScheme(),
      this.getRandomScheme(),
      this.getRandomScheme()
    )
     .done(function(d1, d2, d3, d4) {
       let arr = [d1, d2, d3, d4];
       arr.forEach((dataset) => {
         let colorArray = dataset[0][0].colors;
         styleStorage.storeColor(colorArray);
       });
     })
     .catch((err) => {
       this.monoColor.createFourAndStore();
     });
  }

  this.getFourSchemesAndUnshift = function() {
    let styleStorage = this.styleStorage;
    return $.when(
      this.getRandomScheme(),
      this.getRandomScheme(),
      this.getRandomScheme(),
      this.getRandomScheme()
    )
     .done(function(d1, d2, d3, d4) {
       let arr = [d1, d2, d3, d4];
       arr.forEach((dataset) => {
         let colorArray = dataset[0][0].colors;
         styleStorage.unshiftColor(colorArray);
       });
     })
     .catch((err) => {
       this.monoColor.createFourAndUnshift();
     })
  }

  this.getFourAndLocalStore = function() {
    let localStorage = this.localStorage;
    let styleStorage = this.styleStorage;
    return $.when(
      this.getRandomScheme(),
      this.getRandomScheme(),
      this.getRandomScheme(),
      this.getRandomScheme()
    )
     .done(function(d1, d2, d3, d4) {
       let arr = [d1, d2, d3, d4];
       arr = arr.map((colorObj) => {
         return colorObj[0][0].colors;
       })
       localStorage.setColors(arr);
     });
  }
}
