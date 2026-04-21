import BaseLabel from '../../../Scripts/gamePlay/base/ui/BaseLabel';
@mj.class
export default class MatchTimeLabel extends cc.Component {
  _label = null;
  _increaseTime = 0;
  _intervalId = 0;
  _isRunning = false;
  _isChangeMatchNumsPosEnabled = false;
  _canUpdateDisplay = false;
  _fontApplied = false;
  onLoad() {
    this._label = this.node.getComponent(cc.Label);
  }
  onEnable() {
    var t = this;
    this._isRunning && !this._intervalId && (this._intervalId = setInterval(function () {
      t._tick();
    }, 1000));
  }
  onDisable() {
    if (this._intervalId) {
      clearInterval(this._intervalId);
      this._intervalId = 0;
    }
  }
  startTimer() {
    var t = this;
    this.stopTimer();
    this._increaseTime = 0;
    this._isRunning = true;
    this._checkAndApplyFont();
    this.updateDisplay();
    this._intervalId = setInterval(function () {
      t._tick();
    }, 1000);
  }
  stopTimer() {
    if (this._intervalId) {
      clearInterval(this._intervalId);
      this._intervalId = 0;
    }
    this._isRunning = false;
  }
  resetTimer() {
    this.stopTimer();
    this._increaseTime = 0;
    this._checkAndApplyFont();
    this.updateDisplay();
  }
  continueTimer() {
    var t = this;
    if (!this._isRunning) {
      this._isRunning = true;
      this._checkAndApplyFont();
      this.updateDisplay();
      this._intervalId = setInterval(function () {
        t._tick();
      }, 1000);
    }
  }
  _tick() {
    this._increaseTime++;
    this._increaseTime > 5999 && (this._increaseTime = 0);
    this._saveTimeToTrait();
    this.updateDisplay();
  }
  updateDisplay() {
    var t;
    this._label || (this._label = null === (t = this.node) || void 0 === t ? void 0 : t.getComponent(cc.Label));
    if (this._label && cc.isValid(this._label.node)) {
      var e = Math.floor(this._increaseTime / 60),
        i = this._increaseTime % 60;
      if (this._canUpdateDisplay) {
        this._label.useSystemFont = false;
        this._label.node.color = cc.color(255, 255, 255, 255);
        var a = this._isChangeMatchNumsPosEnabled ? "#" : ":";
        this._label.string = "" + this._pad(e) + a + this._pad(i);
      } else {
        this._label.useSystemFont = true;
        this._label.node.color = cc.color(255, 224, 160, 255);
        this._label.string = this._pad(e) + ":" + this._pad(i);
      }
    }
  }
  _pad(t) {
    return t < 10 ? "0" + t : "" + t;
  }
  getIncreaseTime() {
    return this._increaseTime;
  }
  setTime(t) {
    var e;
    this._label || (this._label = null === (e = this.node) || void 0 === e ? void 0 : e.getComponent(cc.Label));
    this._increaseTime = t;
    this._checkAndApplyFont();
    this.updateDisplay();
  }
  isRunning() {
    return this._isRunning;
  }
  _checkAndApplyFont() {
    var t = this;
    if (!this._fontApplied) {
      var e = mj.getClassByName("ChangeMatchNumsPosTrait"),
        i = null == e ? void 0 : e.getInstance();
      this._isChangeMatchNumsPosEnabled = true === (null == i ? void 0 : i.eventEnabled);
      if (this._isChangeMatchNumsPosEnabled) {
        this._canUpdateDisplay = false;
        BaseLabel.refreshWithNode(this.node, "font/gameplay_num_score", "l_matchTimeDisplay", function () {
          t._canUpdateDisplay = true;
          t._fontApplied = true;
          t.updateDisplay();
        });
      } else {
        this._canUpdateDisplay = true;
        this._fontApplied = true;
      }
    }
  }
  onDestroy() {
    this.stopTimer();
    this._saveTimeToTrait();
  }
  _saveTimeToTrait() {
    var t = mj.getClassByName("MatchTimeDisplayTrait"),
      e = null == t ? void 0 : t.getInstance();
    e && "function" == typeof e.saveTimeFromLabel && e.saveTimeFromLabel(this._increaseTime);
  }
}