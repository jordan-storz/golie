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

}
