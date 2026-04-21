
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dianzan/Scripts/DianZanTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b9b3fD2TMZNjqBTUbdG01Pb', 'DianZanTrait');
// subpackages/l_dianzan/Scripts/DianZanTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var DianZanBehavior_1 = require("./DianZanBehavior");
var DianZanEffect_1 = require("./DianZanEffect");
var DianZanTrait = /** @class */ (function (_super) {
    __extends(DianZanTrait, _super);
    function DianZanTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._beforeClearMatchNum = 0;
        _this._afterClearMatchNum = 0;
        return _this;
    }
    DianZanTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._registerBehaviors();
    };
    DianZanTrait.prototype._registerBehaviors = function () {
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.ShowDianZan, DianZanBehavior_1.DianZanBehavior);
    };
    DianZanTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[GameEvent_1.EGameEvent.Effect_ClearAfter] = this.onEffectClearAfterCB.bind(this);
        _t[GameEvent_1.EGameEvent.Effect_InitView] = this.onEffectInitViewCB.bind(this);
        return _t;
    };
    DianZanTrait.prototype.onEffectInitViewCB = function (t) {
        this._beforeClearMatchNum = t.gameContext.getTileMapObject().getCanMatchCardPairNum();
    };
    DianZanTrait.prototype.onEffectClearAfterCB = function (t, e) {
        Date.now(), Math.random().toString(36).substr(2, 9);
        e.options.input.inputType !== GameInputEnum_1.EGameInputEnum.AutoMerge && this._handlePushClearEffect(t, e);
    };
    DianZanTrait.prototype._checkDianZan = function () {
        return this._afterClearMatchNum >= this._beforeClearMatchNum;
    };
    DianZanTrait.prototype.checkDianZanSpecial = function () {
        return true;
    };
    DianZanTrait.prototype._handlePushClearEffect = function (t, e) {
        this._afterClearMatchNum = t.gameContext.getTileMapObject().getCanMatchCardPairNum();
        if (this._checkDianZan()) {
            if (!UserModel_1.default.getInstance().isGuideFinished() || !this.checkDianZanSpecial(e.tileId, e.lastTileId))
                return;
            var n = new DianZanEffect_1.DianZanEffect({
                tileId: e.tileId,
                lastTileId: e.lastTileId
            });
            t.pushEffect(n, BehaviorsEnum_1.EInsertType.Parallel);
        }
        this._beforeClearMatchNum = this._afterClearMatchNum;
    };
    DianZanTrait.traitKey = "DianZan";
    __decorate([
        mj.traitEvent("DianZanTt_checkDZ")
    ], DianZanTrait.prototype, "_checkDianZan", null);
    __decorate([
        mj.traitEvent("DianZanTt_checkDZSpecial")
    ], DianZanTrait.prototype, "checkDianZanSpecial", null);
    DianZanTrait = __decorate([
        mj.trait,
        mj.class("DianZanTrait")
    ], DianZanTrait);
    return DianZanTrait;
}(Trait_1.default));
exports.default = DianZanTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RpYW56YW4vU2NyaXB0cy9EaWFuWmFuVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlFQUFzRTtBQUN0RSwyRUFBMkU7QUFDM0UsbUZBQW1GO0FBQ25GLDhFQUE2RTtBQUM3RSxvRUFBbUU7QUFDbkUsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUNqRSxxREFBb0Q7QUFDcEQsaURBQWdEO0FBR2hEO0lBQTBDLGdDQUFLO0lBQS9DO1FBQUEscUVBNENDO1FBM0NDLDBCQUFvQixHQUFHLENBQUMsQ0FBQztRQUN6Qix5QkFBbUIsR0FBRyxDQUFDLENBQUM7O0lBMEMxQixDQUFDO0lBeENDLDZCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRCx5Q0FBa0IsR0FBbEI7UUFDRSxpQ0FBZSxDQUFDLGdCQUFnQixDQUFDLG1DQUFnQixDQUFDLFdBQVcsRUFBRSxpQ0FBZSxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUNELDBDQUFtQixHQUFuQjtRQUNFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNaLEVBQUUsQ0FBQyxzQkFBVSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RSxFQUFFLENBQUMsc0JBQVUsQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELHlDQUFrQixHQUFsQixVQUFtQixDQUFDO1FBQ2xCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUN4RixDQUFDO0lBQ0QsMkNBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxLQUFLLDhCQUFjLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVELG9DQUFhLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDL0QsQ0FBQztJQUVELDBDQUFtQixHQUFuQjtRQUNFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELDZDQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDckYsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDO2dCQUFFLE9BQU87WUFDNUcsSUFBSSxDQUFDLEdBQUcsSUFBSSw2QkFBYSxDQUFDO2dCQUN4QixNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU07Z0JBQ2hCLFVBQVUsRUFBRSxDQUFDLENBQUMsVUFBVTthQUN6QixDQUFDLENBQUM7WUFDSCxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUN2RCxDQUFDO0lBeENNLHFCQUFRLEdBQUcsU0FBUyxDQUFDO0lBc0I1QjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7cURBR2xDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDOzJEQUd6QztJQS9Ca0IsWUFBWTtRQUZoQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDO09BQ0osWUFBWSxDQTRDaEM7SUFBRCxtQkFBQztDQTVDRCxBQTRDQyxDQTVDeUMsZUFBSyxHQTRDOUM7a0JBNUNvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuaW1wb3J0IHsgRUdhbWVFdmVudCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVFdmVudCc7XG5pbXBvcnQgeyBFR2FtZUlucHV0RW51bSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgQmVoYXZpb3JzTWFwcGluZyB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvbWFwcGluZy9CZWhhdmlvcnNNYXBwaW5nJztcbmltcG9ydCB7IEJlaGF2aW9yRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvQmVoYXZpb3JGYWN0b3J5JztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgRGlhblphbkJlaGF2aW9yIH0gZnJvbSAnLi9EaWFuWmFuQmVoYXZpb3InO1xuaW1wb3J0IHsgRGlhblphbkVmZmVjdCB9IGZyb20gJy4vRGlhblphbkVmZmVjdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkRpYW5aYW5UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhblphblRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfYmVmb3JlQ2xlYXJNYXRjaE51bSA9IDA7XG4gIF9hZnRlckNsZWFyTWF0Y2hOdW0gPSAwO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkRpYW5aYW5cIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3JlZ2lzdGVyQmVoYXZpb3JzKCk7XG4gIH1cbiAgX3JlZ2lzdGVyQmVoYXZpb3JzKCkge1xuICAgIEJlaGF2aW9yRmFjdG9yeS5yZWdpc3RlckJlaGF2aW9yKEJlaGF2aW9yc01hcHBpbmcuU2hvd0RpYW5aYW4sIERpYW5aYW5CZWhhdmlvcik7XG4gIH1cbiAgZ2V0TWVzc2FnZUxpc3RlbmVycygpIHtcbiAgICB2YXIgX3QgPSB7fTtcbiAgICBfdFtFR2FtZUV2ZW50LkVmZmVjdF9DbGVhckFmdGVyXSA9IHRoaXMub25FZmZlY3RDbGVhckFmdGVyQ0IuYmluZCh0aGlzKTtcbiAgICBfdFtFR2FtZUV2ZW50LkVmZmVjdF9Jbml0Vmlld10gPSB0aGlzLm9uRWZmZWN0SW5pdFZpZXdDQi5iaW5kKHRoaXMpO1xuICAgIHJldHVybiBfdDtcbiAgfVxuICBvbkVmZmVjdEluaXRWaWV3Q0IodCkge1xuICAgIHRoaXMuX2JlZm9yZUNsZWFyTWF0Y2hOdW0gPSB0LmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRDYW5NYXRjaENhcmRQYWlyTnVtKCk7XG4gIH1cbiAgb25FZmZlY3RDbGVhckFmdGVyQ0IodCwgZSkge1xuICAgIERhdGUubm93KCksIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcbiAgICBlLm9wdGlvbnMuaW5wdXQuaW5wdXRUeXBlICE9PSBFR2FtZUlucHV0RW51bS5BdXRvTWVyZ2UgJiYgdGhpcy5faGFuZGxlUHVzaENsZWFyRWZmZWN0KHQsIGUpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRGlhblphblR0X2NoZWNrRFpcIilcbiAgX2NoZWNrRGlhblphbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYWZ0ZXJDbGVhck1hdGNoTnVtID49IHRoaXMuX2JlZm9yZUNsZWFyTWF0Y2hOdW07XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJEaWFuWmFuVHRfY2hlY2tEWlNwZWNpYWxcIilcbiAgY2hlY2tEaWFuWmFuU3BlY2lhbCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBfaGFuZGxlUHVzaENsZWFyRWZmZWN0KHQsIGUpIHtcbiAgICB0aGlzLl9hZnRlckNsZWFyTWF0Y2hOdW0gPSB0LmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRDYW5NYXRjaENhcmRQYWlyTnVtKCk7XG4gICAgaWYgKHRoaXMuX2NoZWNrRGlhblphbigpKSB7XG4gICAgICBpZiAoIVVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmlzR3VpZGVGaW5pc2hlZCgpIHx8ICF0aGlzLmNoZWNrRGlhblphblNwZWNpYWwoZS50aWxlSWQsIGUubGFzdFRpbGVJZCkpIHJldHVybjtcbiAgICAgIHZhciBuID0gbmV3IERpYW5aYW5FZmZlY3Qoe1xuICAgICAgICB0aWxlSWQ6IGUudGlsZUlkLFxuICAgICAgICBsYXN0VGlsZUlkOiBlLmxhc3RUaWxlSWRcbiAgICAgIH0pO1xuICAgICAgdC5wdXNoRWZmZWN0KG4sIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgICB9XG4gICAgdGhpcy5fYmVmb3JlQ2xlYXJNYXRjaE51bSA9IHRoaXMuX2FmdGVyQ2xlYXJNYXRjaE51bTtcbiAgfVxufSJdfQ==