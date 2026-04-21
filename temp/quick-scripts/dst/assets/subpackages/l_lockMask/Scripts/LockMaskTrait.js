
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_lockMask/Scripts/LockMaskTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '37de7srz3hJo4LhXyIQra8w', 'LockMaskTrait');
// subpackages/l_lockMask/Scripts/LockMaskTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var ShowLockMaskEffect_1 = require("../../../Scripts/ShowLockMaskEffect");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var RemoveLockMaskBehavior_1 = require("../../../Scripts/base/RemoveLockMaskBehavior");
var ToggleShowLockMaskBehavior_1 = require("../../../Scripts/base/ToggleShowLockMaskBehavior");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var LockMaskTrait = /** @class */ (function (_super) {
    __extends(LockMaskTrait, _super);
    function LockMaskTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LockMaskTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.isNewParam() && this._registerBehaviors();
    };
    LockMaskTrait.prototype.isNewParam = function () {
        return "number" == typeof this._traitData.delay;
    };
    LockMaskTrait.prototype.isShowCoveredTile = function () {
        return true === this._traitData.showCovered;
    };
    LockMaskTrait.prototype._registerBehaviors = function () {
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.ToggleShowLockMask, ToggleShowLockMaskBehavior_1.ToggleShowLockMaskBehavior);
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.RemoveLockMask, RemoveLockMaskBehavior_1.RemoveLockMaskBehavior);
    };
    LockMaskTrait.prototype.getMessageListeners = function () {
        var _e = {};
        _e[GameEvent_1.EGameEvent.Effect_Shuffle] = this.onEffectShuffleCB.bind(this);
        return _e;
    };
    LockMaskTrait.prototype.onEffectShuffleCB = function () {
        this.isNewParam() && GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.RemoveLockMask
        });
    };
    LockMaskTrait.prototype.onIptTchStart_Lock = function (e, t) {
        t();
        this._handleLockMask(e.args[0], e.ins);
    };
    LockMaskTrait.prototype.onT2TchRunLock_exec = function (e, t) {
        t();
        var o = e.args[0], r = e.args[1];
        !this.isShowCoveredTile() && this._isTileCovered(o, r) || this._handleLockMask(r, o);
    };
    LockMaskTrait.prototype._isTileCovered = function (e, t) {
        if (!e || !t)
            return false;
        var o = e.tileMapObject;
        if (!o)
            return false;
        var r = o.getTileObject(t);
        return !!r && o.isHasCover(r);
    };
    LockMaskTrait.prototype._handleLockMask = function (e, t) {
        if (!this.shouldSkipAnimation() && e && t) {
            var o = new ShowLockMaskEffect_1.ShowLockMaskEffect({
                tileId: e,
                delay: this.isNewParam() ? this._traitData.delay : 0.7
            });
            t.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel);
        }
    };
    LockMaskTrait.prototype.onUISetDlg_updLckHL = function (e, t) {
        var o = e.args[0];
        this._toggleShowLockMask(o);
        t();
    };
    LockMaskTrait.prototype.onGuide_skip = function (e, t) {
        var o = UserModel_1.default.getInstance().isLockHighlightEnabled();
        this._toggleShowLockMask(o);
        t();
    };
    LockMaskTrait.prototype._toggleShowLockMask = function (e) {
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.ToggleShowLockMask,
            enabled: e
        });
    };
    LockMaskTrait.prototype.shouldSkipAnimation = function () {
        var e = UserModel_1.default.getInstance(), t = mj.getClassByName("GuideTrait");
        if (t && t.getInstance() && true === t.getInstance().eventEnabled && !e.isGuideFinished()) {
            var o = mj.getClassByName("CardLockDarkenTrait");
            if (o) {
                var r = o.getInstance();
                if (r && r.isEnabled())
                    return true;
            }
        }
        else if (e.isLockHighlightEnabled())
            return true;
        return false;
    };
    LockMaskTrait.prototype.onClearBhv_collision = function (e, t) {
        var o = e.ins.context;
        if (cc.isValid(o)) {
            var r = o.getTileMapObject(), i = o.getTileNodeMap();
            if (cc.isValid(r) && cc.isValid(i)) {
                i.forEach(function (e, t) {
                    var o = r.getTileObject(t);
                    if (o && o.isValid && 0 === o.isCardLock()) {
                        var i = e.tileNode.getChildByName("imgMaskFadeOut");
                        cc.isValid(i) && i.destroy();
                    }
                });
                t();
            }
            else
                t();
        }
        else
            t();
    };
    LockMaskTrait.traitKey = "LockMask";
    LockMaskTrait = __decorate([
        mj.trait,
        mj.class("LockMaskTrait")
    ], LockMaskTrait);
    return LockMaskTrait;
}(Trait_1.default));
exports.default = LockMaskTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xvY2tNYXNrL1NjcmlwdHMvTG9ja01hc2tUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUVBQXNFO0FBQ3RFLDJFQUEyRTtBQUMzRSxtRkFBbUY7QUFDbkYsMEVBQXlFO0FBQ3pFLDhFQUE2RTtBQUM3RSxvRUFBbUU7QUFDbkUsdUZBQXNGO0FBQ3RGLCtGQUE4RjtBQUM5RixvRkFBbUY7QUFDbkYsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUdqRTtJQUEyQyxpQ0FBSztJQUFoRDs7SUFpR0EsQ0FBQztJQS9GQyw4QkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDakQsQ0FBQztJQUNELGtDQUFVLEdBQVY7UUFDRSxPQUFPLFFBQVEsSUFBSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ2xELENBQUM7SUFDRCx5Q0FBaUIsR0FBakI7UUFDRSxPQUFPLElBQUksS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsMENBQWtCLEdBQWxCO1FBQ0UsaUNBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxtQ0FBZ0IsQ0FBQyxrQkFBa0IsRUFBRSx1REFBMEIsQ0FBQyxDQUFDO1FBQ2xHLGlDQUFlLENBQUMsZ0JBQWdCLENBQUMsbUNBQWdCLENBQUMsY0FBYyxFQUFFLCtDQUFzQixDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUNELDJDQUFtQixHQUFuQjtRQUNFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNaLEVBQUUsQ0FBQyxzQkFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEUsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0QseUNBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLGlDQUFlLENBQUMsS0FBSyxDQUFDO1lBQ3pDLFNBQVMsRUFBRSw4QkFBYyxDQUFDLGNBQWM7U0FDekMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELDBDQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixDQUFDLEVBQUUsQ0FBQztRQUNKLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELDJDQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQUUsQ0FBQztRQUNKLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBQ0Qsc0NBQWMsR0FBZCxVQUFlLENBQUMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUN4QixJQUFJLENBQUMsQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNELHVDQUFlLEdBQWYsVUFBZ0IsQ0FBQyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLEdBQUcsSUFBSSx1Q0FBa0IsQ0FBQztnQkFDN0IsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUc7YUFDdkQsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7SUFDRCwyQ0FBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0Qsb0NBQVksR0FBWixVQUFhLENBQUMsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCwyQ0FBbUIsR0FBbkIsVUFBb0IsQ0FBQztRQUNuQixpQ0FBZSxDQUFDLEtBQUssQ0FBQztZQUNwQixTQUFTLEVBQUUsOEJBQWMsQ0FBQyxrQkFBa0I7WUFDNUMsT0FBTyxFQUFFLENBQUM7U0FDWCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsMkNBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsRUFDN0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUFFO1lBQ3pGLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUU7b0JBQUUsT0FBTyxJQUFJLENBQUM7YUFDckM7U0FDRjthQUFNLElBQUksQ0FBQyxDQUFDLHNCQUFzQixFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDbkQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0QsNENBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQ3RCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsRUFDMUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN6QixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO29CQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7d0JBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7d0JBQ3BELEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO3FCQUM5QjtnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDSCxDQUFDLEVBQUUsQ0FBQzthQUNMOztnQkFBTSxDQUFDLEVBQUUsQ0FBQztTQUNaOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQS9GTSxzQkFBUSxHQUFHLFVBQVUsQ0FBQztJQURWLGFBQWE7UUFGakMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztPQUNMLGFBQWEsQ0FpR2pDO0lBQUQsb0JBQUM7Q0FqR0QsQUFpR0MsQ0FqRzBDLGVBQUssR0FpRy9DO2tCQWpHb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVJbnNlcnRUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb25zdGFudC9CZWhhdmlvcnNFbnVtJztcbmltcG9ydCB7IEVHYW1lRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9HYW1lRXZlbnQnO1xuaW1wb3J0IHsgRUdhbWVJbnB1dEVudW0gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IFNob3dMb2NrTWFza0VmZmVjdCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvU2hvd0xvY2tNYXNrRWZmZWN0JztcbmltcG9ydCB7IEJlaGF2aW9yc01hcHBpbmcgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL21hcHBpbmcvQmVoYXZpb3JzTWFwcGluZyc7XG5pbXBvcnQgeyBCZWhhdmlvckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0JlaGF2aW9yRmFjdG9yeSc7XG5pbXBvcnQgeyBSZW1vdmVMb2NrTWFza0JlaGF2aW9yIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9iYXNlL1JlbW92ZUxvY2tNYXNrQmVoYXZpb3InO1xuaW1wb3J0IHsgVG9nZ2xlU2hvd0xvY2tNYXNrQmVoYXZpb3IgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvVG9nZ2xlU2hvd0xvY2tNYXNrQmVoYXZpb3InO1xuaW1wb3J0IHsgR2FtZUludGVyYWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9HYW1lSW50ZXJhY3Rpb24vR2FtZUludGVyYWN0aW9uJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJMb2NrTWFza1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NrTWFza1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkxvY2tNYXNrXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmlzTmV3UGFyYW0oKSAmJiB0aGlzLl9yZWdpc3RlckJlaGF2aW9ycygpO1xuICB9XG4gIGlzTmV3UGFyYW0oKSB7XG4gICAgcmV0dXJuIFwibnVtYmVyXCIgPT0gdHlwZW9mIHRoaXMuX3RyYWl0RGF0YS5kZWxheTtcbiAgfVxuICBpc1Nob3dDb3ZlcmVkVGlsZSgpIHtcbiAgICByZXR1cm4gdHJ1ZSA9PT0gdGhpcy5fdHJhaXREYXRhLnNob3dDb3ZlcmVkO1xuICB9XG4gIF9yZWdpc3RlckJlaGF2aW9ycygpIHtcbiAgICBCZWhhdmlvckZhY3RvcnkucmVnaXN0ZXJCZWhhdmlvcihCZWhhdmlvcnNNYXBwaW5nLlRvZ2dsZVNob3dMb2NrTWFzaywgVG9nZ2xlU2hvd0xvY2tNYXNrQmVoYXZpb3IpO1xuICAgIEJlaGF2aW9yRmFjdG9yeS5yZWdpc3RlckJlaGF2aW9yKEJlaGF2aW9yc01hcHBpbmcuUmVtb3ZlTG9ja01hc2ssIFJlbW92ZUxvY2tNYXNrQmVoYXZpb3IpO1xuICB9XG4gIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF9lID0ge307XG4gICAgX2VbRUdhbWVFdmVudC5FZmZlY3RfU2h1ZmZsZV0gPSB0aGlzLm9uRWZmZWN0U2h1ZmZsZUNCLmJpbmQodGhpcyk7XG4gICAgcmV0dXJuIF9lO1xuICB9XG4gIG9uRWZmZWN0U2h1ZmZsZUNCKCkge1xuICAgIHRoaXMuaXNOZXdQYXJhbSgpICYmIEdhbWVJbnRlcmFjdGlvbi5pbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLlJlbW92ZUxvY2tNYXNrXG4gICAgfSk7XG4gIH1cbiAgb25JcHRUY2hTdGFydF9Mb2NrKGUsIHQpIHtcbiAgICB0KCk7XG4gICAgdGhpcy5faGFuZGxlTG9ja01hc2soZS5hcmdzWzBdLCBlLmlucyk7XG4gIH1cbiAgb25UMlRjaFJ1bkxvY2tfZXhlYyhlLCB0KSB7XG4gICAgdCgpO1xuICAgIHZhciBvID0gZS5hcmdzWzBdLFxuICAgICAgciA9IGUuYXJnc1sxXTtcbiAgICAhdGhpcy5pc1Nob3dDb3ZlcmVkVGlsZSgpICYmIHRoaXMuX2lzVGlsZUNvdmVyZWQobywgcikgfHwgdGhpcy5faGFuZGxlTG9ja01hc2sociwgbyk7XG4gIH1cbiAgX2lzVGlsZUNvdmVyZWQoZSwgdCkge1xuICAgIGlmICghZSB8fCAhdCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBvID0gZS50aWxlTWFwT2JqZWN0O1xuICAgIGlmICghbykgcmV0dXJuIGZhbHNlO1xuICAgIHZhciByID0gby5nZXRUaWxlT2JqZWN0KHQpO1xuICAgIHJldHVybiAhIXIgJiYgby5pc0hhc0NvdmVyKHIpO1xuICB9XG4gIF9oYW5kbGVMb2NrTWFzayhlLCB0KSB7XG4gICAgaWYgKCF0aGlzLnNob3VsZFNraXBBbmltYXRpb24oKSAmJiBlICYmIHQpIHtcbiAgICAgIHZhciBvID0gbmV3IFNob3dMb2NrTWFza0VmZmVjdCh7XG4gICAgICAgIHRpbGVJZDogZSxcbiAgICAgICAgZGVsYXk6IHRoaXMuaXNOZXdQYXJhbSgpID8gdGhpcy5fdHJhaXREYXRhLmRlbGF5IDogMC43XG4gICAgICB9KTtcbiAgICAgIHQucHVzaEVmZmVjdChvLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gICAgfVxuICB9XG4gIG9uVUlTZXREbGdfdXBkTGNrSEwoZSwgdCkge1xuICAgIHZhciBvID0gZS5hcmdzWzBdO1xuICAgIHRoaXMuX3RvZ2dsZVNob3dMb2NrTWFzayhvKTtcbiAgICB0KCk7XG4gIH1cbiAgb25HdWlkZV9za2lwKGUsIHQpIHtcbiAgICB2YXIgbyA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmlzTG9ja0hpZ2hsaWdodEVuYWJsZWQoKTtcbiAgICB0aGlzLl90b2dnbGVTaG93TG9ja01hc2sobyk7XG4gICAgdCgpO1xuICB9XG4gIF90b2dnbGVTaG93TG9ja01hc2soZSkge1xuICAgIEdhbWVJbnRlcmFjdGlvbi5pbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLlRvZ2dsZVNob3dMb2NrTWFzayxcbiAgICAgIGVuYWJsZWQ6IGVcbiAgICB9KTtcbiAgfVxuICBzaG91bGRTa2lwQW5pbWF0aW9uKCkge1xuICAgIHZhciBlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICB0ID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJHdWlkZVRyYWl0XCIpO1xuICAgIGlmICh0ICYmIHQuZ2V0SW5zdGFuY2UoKSAmJiB0cnVlID09PSB0LmdldEluc3RhbmNlKCkuZXZlbnRFbmFibGVkICYmICFlLmlzR3VpZGVGaW5pc2hlZCgpKSB7XG4gICAgICB2YXIgbyA9IG1qLmdldENsYXNzQnlOYW1lKFwiQ2FyZExvY2tEYXJrZW5UcmFpdFwiKTtcbiAgICAgIGlmIChvKSB7XG4gICAgICAgIHZhciByID0gby5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBpZiAociAmJiByLmlzRW5hYmxlZCgpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUuaXNMb2NrSGlnaGxpZ2h0RW5hYmxlZCgpKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgb25DbGVhckJodl9jb2xsaXNpb24oZSwgdCkge1xuICAgIHZhciBvID0gZS5pbnMuY29udGV4dDtcbiAgICBpZiAoY2MuaXNWYWxpZChvKSkge1xuICAgICAgdmFyIHIgPSBvLmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgICAgaSA9IG8uZ2V0VGlsZU5vZGVNYXAoKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHIpICYmIGNjLmlzVmFsaWQoaSkpIHtcbiAgICAgICAgaS5mb3JFYWNoKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgdmFyIG8gPSByLmdldFRpbGVPYmplY3QodCk7XG4gICAgICAgICAgaWYgKG8gJiYgby5pc1ZhbGlkICYmIDAgPT09IG8uaXNDYXJkTG9jaygpKSB7XG4gICAgICAgICAgICB2YXIgaSA9IGUudGlsZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdNYXNrRmFkZU91dFwiKTtcbiAgICAgICAgICAgIGNjLmlzVmFsaWQoaSkgJiYgaS5kZXN0cm95KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdCgpO1xuICAgICAgfSBlbHNlIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG59Il19