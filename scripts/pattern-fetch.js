function PatternFetch() {

  this.imports = [
    'styleStorage'
  ];

  const PATTERN_ENDPOINT = 'http://www.colourlovers.com/api/patterns/random';

  this.getRandomPattern = function() {
    return $.ajax({
      url: PATTERN_ENDPOINT,
      jsonp: 'jsonCallback',
      dataType: 'jsonp',
      data: {
        format: 'json'
      },
      success: () => {}
    });
  }

  this.getPatternAndStore = function() {
    return this.getRandomPattern().then((data) => {
      let imageUrl = data[0].imageUrl;
      this.styleStorage.storePattern(imageUrl);
    });
  }

  this.getFourPatternsAndStore = function() {
    let styleStorage = this.styleStorage;
    return $.when(
      this.getRandomPattern(),
      this.getRandomPattern(),
      this.getRandomPattern(),
      this.getRandomPattern()
    )
     .done(function(d1, d2, d3, d4) {
       let arr = [d1, d2, d3, d4];
       arr.forEach((dataset) => {
         let url = dataset[0][0].imageUrl;
         styleStorage.storePattern(url);
       });
     });
  }

  this.getFourPatternsAndUnshift = function() {
    let styleStorage = this.styleStorage;
    return $.when(
      this.getRandomPattern(),
      this.getRandomPattern(),
      this.getRandomPattern(),
      this.getRandomPattern()
    )
     .done(function(d1, d2, d3, d4) {
       let arr = [d1, d2, d3, d4];
       arr.forEach((dataset) => {
         let url = dataset[0][0].imageUrl;
         styleStorage.unshiftPattern(url);
       });
     });
  }

}
