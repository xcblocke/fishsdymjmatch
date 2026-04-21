
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_materialCard/Scripts/MaterialCard5Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '909ffZk9IhBuKvu7iEfAQgE', 'MaterialCard5Trait');
// subpackages/l_materialCard/Scripts/MaterialCard5Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardBaseTrait_1 = require("./MaterialCardBaseTrait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var MaterialCard5Trait = /** @class */ (function (_super) {
    __extends(MaterialCard5Trait, _super);
    function MaterialCard5Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startLevel = 6;
        _this._interval = 5;
        return _this;
    }
    MaterialCard5Trait_1 = MaterialCard5Trait;
    MaterialCard5Trait.prototype.onLoad = function () {
        var e, r, a, i;
        _super.prototype.onLoad.call(this);
        this._startLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 6;
        this._interval = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.interval) && void 0 !== i ? i : 5;
    };
    MaterialCard5Trait.prototype.setCurMaterialCard = function (t) {
        var e = UserModel_1.default.getInstance();
        e.normalData.setCardMaterialID(t);
        e.travelData.setCardMaterialID(t);
    };
    MaterialCard5Trait.prototype._shouldEnableForLevel = function (t) {
        return !(t < this._startLevel) && (t - this._startLevel) % this._interval == 0;
    };
    MaterialCard5Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (this.isNormalMode()) {
                var a = this.getCurrentLevel();
                this._shouldEnableForLevel(a) && this.switchToNextMaterialCard();
            }
            e();
        }
        catch (t) {
            console.error("[" + MaterialCard5Trait_1.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    MaterialCard5Trait.prototype.onTLWinVw_showTLWinVw = function (t, e) {
        try {
            var a = t.ins, i = null == a ? void 0 : a._curReward, o = null == a ? void 0 : a._curLv, l = null == a ? void 0 : a._canGain;
            i && o && l && i.lv === o - 1 && this.switchToNextMaterialCard();
        }
        catch (t) {
            console.error("[" + MaterialCard5Trait_1.traitKey + "] 旅行胜利处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    var MaterialCard5Trait_1;
    MaterialCard5Trait.traitKey = "MaterialCard5";
    MaterialCard5Trait = MaterialCard5Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCard5Trait")
    ], MaterialCard5Trait);
    return MaterialCard5Trait;
}(MaterialCardBaseTrait_1.default));
exports.default = MaterialCard5Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hdGVyaWFsQ2FyZC9TY3JpcHRzL01hdGVyaWFsQ2FyZDVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQTREO0FBQzVELHNFQUFpRTtBQUdqRTtJQUFnRCxzQ0FBcUI7SUFBckU7UUFBQSxxRUEwQ0M7UUF6Q0MsaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsZUFBUyxHQUFHLENBQUMsQ0FBQzs7SUF3Q2hCLENBQUM7MkJBMUNvQixrQkFBa0I7SUFJckMsbUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2YsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0gsQ0FBQztJQUNELCtDQUFrQixHQUFsQixVQUFtQixDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxrREFBcUIsR0FBckIsVUFBc0IsQ0FBQztRQUNyQixPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBQ0QsbURBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUk7WUFDRixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMvQixJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7YUFDbEU7WUFDRCxDQUFDLEVBQUUsQ0FBQztTQUNMO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxvQkFBa0IsQ0FBQyxRQUFRLEdBQUcsZUFBZSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3RHLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0Qsa0RBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUk7WUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUNYLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFDckMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUNqQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDdEMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1NBQ2xFO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxvQkFBa0IsQ0FBQyxRQUFRLEdBQUcsY0FBYyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ3RHO1FBQ0QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDOztJQXRDTSwyQkFBUSxHQUFHLGVBQWUsQ0FBQztJQUhmLGtCQUFrQjtRQUZ0QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7T0FDVixrQkFBa0IsQ0EwQ3RDO0lBQUQseUJBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQytDLCtCQUFxQixHQTBDcEU7a0JBMUNvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWF0ZXJpYWxDYXJkQmFzZVRyYWl0IGZyb20gJy4vTWF0ZXJpYWxDYXJkQmFzZVRyYWl0JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIk1hdGVyaWFsQ2FyZDVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0ZXJpYWxDYXJkNVRyYWl0IGV4dGVuZHMgTWF0ZXJpYWxDYXJkQmFzZVRyYWl0IHtcbiAgX3N0YXJ0TGV2ZWwgPSA2O1xuICBfaW50ZXJ2YWwgPSA1O1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIk1hdGVyaWFsQ2FyZDVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlLCByLCBhLCBpO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3N0YXJ0TGV2ZWwgPSBudWxsICE9PSAociA9IG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnN0YXJ0TGV2ZWwpICYmIHZvaWQgMCAhPT0gciA/IHIgOiA2O1xuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbCAhPT0gKGkgPSBudWxsID09PSAoYSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5pbnRlcnZhbCkgJiYgdm9pZCAwICE9PSBpID8gaSA6IDU7XG4gIH1cbiAgc2V0Q3VyTWF0ZXJpYWxDYXJkKHQpIHtcbiAgICB2YXIgZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgIGUubm9ybWFsRGF0YS5zZXRDYXJkTWF0ZXJpYWxJRCh0KTtcbiAgICBlLnRyYXZlbERhdGEuc2V0Q2FyZE1hdGVyaWFsSUQodCk7XG4gIH1cbiAgX3Nob3VsZEVuYWJsZUZvckxldmVsKHQpIHtcbiAgICByZXR1cm4gISh0IDwgdGhpcy5fc3RhcnRMZXZlbCkgJiYgKHQgLSB0aGlzLl9zdGFydExldmVsKSAlIHRoaXMuX2ludGVydmFsID09IDA7XG4gIH1cbiAgb25Hc0xpc3RlbmVyX29uTmV3R2FtZSh0LCBlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLmlzTm9ybWFsTW9kZSgpKSB7XG4gICAgICAgIHZhciBhID0gdGhpcy5nZXRDdXJyZW50TGV2ZWwoKTtcbiAgICAgICAgdGhpcy5fc2hvdWxkRW5hYmxlRm9yTGV2ZWwoYSkgJiYgdGhpcy5zd2l0Y2hUb05leHRNYXRlcmlhbENhcmQoKTtcbiAgICAgIH1cbiAgICAgIGUoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgTWF0ZXJpYWxDYXJkNVRyYWl0LnRyYWl0S2V5ICsgXCJdIOWkhOeQhuaWsOa4uOaIj+S6i+S7tuWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uVExXaW5Wd19zaG93VExXaW5Wdyh0LCBlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBhID0gdC5pbnMsXG4gICAgICAgIGkgPSBudWxsID09IGEgPyB2b2lkIDAgOiBhLl9jdXJSZXdhcmQsXG4gICAgICAgIG8gPSBudWxsID09IGEgPyB2b2lkIDAgOiBhLl9jdXJMdixcbiAgICAgICAgbCA9IG51bGwgPT0gYSA/IHZvaWQgMCA6IGEuX2NhbkdhaW47XG4gICAgICBpICYmIG8gJiYgbCAmJiBpLmx2ID09PSBvIC0gMSAmJiB0aGlzLnN3aXRjaFRvTmV4dE1hdGVyaWFsQ2FyZCgpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBNYXRlcmlhbENhcmQ1VHJhaXQudHJhaXRLZXkgKyBcIl0g5peF6KGM6IOc5Yip5aSE55CG5aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICB9XG4gICAgZSgpO1xuICB9XG59Il19