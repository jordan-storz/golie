function PauseButton() {

  this.imports = [
    'stateManager',
    'runner'
  ];

  let $pauseIcon = $('i.pause-icon');
  let $playIcon  = $('i.play-icon');
  let $button = $('#pause-btn');

  this.paused = true;

  function showPlayIcon() {
    console.log('show play');
    $pauseIcon.css('display', 'none');
    $playIcon.css('display', 'inline-block');
  }

  function showPauseIcon() {
    $pauseIcon.css('display', 'inline-block');
    $playIcon.css('display', 'none');
  }

  function onClick(event) {
    if (this.paused) {
      showPlayIcon();
      this.runner.pause();
    } else {
      showPauseIcon();
      this.runner.resume();
    }
    this.togglePaused();
  }

  this.initialize = (function initialize(self) {
    showPauseIcon();
    $button.click(onClick.bind(self));
  })(this);

  this.togglePaused = () => this.paused = !this.paused;

}
