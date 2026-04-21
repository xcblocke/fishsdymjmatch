
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_matchTimeDisplay/Scripts/MatchTimeLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hdGNoVGltZURpc3BsYXkvU2NyaXB0cy9NYXRjaFRpbWVMYWJlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUVBQW9FO0FBRXBFO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBOEhDO1FBN0hDLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixpQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixrQ0FBNEIsR0FBRyxLQUFLLENBQUM7UUFDckMsdUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGtCQUFZLEdBQUcsS0FBSyxDQUFDOztJQXVIdkIsQ0FBQztJQXRIQywrQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQ3RFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNaLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUNELGtDQUFTLEdBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFDRCxtQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFNBQVMs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LElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0QseUNBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUNoRCxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzQyxDQUFDLElBQUksVUFBVSxJQUFJLE9BQU8sQ0FBQyxDQUFDLGlCQUFpQixJQUFJLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQTdIa0IsY0FBYztRQURsQyxFQUFFLENBQUMsS0FBSztPQUNZLGNBQWMsQ0E4SGxDO0lBQUQscUJBQUM7Q0E5SEQsQUE4SEMsQ0E5SDJDLEVBQUUsQ0FBQyxTQUFTLEdBOEh2RDtrQkE5SG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZUxhYmVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlTGFiZWwnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRjaFRpbWVMYWJlbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIF9sYWJlbCA9IG51bGw7XG4gIF9pbmNyZWFzZVRpbWUgPSAwO1xuICBfaW50ZXJ2YWxJZCA9IDA7XG4gIF9pc1J1bm5pbmcgPSBmYWxzZTtcbiAgX2lzQ2hhbmdlTWF0Y2hOdW1zUG9zRW5hYmxlZCA9IGZhbHNlO1xuICBfY2FuVXBkYXRlRGlzcGxheSA9IGZhbHNlO1xuICBfZm9udEFwcGxpZWQgPSBmYWxzZTtcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuX2xhYmVsID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gIH1cbiAgb25FbmFibGUoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMuX2lzUnVubmluZyAmJiAhdGhpcy5faW50ZXJ2YWxJZCAmJiAodGhpcy5faW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHQuX3RpY2soKTtcbiAgICB9LCAxMDAwKSk7XG4gIH1cbiAgb25EaXNhYmxlKCkge1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbElkKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsSWQpO1xuICAgICAgdGhpcy5faW50ZXJ2YWxJZCA9IDA7XG4gICAgfVxuICB9XG4gIHN0YXJ0VGltZXIoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgdGhpcy5faW5jcmVhc2VUaW1lID0gMDtcbiAgICB0aGlzLl9pc1J1bm5pbmcgPSB0cnVlO1xuICAgIHRoaXMuX2NoZWNrQW5kQXBwbHlGb250KCk7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gICAgdGhpcy5faW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHQuX3RpY2soKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuICBzdG9wVGltZXIoKSB7XG4gICAgaWYgKHRoaXMuX2ludGVydmFsSWQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWxJZCk7XG4gICAgICB0aGlzLl9pbnRlcnZhbElkID0gMDtcbiAgICB9XG4gICAgdGhpcy5faXNSdW5uaW5nID0gZmFsc2U7XG4gIH1cbiAgcmVzZXRUaW1lcigpIHtcbiAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgIHRoaXMuX2luY3JlYXNlVGltZSA9IDA7XG4gICAgdGhpcy5fY2hlY2tBbmRBcHBseUZvbnQoKTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgfVxuICBjb250aW51ZVRpbWVyKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAoIXRoaXMuX2lzUnVubmluZykge1xuICAgICAgdGhpcy5faXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2NoZWNrQW5kQXBwbHlGb250KCk7XG4gICAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgICAgIHRoaXMuX2ludGVydmFsSWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQuX3RpY2soKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgfVxuICBfdGljaygpIHtcbiAgICB0aGlzLl9pbmNyZWFzZVRpbWUrKztcbiAgICB0aGlzLl9pbmNyZWFzZVRpbWUgPiA1OTk5ICYmICh0aGlzLl9pbmNyZWFzZVRpbWUgPSAwKTtcbiAgICB0aGlzLl9zYXZlVGltZVRvVHJhaXQoKTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgfVxuICB1cGRhdGVEaXNwbGF5KCkge1xuICAgIHZhciB0O1xuICAgIHRoaXMuX2xhYmVsIHx8ICh0aGlzLl9sYWJlbCA9IG51bGwgPT09ICh0ID0gdGhpcy5ub2RlKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdldENvbXBvbmVudChjYy5MYWJlbCkpO1xuICAgIGlmICh0aGlzLl9sYWJlbCAmJiBjYy5pc1ZhbGlkKHRoaXMuX2xhYmVsLm5vZGUpKSB7XG4gICAgICB2YXIgZSA9IE1hdGguZmxvb3IodGhpcy5faW5jcmVhc2VUaW1lIC8gNjApLFxuICAgICAgICBpID0gdGhpcy5faW5jcmVhc2VUaW1lICUgNjA7XG4gICAgICBpZiAodGhpcy5fY2FuVXBkYXRlRGlzcGxheSkge1xuICAgICAgICB0aGlzLl9sYWJlbC51c2VTeXN0ZW1Gb250ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2xhYmVsLm5vZGUuY29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICB2YXIgYSA9IHRoaXMuX2lzQ2hhbmdlTWF0Y2hOdW1zUG9zRW5hYmxlZCA/IFwiI1wiIDogXCI6XCI7XG4gICAgICAgIHRoaXMuX2xhYmVsLnN0cmluZyA9IFwiXCIgKyB0aGlzLl9wYWQoZSkgKyBhICsgdGhpcy5fcGFkKGkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbGFiZWwudXNlU3lzdGVtRm9udCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2xhYmVsLm5vZGUuY29sb3IgPSBjYy5jb2xvcigyNTUsIDIyNCwgMTYwLCAyNTUpO1xuICAgICAgICB0aGlzLl9sYWJlbC5zdHJpbmcgPSB0aGlzLl9wYWQoZSkgKyBcIjpcIiArIHRoaXMuX3BhZChpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgX3BhZCh0KSB7XG4gICAgcmV0dXJuIHQgPCAxMCA/IFwiMFwiICsgdCA6IFwiXCIgKyB0O1xuICB9XG4gIGdldEluY3JlYXNlVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5jcmVhc2VUaW1lO1xuICB9XG4gIHNldFRpbWUodCkge1xuICAgIHZhciBlO1xuICAgIHRoaXMuX2xhYmVsIHx8ICh0aGlzLl9sYWJlbCA9IG51bGwgPT09IChlID0gdGhpcy5ub2RlKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmdldENvbXBvbmVudChjYy5MYWJlbCkpO1xuICAgIHRoaXMuX2luY3JlYXNlVGltZSA9IHQ7XG4gICAgdGhpcy5fY2hlY2tBbmRBcHBseUZvbnQoKTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgfVxuICBpc1J1bm5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzUnVubmluZztcbiAgfVxuICBfY2hlY2tBbmRBcHBseUZvbnQoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGlmICghdGhpcy5fZm9udEFwcGxpZWQpIHtcbiAgICAgIHZhciBlID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJDaGFuZ2VNYXRjaE51bXNQb3NUcmFpdFwiKSxcbiAgICAgICAgaSA9IG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuZ2V0SW5zdGFuY2UoKTtcbiAgICAgIHRoaXMuX2lzQ2hhbmdlTWF0Y2hOdW1zUG9zRW5hYmxlZCA9IHRydWUgPT09IChudWxsID09IGkgPyB2b2lkIDAgOiBpLmV2ZW50RW5hYmxlZCk7XG4gICAgICBpZiAodGhpcy5faXNDaGFuZ2VNYXRjaE51bXNQb3NFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuX2NhblVwZGF0ZURpc3BsYXkgPSBmYWxzZTtcbiAgICAgICAgQmFzZUxhYmVsLnJlZnJlc2hXaXRoTm9kZSh0aGlzLm5vZGUsIFwiZm9udC9nYW1lcGxheV9udW1fc2NvcmVcIiwgXCJsX21hdGNoVGltZURpc3BsYXlcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHQuX2NhblVwZGF0ZURpc3BsYXkgPSB0cnVlO1xuICAgICAgICAgIHQuX2ZvbnRBcHBsaWVkID0gdHJ1ZTtcbiAgICAgICAgICB0LnVwZGF0ZURpc3BsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jYW5VcGRhdGVEaXNwbGF5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fZm9udEFwcGxpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgICB0aGlzLl9zYXZlVGltZVRvVHJhaXQoKTtcbiAgfVxuICBfc2F2ZVRpbWVUb1RyYWl0KCkge1xuICAgIHZhciB0ID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJNYXRjaFRpbWVEaXNwbGF5VHJhaXRcIiksXG4gICAgICBlID0gbnVsbCA9PSB0ID8gdm9pZCAwIDogdC5nZXRJbnN0YW5jZSgpO1xuICAgIGUgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLnNhdmVUaW1lRnJvbUxhYmVsICYmIGUuc2F2ZVRpbWVGcm9tTGFiZWwodGhpcy5faW5jcmVhc2VUaW1lKTtcbiAgfVxufSJdfQ==