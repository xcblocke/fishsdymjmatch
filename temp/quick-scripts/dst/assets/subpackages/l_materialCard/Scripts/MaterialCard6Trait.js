
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_materialCard/Scripts/MaterialCard6Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fc1e4UQsqNKF4HjK1aQows4', 'MaterialCard6Trait');
// subpackages/l_materialCard/Scripts/MaterialCard6Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardBaseTrait_1 = require("./MaterialCardBaseTrait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var MaterialCard6Trait = /** @class */ (function (_super) {
    __extends(MaterialCard6Trait, _super);
    function MaterialCard6Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startLevel = 6;
        _this._interval = 5;
        return _this;
    }
    MaterialCard6Trait_1 = MaterialCard6Trait;
    MaterialCard6Trait.prototype.onLoad = function () {
        var e, r, a, i;
        _super.prototype.onLoad.call(this);
        this._startLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 6;
        this._interval = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.interval) && void 0 !== i ? i : 5;
    };
    MaterialCard6Trait.prototype._getModeData = function (t) {
        var e;
        if (!this.localData[t]) {
            this.localData[t] = {
                shouldSwitchNextRound: false
            };
            this.localData[t] = this.localData[t];
        }
        return null !== (e = this.localData[t]) && void 0 !== e ? e : {
            shouldSwitchNextRound: false
        };
    };
    MaterialCard6Trait.prototype._shouldEnableForLevel = function (t) {
        return !(t < this._startLevel) && (t - this._startLevel) % this._interval == 0;
    };
    MaterialCard6Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            var a = this.getCurrentGameType();
            if (this.isNormalMode()) {
                var i = this.getCurrentLevel();
                this._shouldEnableForLevel(i) && this.switchToNextMaterialCard();
            }
            else if (this.isDailyMode()) {
                var o = this._getModeData(a);
                if (o.shouldSwitchNextRound) {
                    this.switchToNextMaterialCard();
                    o.shouldSwitchNextRound = false;
                    this.localData[a] = this.localData[a];
                }
            }
            e();
        }
        catch (t) {
            console.error("[" + MaterialCard6Trait_1.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    MaterialCard6Trait.prototype.onTLWinVw_showTLWinVw = function (t, e) {
        try {
            var a = t.ins, i = null == a ? void 0 : a._curReward, o = null == a ? void 0 : a._curLv, l = null == a ? void 0 : a._canGain;
            i && o && l && i.lv === o - 1 && this.switchToNextMaterialCard();
        }
        catch (t) {
            console.error("[" + MaterialCard6Trait_1.traitKey + "] 旅行胜利处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    MaterialCard6Trait.prototype.onDCWinVw_showWinVw = function (t, e) {
        try {
            var a = GameTypeEnums_1.MjGameType.DailyChallenge;
            this._getModeData(a).shouldSwitchNextRound = true;
            this.localData[a] = this.localData[a];
        }
        catch (t) {
            console.error("[" + MaterialCard6Trait_1.traitKey + "] 每日挑战胜利处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    var MaterialCard6Trait_1;
    MaterialCard6Trait.traitKey = "MaterialCard6";
    MaterialCard6Trait = MaterialCard6Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCard6Trait")
    ], MaterialCard6Trait);
    return MaterialCard6Trait;
}(MaterialCardBaseTrait_1.default));
exports.default = MaterialCard6Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hdGVyaWFsQ2FyZC9TY3JpcHRzL01hdGVyaWFsQ2FyZDZUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQTREO0FBQzVELHdGQUFvRjtBQUdwRjtJQUFnRCxzQ0FBcUI7SUFBckU7UUFBQSxxRUFtRUM7UUFsRUMsaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsZUFBUyxHQUFHLENBQUMsQ0FBQzs7SUFpRWhCLENBQUM7MkJBbkVvQixrQkFBa0I7SUFJckMsbUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2YsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0gsQ0FBQztJ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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYXRlcmlhbENhcmRCYXNlVHJhaXQgZnJvbSAnLi9NYXRlcmlhbENhcmRCYXNlVHJhaXQnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIk1hdGVyaWFsQ2FyZDZUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0ZXJpYWxDYXJkNlRyYWl0IGV4dGVuZHMgTWF0ZXJpYWxDYXJkQmFzZVRyYWl0IHtcbiAgX3N0YXJ0TGV2ZWwgPSA2O1xuICBfaW50ZXJ2YWwgPSA1O1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIk1hdGVyaWFsQ2FyZDZcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlLCByLCBhLCBpO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3N0YXJ0TGV2ZWwgPSBudWxsICE9PSAociA9IG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnN0YXJ0TGV2ZWwpICYmIHZvaWQgMCAhPT0gciA/IHIgOiA2O1xuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbCAhPT0gKGkgPSBudWxsID09PSAoYSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5pbnRlcnZhbCkgJiYgdm9pZCAwICE9PSBpID8gaSA6IDU7XG4gIH1cbiAgX2dldE1vZGVEYXRhKHQpIHtcbiAgICB2YXIgZTtcbiAgICBpZiAoIXRoaXMubG9jYWxEYXRhW3RdKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YVt0XSA9IHtcbiAgICAgICAgc2hvdWxkU3dpdGNoTmV4dFJvdW5kOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIHRoaXMubG9jYWxEYXRhW3RdID0gdGhpcy5sb2NhbERhdGFbdF07XG4gICAgfVxuICAgIHJldHVybiBudWxsICE9PSAoZSA9IHRoaXMubG9jYWxEYXRhW3RdKSAmJiB2b2lkIDAgIT09IGUgPyBlIDoge1xuICAgICAgc2hvdWxkU3dpdGNoTmV4dFJvdW5kOiBmYWxzZVxuICAgIH07XG4gIH1cbiAgX3Nob3VsZEVuYWJsZUZvckxldmVsKHQpIHtcbiAgICByZXR1cm4gISh0IDwgdGhpcy5fc3RhcnRMZXZlbCkgJiYgKHQgLSB0aGlzLl9zdGFydExldmVsKSAlIHRoaXMuX2ludGVydmFsID09IDA7XG4gIH1cbiAgb25Hc0xpc3RlbmVyX29uTmV3R2FtZSh0LCBlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBhID0gdGhpcy5nZXRDdXJyZW50R2FtZVR5cGUoKTtcbiAgICAgIGlmICh0aGlzLmlzTm9ybWFsTW9kZSgpKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5nZXRDdXJyZW50TGV2ZWwoKTtcbiAgICAgICAgdGhpcy5fc2hvdWxkRW5hYmxlRm9yTGV2ZWwoaSkgJiYgdGhpcy5zd2l0Y2hUb05leHRNYXRlcmlhbENhcmQoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0RhaWx5TW9kZSgpKSB7XG4gICAgICAgIHZhciBvID0gdGhpcy5fZ2V0TW9kZURhdGEoYSk7XG4gICAgICAgIGlmIChvLnNob3VsZFN3aXRjaE5leHRSb3VuZCkge1xuICAgICAgICAgIHRoaXMuc3dpdGNoVG9OZXh0TWF0ZXJpYWxDYXJkKCk7XG4gICAgICAgICAgby5zaG91bGRTd2l0Y2hOZXh0Um91bmQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmxvY2FsRGF0YVthXSA9IHRoaXMubG9jYWxEYXRhW2FdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlKCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIE1hdGVyaWFsQ2FyZDZUcmFpdC50cmFpdEtleSArIFwiXSDlpITnkIbmlrDmuLjmiI/kuovku7blpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvblRMV2luVndfc2hvd1RMV2luVncodCwgZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgYSA9IHQuaW5zLFxuICAgICAgICBpID0gbnVsbCA9PSBhID8gdm9pZCAwIDogYS5fY3VyUmV3YXJkLFxuICAgICAgICBvID0gbnVsbCA9PSBhID8gdm9pZCAwIDogYS5fY3VyTHYsXG4gICAgICAgIGwgPSBudWxsID09IGEgPyB2b2lkIDAgOiBhLl9jYW5HYWluO1xuICAgICAgaSAmJiBvICYmIGwgJiYgaS5sdiA9PT0gbyAtIDEgJiYgdGhpcy5zd2l0Y2hUb05leHRNYXRlcmlhbENhcmQoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgTWF0ZXJpYWxDYXJkNlRyYWl0LnRyYWl0S2V5ICsgXCJdIOaXheihjOiDnOWIqeWkhOeQhuWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgfVxuICAgIGUoKTtcbiAgfVxuICBvbkRDV2luVndfc2hvd1dpblZ3KHQsIGUpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGEgPSBNakdhbWVUeXBlLkRhaWx5Q2hhbGxlbmdlO1xuICAgICAgdGhpcy5fZ2V0TW9kZURhdGEoYSkuc2hvdWxkU3dpdGNoTmV4dFJvdW5kID0gdHJ1ZTtcbiAgICAgIHRoaXMubG9jYWxEYXRhW2FdID0gdGhpcy5sb2NhbERhdGFbYV07XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIE1hdGVyaWFsQ2FyZDZUcmFpdC50cmFpdEtleSArIFwiXSDmr4/ml6XmjJHmiJjog5zliKnlpITnkIblpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgIH1cbiAgICBlKCk7XG4gIH1cbn0iXX0=