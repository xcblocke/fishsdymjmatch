
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hardLevelTips/Scripts/HardLevelTipsTile2Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f918dODmilOJ7jBS/TayLl+', 'HardLevelTipsTile2Trait');
// subpackages/l_hardLevelTips/Scripts/HardLevelTipsTile2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var HardLevelTipsBehavior_1 = require("./HardLevelTipsBehavior");
var HardLevelTipsEffect_1 = require("./HardLevelTipsEffect");
var HardLevelTipsTile2Trait = /** @class */ (function (_super) {
    __extends(HardLevelTipsTile2Trait, _super);
    function HardLevelTipsTile2Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HardLevelTipsTile2Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerBehaviors();
    };
    HardLevelTipsTile2Trait.prototype.registerBehaviors = function () {
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.HardLevelTips, HardLevelTipsBehavior_1.HardLevelTipsBehavior);
    };
    HardLevelTipsTile2Trait.prototype.isTile2Mode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    HardLevelTipsTile2Trait.prototype.onIptTile2InitVw_pushEff = function (e, t) {
        var r, o;
        if (this.isTile2Mode()) {
            var i = e.ins.gameContext, a = i.getIsNewGame(), s = i.getGameData().getLevelId(), n = ExtractTool_1.default.getInstance().isHardLevel(s), c = null !== (o = null === (r = this._traitData) || void 0 === r ? void 0 : r.showOnResume) && void 0 !== o && o;
            n && (a || c) && this.pushHardLevelTipsEffect(e, s);
            t();
        }
        else
            t();
    };
    HardLevelTipsTile2Trait.prototype.pushHardLevelTipsEffect = function (e, t) {
        var r = ExtractTool_1.default.getInstance().isExpertUI(t) ? "in_2" : "in_1", o = new HardLevelTipsEffect_1.HardLevelTipsEffect({
            aniName: r
        });
        e.ins.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel);
    };
    HardLevelTipsTile2Trait.traitKey = "HardLevelTipsTile2";
    HardLevelTipsTile2Trait = __decorate([
        mj.trait,
        mj.class("HardLevelTipsTile2Trait")
    ], HardLevelTipsTile2Trait);
    return HardLevelTipsTile2Trait;
}(Trait_1.default));
exports.default = HardLevelTipsTile2Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhcmRMZXZlbFRpcHMvU2NyaXB0cy9IYXJkTGV2ZWxUaXBzVGlsZTJUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHdGQUFvRjtBQUNwRix5RUFBc0U7QUFDdEUsOEVBQTZFO0FBQzdFLG9FQUFtRTtBQUNuRSxpRkFBNEU7QUFDNUUsc0VBQWlFO0FBQ2pFLGlFQUFnRTtBQUNoRSw2REFBNEQ7QUFHNUQ7SUFBcUQsMkNBQUs7SUFBMUQ7O0lBK0JBLENBQUM7SUE3QkMsd0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELG1EQUFpQixHQUFqQjtRQUNFLGlDQUFlLENBQUMsZ0JBQWdCLENBQUMsbUNBQWdCLENBQUMsYUFBYSxFQUFFLDZDQUFxQixDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUNELDZDQUFXLEdBQVg7UUFDRSxPQUFPLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsS0FBSywwQkFBVSxDQUFDLFdBQVcsQ0FBQztJQUNqRixDQUFDO0lBQ0QsMERBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUN2QixDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUNwQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUNoQyxDQUFDLEdBQUcscUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQzVDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuSCxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwRCxDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELHlEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxxQkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQy9ELENBQUMsR0FBRyxJQUFJLHlDQUFtQixDQUFDO1lBQzFCLE9BQU8sRUFBRSxDQUFDO1NBQ1gsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQTdCTSxnQ0FBUSxHQUFHLG9CQUFvQixDQUFDO0lBRHBCLHVCQUF1QjtRQUYzQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUM7T0FDZix1QkFBdUIsQ0ErQjNDO0lBQUQsOEJBQUM7Q0EvQkQsQUErQkMsQ0EvQm9ELGVBQUssR0ErQnpEO2tCQS9Cb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuaW1wb3J0IHsgQmVoYXZpb3JzTWFwcGluZyB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvbWFwcGluZy9CZWhhdmlvcnNNYXBwaW5nJztcbmltcG9ydCB7IEJlaGF2aW9yRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvQmVoYXZpb3JGYWN0b3J5JztcbmltcG9ydCBFeHRyYWN0VG9vbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvZXh0cmFjdFF1ZXN0aW9uL0V4dHJhY3RUb29sJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBIYXJkTGV2ZWxUaXBzQmVoYXZpb3IgfSBmcm9tICcuL0hhcmRMZXZlbFRpcHNCZWhhdmlvcic7XG5pbXBvcnQgeyBIYXJkTGV2ZWxUaXBzRWZmZWN0IH0gZnJvbSAnLi9IYXJkTGV2ZWxUaXBzRWZmZWN0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiSGFyZExldmVsVGlwc1RpbGUyVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhcmRMZXZlbFRpcHNUaWxlMlRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkhhcmRMZXZlbFRpcHNUaWxlMlwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5yZWdpc3RlckJlaGF2aW9ycygpO1xuICB9XG4gIHJlZ2lzdGVyQmVoYXZpb3JzKCkge1xuICAgIEJlaGF2aW9yRmFjdG9yeS5yZWdpc3RlckJlaGF2aW9yKEJlaGF2aW9yc01hcHBpbmcuSGFyZExldmVsVGlwcywgSGFyZExldmVsVGlwc0JlaGF2aW9yKTtcbiAgfVxuICBpc1RpbGUyTW9kZSgpIHtcbiAgICByZXR1cm4gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgPT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWw7XG4gIH1cbiAgb25JcHRUaWxlMkluaXRWd19wdXNoRWZmKGUsIHQpIHtcbiAgICB2YXIgciwgbztcbiAgICBpZiAodGhpcy5pc1RpbGUyTW9kZSgpKSB7XG4gICAgICB2YXIgaSA9IGUuaW5zLmdhbWVDb250ZXh0LFxuICAgICAgICBhID0gaS5nZXRJc05ld0dhbWUoKSxcbiAgICAgICAgcyA9IGkuZ2V0R2FtZURhdGEoKS5nZXRMZXZlbElkKCksXG4gICAgICAgIG4gPSBFeHRyYWN0VG9vbC5nZXRJbnN0YW5jZSgpLmlzSGFyZExldmVsKHMpLFxuICAgICAgICBjID0gbnVsbCAhPT0gKG8gPSBudWxsID09PSAociA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5zaG93T25SZXN1bWUpICYmIHZvaWQgMCAhPT0gbyAmJiBvO1xuICAgICAgbiAmJiAoYSB8fCBjKSAmJiB0aGlzLnB1c2hIYXJkTGV2ZWxUaXBzRWZmZWN0KGUsIHMpO1xuICAgICAgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgcHVzaEhhcmRMZXZlbFRpcHNFZmZlY3QoZSwgdCkge1xuICAgIHZhciByID0gRXh0cmFjdFRvb2wuZ2V0SW5zdGFuY2UoKS5pc0V4cGVydFVJKHQpID8gXCJpbl8yXCIgOiBcImluXzFcIixcbiAgICAgIG8gPSBuZXcgSGFyZExldmVsVGlwc0VmZmVjdCh7XG4gICAgICAgIGFuaU5hbWU6IHJcbiAgICAgIH0pO1xuICAgIGUuaW5zLnB1c2hFZmZlY3QobywgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICB9XG59Il19