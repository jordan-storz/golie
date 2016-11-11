function ColorFetch() {

  this.imports = [
    'styleStorage'
  ];

  const COLOR_ENDPOINT = 'http://www.colourlovers.com/api/palettes/random';

  this.getRandomScheme = function() {
    return $.ajax({
      url: 'http://www.colourlovers.com/api/palettes/random',
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
    $.when(
      this.getRandomScheme(),
      this.getRandomScheme(),
      this.getRandomScheme(),
      this.getRandomScheme()
    )
     .done(function(d1, d2, d3, d4) {
       let arr = [d1, d2, d3, d4];
       arr.forEach((dataset) => {
         let colorArray = dataset[0][0].colors;
         styleStorage.store(colorArray);
       });
     });
  }

}
