"use strict";
cc._RF.push(module, '1e8a6eFmFJCiaRBB+eyPYNV', 'MatchTimeLabel');
// subpackages/l_matchTimeDisplay/Scripts/MatchTimeLabel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseLabel_1 = require("../../../Scripts/gamePlay/base/ui/BaseLabel");
var MatchTimeLabel = /** @class */ (function (_super) {
    __extends(MatchTimeLabel, _super);
    function MatchTimeLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._label = null;
        _this._increaseTime = 0;
        _this._intervalId = 0;
        _this._isRunning = false;
        _this._isChangeMatchNumsPosEnabled = false;
        _this._canUpdateDisplay = false;
        _this._fontApplied = false;
        return _this;
    }
    MatchTimeLabel.prototype.onLoad = function () {
        this._label = this.node.getComponent(cc.Label);
    };
    MatchTimeLabel.prototype.onEnable = function () {
        var t = this;
        this._isRunning && !this._intervalId && (this._intervalId = setInterval(function () {
            t._tick();
        }, 1000));
    };
    MatchTimeLabel.prototype.onDisable = function () {
        if (this._intervalId) {
            clearInterval(this._intervalId);
            this._intervalId = 0;
        }
    };
    MatchTimeLabel.prototype.startTimer = function () {
        var t = this;
        this.stopTimer();
        this._increaseTime = 0;
        this._isRunning = true;
        this._checkAndApplyFont();
        this.updateDisplay();
        this._intervalId = setInterval(function () {
            t._tick();
        }, 1000);
    };
    MatchTimeLabel.prototype.stopTimer = function () {
        if (this._intervalId) {
            clearInterval(this._intervalId);
            this._intervalId = 0;
        }
        this._isRunning = false;
    };
    MatchTimeLabel.prototype.resetTimer = function () {
        this.stopTimer();
        this._increaseTime = 0;
        this._checkAndApplyFont();
        this.updateDisplay();
    };
    MatchTimeLabel.prototype.continueTimer = function () {
        var t = this;
        if (!this._isRunning) {
            this._isRunning = true;
            this._checkAndApplyFont();
            this.updateDisplay();
            this._intervalId = setInterval(function () {
                t._tick();
            }, 1000);
        }
    };
    MatchTimeLabel.prototype._tick = function () {
        this._increaseTime++;
        this._increaseTime > 5999 && (this._increaseTime = 0);
        this._saveTimeToTrait();
        this.updateDisplay();
    };
    MatchTimeLabel.prototype.updateDisplay = function () {
        var t;
        this._label || (this._label = null === (t = this.node) || void 0 === t ? void 0 : t.getComponent(cc.Label));
        if (this._label && cc.isValid(this._label.node)) {
            var e = Math.floor(this._increaseTime / 60), i = this._increaseTime % 60;
            if (this._canUpdateDisplay) {
                this._label.useSystemFont = false;
                this._label.node.color = cc.color(255, 255, 255, 255);
                var a = this._isChangeMatchNumsPosEnabled ? "#" : ":";
                this._label.string = "" + this._pad(e) + a + this._pad(i);
            }
            else {
                this._label.useSystemFont = true;
                this._label.node.color = cc.color(255, 224, 160, 255);
                this._label.string = this._pad(e) + ":" + this._pad(i);
            }
        }
    };
    MatchTimeLabel.prototype._pad = function (t) {
        return t < 10 ? "0" + t : "" + t;
    };
    MatchTimeLabel.prototype.getIncreaseTime = function () {
        return this._increaseTime;
    };
    MatchTimeLabel.prototype.setTime = function (t) {
        var e;
        this._label || (this._label = null === (e = this.node) || void 0 === e ? void 0 : e.getComponent(cc.Label));
        this._increaseTime = t;
        this._checkAndApplyFont();
        this.updateDisplay();
    };
    MatchTimeLabel.prototype.isRunning = function () {
        return this._isRunning;
    };
    MatchTimeLabel.prototype._checkAndApplyFont = function () {
        var t = this;
        if (!this._fontApplied) {
            var e = mj.getClassByName("ChangeMatchNumsPosTrait"), i = null == e ? void 0 : e.getInstance();
            this._isChangeMatchNumsPosEnabled = true === (null == i ? void 0 : i.eventEnabled);
            if (this._isChangeMatchNumsPosEnabled) {
                this._canUpdateDisplay = false;
                BaseLabel_1.default.refreshWithNode(this.node, "font/gameplay_num_score", "l_matchTimeDisplay", function () {
                    t._canUpdateDisplay = true;
                    t._fontApplied = true;
                    t.updateDisplay();
                });
            }
            else {
                this._canUpdateDisplay = true;
                this._fontApplied = true;
            }
        }
    };
    MatchTimeLabel.prototype.onDestroy = function () {
        this.stopTimer();
        this._saveTimeToTrait();
    };
    MatchTimeLabel.prototype._saveTimeToTrait = function () {
        var t = mj.getClassByName("MatchTimeDisplayTrait"), e = null == t ? void 0 : t.getInstance();
        e && "function" == typeof e.saveTimeFromLabel && e.saveTimeFromLabel(this._increaseTime);
    };
    MatchTimeLabel = __decorate([
        mj.class
    ], MatchTimeLabel);
    return MatchTimeLabel;
}(cc.Component));
exports.default = MatchTimeLabel;

cc._RF.pop();