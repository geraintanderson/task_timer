// THis can be run in the browser or using node.  Next, I need some UI to use this, then wrap it up in a directive.
var Timer = function() {
  var _this = this;
  var unit = 1000; // Calculated from base unit of ms.
  _this.runTime = 0;

  _this.start = function(maxTime) {
    _this.startTime = new Date();
    _this.maxTime = maxTime;
  };

  _this.showProgress = function(cb) {
    _this.timerInt = setInterval(function() {
      _this.runTime = Math.floor((new Date() - _this.startTime)/(unit)); // Runtime in minutes
      if (_this.runTime >= _this.maxTime) {
        clearInterval(_this.timerInt);
        if (cb) cb();
      }
      console.log('TEST ONLY:' + _this.runTime);
    }, 10);
  };
  return _this;
};


var myTimer = new Timer();
myTimer.start(5);
myTimer.showProgress(function(){ console.log('Finished'); });
