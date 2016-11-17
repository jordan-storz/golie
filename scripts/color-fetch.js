function ColorFetch() {

  this.imports = [
    'styleStorage',
    'localStorage'
  ];

  const COLOR_ENDPOINT = 'https://www.colourlovers.com/api/palettes/random';

  this.getRandomScheme = function() {
    return $.ajax({
      url: COLOR_ENDPOINT,
      jsonp: 'jsonCallback',
      dataType: 'jsonp',
      data: {
        format: 'json'
      },
      success: () => {}
    });
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
     });
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
