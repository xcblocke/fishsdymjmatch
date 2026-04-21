
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_coverTip/Scripts/CoverLockTipTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c88b5J41ZFNioJ5l7A08Ax5', 'CoverLockTipTrait');
// subpackages/l_coverTip/Scripts/CoverLockTipTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ClickCoverLockTipBehavior_1 = require("./ClickCoverLockTipBehavior");
var ClickCoverLockTipEffect_1 = require("./ClickCoverLockTipEffect");
var CoverLockTipTrait = /** @class */ (function (_super) {
    __extends(CoverLockTipTrait, _super);
    function CoverLockTipTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._prefab = null;
        return _this;
    }
    CoverLockTipTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerBehaviors();
    };
    CoverLockTipTrait.prototype.registerBehaviors = function () {
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.ClickCoverLockTip, ClickCoverLockTipBehavior_1.ClickCoverLockTipBehavior);
    };
    CoverLockTipTrait.prototype.onIptTchStart_pushCvr = function (t, e) {
        this.pushHasCoverEffects(t);
        e();
    };
    CoverLockTipTrait.prototype.pushHasCoverEffects = function (t) {
        var e = new ClickCoverLockTipEffect_1.ClickCoverLockTipEffect({
            tileId: t.args[0],
            coverLockTipTrait: this
        });
        t.ins.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    CoverLockTipTrait.traitKey = "CoverLockTip";
    CoverLockTipTrait = __decorate([
        mj.trait,
        mj.class("CoverLockTipTrait")
    ], CoverLockTipTrait);
    return CoverLockTipTrait;
}(Trait_1.default));
exports.default = CoverLockTipTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NvdmVyVGlwL1NjcmlwdHMvQ292ZXJMb2NrVGlwVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlFQUFzRTtBQUN0RSw4RUFBNkU7QUFDN0Usb0VBQW1FO0FBQ25FLGdFQUEyRDtBQUMzRCx5RUFBd0U7QUFDeEUscUVBQW9FO0FBR3BFO0lBQStDLHFDQUFLO0lBQXBEO1FBQUEscUVBcUJDO1FBcEJDLGFBQU8sR0FBRyxJQUFJLENBQUM7O0lBb0JqQixDQUFDO0lBbEJDLGtDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDRCw2Q0FBaUIsR0FBakI7UUFDRSxpQ0FBZSxDQUFDLGdCQUFnQixDQUFDLG1DQUFnQixDQUFDLGlCQUFpQixFQUFFLHFEQUF5QixDQUFDLENBQUM7SUFDbEcsQ0FBQztJQUNELGlEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsK0NBQW1CLEdBQW5CLFVBQW9CLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxpREFBdUIsQ0FBQztZQUNsQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDakIsaUJBQWlCLEVBQUUsSUFBSTtTQUN4QixDQUFDLENBQUM7UUFDSCxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBbEJNLDBCQUFRLEdBQUcsY0FBYyxDQUFDO0lBRmQsaUJBQWlCO1FBRnJDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztPQUNULGlCQUFpQixDQXFCckM7SUFBRCx3QkFBQztDQXJCRCxBQXFCQyxDQXJCOEMsZUFBSyxHQXFCbkQ7a0JBckJvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFSW5zZXJ0VHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29uc3RhbnQvQmVoYXZpb3JzRW51bSc7XG5pbXBvcnQgeyBCZWhhdmlvcnNNYXBwaW5nIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9tYXBwaW5nL0JlaGF2aW9yc01hcHBpbmcnO1xuaW1wb3J0IHsgQmVoYXZpb3JGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9CZWhhdmlvckZhY3RvcnknO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IENsaWNrQ292ZXJMb2NrVGlwQmVoYXZpb3IgfSBmcm9tICcuL0NsaWNrQ292ZXJMb2NrVGlwQmVoYXZpb3InO1xuaW1wb3J0IHsgQ2xpY2tDb3ZlckxvY2tUaXBFZmZlY3QgfSBmcm9tICcuL0NsaWNrQ292ZXJMb2NrVGlwRWZmZWN0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ292ZXJMb2NrVGlwVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdmVyTG9ja1RpcFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfcHJlZmFiID0gbnVsbDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDb3ZlckxvY2tUaXBcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMucmVnaXN0ZXJCZWhhdmlvcnMoKTtcbiAgfVxuICByZWdpc3RlckJlaGF2aW9ycygpIHtcbiAgICBCZWhhdmlvckZhY3RvcnkucmVnaXN0ZXJCZWhhdmlvcihCZWhhdmlvcnNNYXBwaW5nLkNsaWNrQ292ZXJMb2NrVGlwLCBDbGlja0NvdmVyTG9ja1RpcEJlaGF2aW9yKTtcbiAgfVxuICBvbklwdFRjaFN0YXJ0X3B1c2hDdnIodCwgZSkge1xuICAgIHRoaXMucHVzaEhhc0NvdmVyRWZmZWN0cyh0KTtcbiAgICBlKCk7XG4gIH1cbiAgcHVzaEhhc0NvdmVyRWZmZWN0cyh0KSB7XG4gICAgdmFyIGUgPSBuZXcgQ2xpY2tDb3ZlckxvY2tUaXBFZmZlY3Qoe1xuICAgICAgdGlsZUlkOiB0LmFyZ3NbMF0sXG4gICAgICBjb3ZlckxvY2tUaXBUcmFpdDogdGhpc1xuICAgIH0pO1xuICAgIHQuaW5zLnB1c2hFZmZlY3QoZSwgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICB9XG59Il19