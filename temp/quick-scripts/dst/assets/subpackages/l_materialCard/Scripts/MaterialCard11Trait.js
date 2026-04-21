
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_materialCard/Scripts/MaterialCard11Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6987fXHOjNHO57231n+tN8x', 'MaterialCard11Trait');
// subpackages/l_materialCard/Scripts/MaterialCard11Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardBaseTrait_1 = require("./MaterialCardBaseTrait");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var MaterialCard11Trait = /** @class */ (function (_super) {
    __extends(MaterialCard11Trait, _super);
    function MaterialCard11Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaterialCard11Trait_1 = MaterialCard11Trait;
    MaterialCard11Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MaterialCard11Trait.prototype._getCurrentModeLevel = function () {
        var t, e, r = UserModel_1.default.getInstance(), a = r.getCurrentGameData();
        return this.isNormalMode() ? null !== (t = r.normalData.getLevelId()) && void 0 !== t ? t : 0 : this.isTravelMode() && null !== (e = a.getLevelId()) && void 0 !== e ? e : 0;
    };
    MaterialCard11Trait.prototype._isHardLevel = function (t) {
        return GameUtils_1.default.isTypeHardLevel(this.getCurrentGameType(), t);
    };
    MaterialCard11Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (!this.isNormalMode() && !this.isTravelMode()) {
                e();
                return;
            }
            this.getCurrentGameType();
            var a = this._getCurrentModeLevel();
            if (this._isHardLevel(a)) {
                this.switchToNextMaterialCard();
            }
            else {
                0 !== this.getCurMaterialCard() && this.setCurMaterialCard(0);
            }
            e();
        }
        catch (t) {
            console.error("[" + MaterialCard11Trait_1.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var MaterialCard11Trait_1;
    MaterialCard11Trait.traitKey = "MaterialCard11";
    MaterialCard11Trait = MaterialCard11Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCard11Trait")
    ], MaterialCard11Trait);
    return MaterialCard11Trait;
}(MaterialCardBaseTrait_1.default));
exports.default = MaterialCard11Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hdGVyaWFsQ2FyZC9TY3JpcHRzL01hdGVyaWFsQ2FyZDExVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUE0RDtBQUM1RCw0RUFBdUU7QUFDdkUsc0VBQWlFO0FBR2pFO0lBQWlELHVDQUFxQjtJQUF0RTs7SUFrQ0EsQ0FBQzs0QkFsQ29CLG1CQUFtQjtJQUV0QyxvQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsa0RBQW9CLEdBQXBCO1FBQ0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxFQUMzQixDQUFDLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9LLENBQUM7SUFDRCwwQ0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLE9BQU8sbUJBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNELG9EQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJO1lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtnQkFDaEQsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDcEMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN4QixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQzthQUNqQztpQkFBTTtnQkFDTCxDQUFDLEtBQUssSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQy9EO1lBQ0QsQ0FBQyxFQUFFLENBQUM7U0FDTDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcscUJBQW1CLENBQUMsUUFBUSxHQUFHLGVBQWUsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN2RyxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQzs7SUFoQ00sNEJBQVEsR0FBRyxnQkFBZ0IsQ0FBQztJQURoQixtQkFBbUI7UUFGdkMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO09BQ1gsbUJBQW1CLENBa0N2QztJQUFELDBCQUFDO0NBbENELEFBa0NDLENBbENnRCwrQkFBcUIsR0FrQ3JFO2tCQWxDb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hdGVyaWFsQ2FyZEJhc2VUcmFpdCBmcm9tICcuL01hdGVyaWFsQ2FyZEJhc2VUcmFpdCc7XG5pbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTWF0ZXJpYWxDYXJkMTFUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0ZXJpYWxDYXJkMTFUcmFpdCBleHRlbmRzIE1hdGVyaWFsQ2FyZEJhc2VUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTWF0ZXJpYWxDYXJkMTFcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIF9nZXRDdXJyZW50TW9kZUxldmVsKCkge1xuICAgIHZhciB0LFxuICAgICAgZSxcbiAgICAgIHIgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKSxcbiAgICAgIGEgPSByLmdldEN1cnJlbnRHYW1lRGF0YSgpO1xuICAgIHJldHVybiB0aGlzLmlzTm9ybWFsTW9kZSgpID8gbnVsbCAhPT0gKHQgPSByLm5vcm1hbERhdGEuZ2V0TGV2ZWxJZCgpKSAmJiB2b2lkIDAgIT09IHQgPyB0IDogMCA6IHRoaXMuaXNUcmF2ZWxNb2RlKCkgJiYgbnVsbCAhPT0gKGUgPSBhLmdldExldmVsSWQoKSkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDA7XG4gIH1cbiAgX2lzSGFyZExldmVsKHQpIHtcbiAgICByZXR1cm4gR2FtZVV0aWxzLmlzVHlwZUhhcmRMZXZlbCh0aGlzLmdldEN1cnJlbnRHYW1lVHlwZSgpLCB0KTtcbiAgfVxuICBvbkdzTGlzdGVuZXJfb25OZXdHYW1lKHQsIGUpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCF0aGlzLmlzTm9ybWFsTW9kZSgpICYmICF0aGlzLmlzVHJhdmVsTW9kZSgpKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5nZXRDdXJyZW50R2FtZVR5cGUoKTtcbiAgICAgIHZhciBhID0gdGhpcy5fZ2V0Q3VycmVudE1vZGVMZXZlbCgpO1xuICAgICAgaWYgKHRoaXMuX2lzSGFyZExldmVsKGEpKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoVG9OZXh0TWF0ZXJpYWxDYXJkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAwICE9PSB0aGlzLmdldEN1ck1hdGVyaWFsQ2FyZCgpICYmIHRoaXMuc2V0Q3VyTWF0ZXJpYWxDYXJkKDApO1xuICAgICAgfVxuICAgICAgZSgpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBNYXRlcmlhbENhcmQxMVRyYWl0LnRyYWl0S2V5ICsgXCJdIOWkhOeQhuaWsOa4uOaIj+S6i+S7tuWksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG59Il19