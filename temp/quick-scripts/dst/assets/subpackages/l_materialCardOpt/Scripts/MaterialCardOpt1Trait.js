
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_materialCardOpt/Scripts/MaterialCardOpt1Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '09d7bQrDqtHMZG9JzCftC8X', 'MaterialCardOpt1Trait');
// subpackages/l_materialCardOpt/Scripts/MaterialCardOpt1Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardOptBaseTrait_1 = require("./MaterialCardOptBaseTrait");
var MaterialCardOptListTrait_1 = require("./MaterialCardOptListTrait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var MaterialCardOpt1Trait = /** @class */ (function (_super) {
    __extends(MaterialCardOpt1Trait, _super);
    function MaterialCardOpt1Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startLevel = 10;
        _this._intervals = [3, 5, 6];
        _this._gameModes = [GameTypeEnums_1.MjGameType.Normal];
        return _this;
    }
    MaterialCardOpt1Trait_1 = MaterialCardOpt1Trait;
    MaterialCardOpt1Trait.prototype.onLoad = function () {
        var e, r, a, i, o, n;
        _super.prototype.onLoad.call(this);
        this._startLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 10;
        this._intervals = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.intervals) && void 0 !== i ? i : [3, 5, 6];
        this._gameModes = null !== (n = null === (o = this._traitData) || void 0 === o ? void 0 : o.gameModes) && void 0 !== n ? n : [GameTypeEnums_1.MjGameType.Normal];
    };
    MaterialCardOpt1Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (!this.isGameModeMatch(this._gameModes)) {
                e();
                return;
            }
            var a = this.getCurrentGameDataLevel();
            if (this._shouldTrigger(a)) {
                this._triggerMaterialChange();
            }
            else {
                0 !== this.getCurMaterialCard() && this.setCurMaterialCard(0);
            }
            e();
        }
        catch (t) {
            console.error("[" + MaterialCardOpt1Trait_1.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    MaterialCardOpt1Trait.prototype._shouldTrigger = function (t) {
        if (t < this._startLevel)
            return false;
        if (t === this._startLevel)
            return true;
        for (var e = t - this._startLevel, r = 0; r < this._intervals.length; r++) {
            var a = this._intervals[r];
            if (r === this._intervals.length - 1)
                return e > 0 && e % a == 0;
            if (e === a)
                return true;
            if (!(e > a))
                return false;
            e -= a;
        }
        return false;
    };
    MaterialCardOpt1Trait.prototype._triggerMaterialChange = function () {
        var t = MaterialCardOptListTrait_1.default.getInstance();
        t && t.switchToNextMaterialCard();
    };
    var MaterialCardOpt1Trait_1;
    MaterialCardOpt1Trait.traitKey = "MaterialCardOpt1";
    MaterialCardOpt1Trait = MaterialCardOpt1Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCardOpt1Trait")
    ], MaterialCardOpt1Trait);
    return MaterialCardOpt1Trait;
}(MaterialCardOptBaseTrait_1.default));
exports.default = MaterialCardOpt1Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hdGVyaWFsQ2FyZE9wdC9TY3JpcHRzL01hdGVyaWFsQ2FyZE9wdDFUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQWtFO0FBQ2xFLHVFQUFrRTtBQUNsRSx3RkFBb0Y7QUFHcEY7SUFBbUQseUNBQXdCO0lBQTNFO1FBQUEscUVBOENDO1FBN0NDLGlCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLGdCQUFVLEdBQUcsQ0FBQywwQkFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztJQTJDbkMsQ0FBQzs4QkE5Q29CLHFCQUFxQjtJQUt4QyxzQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQixpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbEksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FB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QXFCO1FBRnpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQThDekM7SUFBRCw0QkFBQztDQTlDRCxBQThDQyxDQTlDa0Qsa0NBQXdCLEdBOEMxRTtrQkE5Q29CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYXRlcmlhbENhcmRPcHRCYXNlVHJhaXQgZnJvbSAnLi9NYXRlcmlhbENhcmRPcHRCYXNlVHJhaXQnO1xuaW1wb3J0IE1hdGVyaWFsQ2FyZE9wdExpc3RUcmFpdCBmcm9tICcuL01hdGVyaWFsQ2FyZE9wdExpc3RUcmFpdCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTWF0ZXJpYWxDYXJkT3B0MVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRlcmlhbENhcmRPcHQxVHJhaXQgZXh0ZW5kcyBNYXRlcmlhbENhcmRPcHRCYXNlVHJhaXQge1xuICBfc3RhcnRMZXZlbCA9IDEwO1xuICBfaW50ZXJ2YWxzID0gWzMsIDUsIDZdO1xuICBfZ2FtZU1vZGVzID0gW01qR2FtZVR5cGUuTm9ybWFsXTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJNYXRlcmlhbENhcmRPcHQxXCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgZSwgciwgYSwgaSwgbywgbjtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9zdGFydExldmVsID0gbnVsbCAhPT0gKHIgPSBudWxsID09PSAoZSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5zdGFydExldmVsKSAmJiB2b2lkIDAgIT09IHIgPyByIDogMTA7XG4gICAgdGhpcy5faW50ZXJ2YWxzID0gbnVsbCAhPT0gKGkgPSBudWxsID09PSAoYSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5pbnRlcnZhbHMpICYmIHZvaWQgMCAhPT0gaSA/IGkgOiBbMywgNSwgNl07XG4gICAgdGhpcy5fZ2FtZU1vZGVzID0gbnVsbCAhPT0gKG4gPSBudWxsID09PSAobyA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5nYW1lTW9kZXMpICYmIHZvaWQgMCAhPT0gbiA/IG4gOiBbTWpHYW1lVHlwZS5Ob3JtYWxdO1xuICB9XG4gIG9uR3NMaXN0ZW5lcl9vbk5ld0dhbWUodCwgZSkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXRoaXMuaXNHYW1lTW9kZU1hdGNoKHRoaXMuX2dhbWVNb2RlcykpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgYSA9IHRoaXMuZ2V0Q3VycmVudEdhbWVEYXRhTGV2ZWwoKTtcbiAgICAgIGlmICh0aGlzLl9zaG91bGRUcmlnZ2VyKGEpKSB7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJNYXRlcmlhbENoYW5nZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgMCAhPT0gdGhpcy5nZXRDdXJNYXRlcmlhbENhcmQoKSAmJiB0aGlzLnNldEN1ck1hdGVyaWFsQ2FyZCgwKTtcbiAgICAgIH1cbiAgICAgIGUoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgTWF0ZXJpYWxDYXJkT3B0MVRyYWl0LnRyYWl0S2V5ICsgXCJdIOWkhOeQhuaWsOa4uOaIj+S6i+S7tuWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIF9zaG91bGRUcmlnZ2VyKHQpIHtcbiAgICBpZiAodCA8IHRoaXMuX3N0YXJ0TGV2ZWwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAodCA9PT0gdGhpcy5fc3RhcnRMZXZlbCkgcmV0dXJuIHRydWU7XG4gICAgZm9yICh2YXIgZSA9IHQgLSB0aGlzLl9zdGFydExldmVsLCByID0gMDsgciA8IHRoaXMuX2ludGVydmFscy5sZW5ndGg7IHIrKykge1xuICAgICAgdmFyIGEgPSB0aGlzLl9pbnRlcnZhbHNbcl07XG4gICAgICBpZiAociA9PT0gdGhpcy5faW50ZXJ2YWxzLmxlbmd0aCAtIDEpIHJldHVybiBlID4gMCAmJiBlICUgYSA9PSAwO1xuICAgICAgaWYgKGUgPT09IGEpIHJldHVybiB0cnVlO1xuICAgICAgaWYgKCEoZSA+IGEpKSByZXR1cm4gZmFsc2U7XG4gICAgICBlIC09IGE7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBfdHJpZ2dlck1hdGVyaWFsQ2hhbmdlKCkge1xuICAgIHZhciB0ID0gTWF0ZXJpYWxDYXJkT3B0TGlzdFRyYWl0LmdldEluc3RhbmNlKCk7XG4gICAgdCAmJiB0LnN3aXRjaFRvTmV4dE1hdGVyaWFsQ2FyZCgpO1xuICB9XG59Il19