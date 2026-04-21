
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_materialCard/Scripts/MaterialCard4Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '53407VvdzFMB4RalVxegT7i', 'MaterialCard4Trait');
// subpackages/l_materialCard/Scripts/MaterialCard4Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardBaseTrait_1 = require("./MaterialCardBaseTrait");
var MaterialCard4Trait = /** @class */ (function (_super) {
    __extends(MaterialCard4Trait, _super);
    function MaterialCard4Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startLevel = 6;
        _this._interval = 5;
        return _this;
    }
    MaterialCard4Trait_1 = MaterialCard4Trait;
    MaterialCard4Trait.prototype.onLoad = function () {
        var e, r, a, i;
        _super.prototype.onLoad.call(this);
        this._startLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 6;
        this._interval = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.interval) && void 0 !== i ? i : 5;
    };
    MaterialCard4Trait.prototype._shouldEnableForLevel = function (t) {
        return !(t < this._startLevel) && (t - this._startLevel) % this._interval == 0;
    };
    MaterialCard4Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (this.isNormalMode()) {
                var a = this.getCurrentLevel();
                this._shouldEnableForLevel(a) && this.switchToNextMaterialCard();
            }
            e();
        }
        catch (t) {
            console.error("[" + MaterialCard4Trait_1.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    MaterialCard4Trait.prototype.onTLWinVw_showTLWinVw = function (t, e) {
        try {
            var a = t.ins, i = null == a ? void 0 : a._curReward, o = null == a ? void 0 : a._curLv, l = null == a ? void 0 : a._canGain;
            i && o && l && i.lv === o - 1 && this.switchToNextMaterialCard();
        }
        catch (t) {
            console.error("[" + MaterialCard4Trait_1.traitKey + "] 旅行胜利处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    var MaterialCard4Trait_1;
    MaterialCard4Trait.traitKey = "MaterialCard4";
    MaterialCard4Trait = MaterialCard4Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCard4Trait")
    ], MaterialCard4Trait);
    return MaterialCard4Trait;
}(MaterialCardBaseTrait_1.default));
exports.default = MaterialCard4Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hdGVyaWFsQ2FyZC9TY3JpcHRzL01hdGVyaWFsQ2FyZDRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQTREO0FBRzVEO0lBQWdELHNDQUFxQjtJQUFyRTtRQUFBLHFFQXFDQztRQXBDQyxpQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixlQUFTLEdBQUcsQ0FBQyxDQUFDOztJQW1DaEIsQ0FBQzsyQkFyQ29CLGtCQUFrQjtJQUlyQyxtQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDZixpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvSCxDQUFDO0lBQ0Qsa0RBQXFCLEdBQXJCLFVBQXNCLENBQUM7UUFDckIsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUNELG1EQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJO1lBQ0YsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO2FBQ2xFO1lBQ0QsQ0FBQyxFQUFFLENBQUM7U0FDTDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsb0JBQWtCLENBQUMsUUFBUSxHQUFHLGVBQWUsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN0RyxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQUNELGtEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJO1lBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFDWCxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQ3JDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFDakMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3RDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztTQUNsRTtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsb0JBQWtCLENBQUMsUUFBUSxHQUFHLGNBQWMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUN0RztRQUNELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQzs7SUFqQ00sMkJBQVEsR0FBRyxlQUFlLENBQUM7SUFIZixrQkFBa0I7UUFGdEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDO09BQ1Ysa0JBQWtCLENBcUN0QztJQUFELHlCQUFDO0NBckNELEFBcUNDLENBckMrQywrQkFBcUIsR0FxQ3BFO2tCQXJDb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hdGVyaWFsQ2FyZEJhc2VUcmFpdCBmcm9tICcuL01hdGVyaWFsQ2FyZEJhc2VUcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIk1hdGVyaWFsQ2FyZDRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0ZXJpYWxDYXJkNFRyYWl0IGV4dGVuZHMgTWF0ZXJpYWxDYXJkQmFzZVRyYWl0IHtcbiAgX3N0YXJ0TGV2ZWwgPSA2O1xuICBfaW50ZXJ2YWwgPSA1O1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIk1hdGVyaWFsQ2FyZDRcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlLCByLCBhLCBpO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3N0YXJ0TGV2ZWwgPSBudWxsICE9PSAociA9IG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnN0YXJ0TGV2ZWwpICYmIHZvaWQgMCAhPT0gciA/IHIgOiA2O1xuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbCAhPT0gKGkgPSBudWxsID09PSAoYSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5pbnRlcnZhbCkgJiYgdm9pZCAwICE9PSBpID8gaSA6IDU7XG4gIH1cbiAgX3Nob3VsZEVuYWJsZUZvckxldmVsKHQpIHtcbiAgICByZXR1cm4gISh0IDwgdGhpcy5fc3RhcnRMZXZlbCkgJiYgKHQgLSB0aGlzLl9zdGFydExldmVsKSAlIHRoaXMuX2ludGVydmFsID09IDA7XG4gIH1cbiAgb25Hc0xpc3RlbmVyX29uTmV3R2FtZSh0LCBlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLmlzTm9ybWFsTW9kZSgpKSB7XG4gICAgICAgIHZhciBhID0gdGhpcy5nZXRDdXJyZW50TGV2ZWwoKTtcbiAgICAgICAgdGhpcy5fc2hvdWxkRW5hYmxlRm9yTGV2ZWwoYSkgJiYgdGhpcy5zd2l0Y2hUb05leHRNYXRlcmlhbENhcmQoKTtcbiAgICAgIH1cbiAgICAgIGUoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgTWF0ZXJpYWxDYXJkNFRyYWl0LnRyYWl0S2V5ICsgXCJdIOWkhOeQhuaWsOa4uOaIj+S6i+S7tuWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uVExXaW5Wd19zaG93VExXaW5Wdyh0LCBlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBhID0gdC5pbnMsXG4gICAgICAgIGkgPSBudWxsID09IGEgPyB2b2lkIDAgOiBhLl9jdXJSZXdhcmQsXG4gICAgICAgIG8gPSBudWxsID09IGEgPyB2b2lkIDAgOiBhLl9jdXJMdixcbiAgICAgICAgbCA9IG51bGwgPT0gYSA/IHZvaWQgMCA6IGEuX2NhbkdhaW47XG4gICAgICBpICYmIG8gJiYgbCAmJiBpLmx2ID09PSBvIC0gMSAmJiB0aGlzLnN3aXRjaFRvTmV4dE1hdGVyaWFsQ2FyZCgpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBNYXRlcmlhbENhcmQ0VHJhaXQudHJhaXRLZXkgKyBcIl0g5peF6KGM6IOc5Yip5aSE55CG5aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICB9XG4gICAgZSgpO1xuICB9XG59Il19