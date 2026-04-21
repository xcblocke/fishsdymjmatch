
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_watchAdGetProp/Scripts/WatchAdGetPropTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8b3fdtC+CZOA62Nec9KvkDq', 'WatchAdGetPropTrait');
// subpackages/l_watchAdGetProp/Scripts/WatchAdGetPropTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var WatchAdGetPropView_1 = require("./WatchAdGetPropView");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var DAdRewardEnter_1 = require("../../../Scripts/gamePlay/dot/DAdRewardEnter");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var WatchAdGetPropTrait = /** @class */ (function (_super) {
    __extends(WatchAdGetPropTrait, _super);
    function WatchAdGetPropTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WatchAdGetPropTrait.prototype.onIptShuffle_exec = function (t, e) {
        if (t.args[0].isFree)
            e();
        else if (t.args[0].from && t.args[0].from === GameInputEnum_1.EShuffleFrom.Free)
            e();
        else if (t.ins.gameContext.getGameData().isShuffleEnough())
            e();
        else {
            ControllerManager_1.default.getInstance().pushViewByController("WatchAdGetPropController", {
                type: WatchAdGetPropView_1.WatchAdGetPropType.shuffle,
                isShowAction: true
            });
            DAdRewardEnter_1.DotAdRewardEnter.dot(true, DGameAdShow_1.EAdPosition.InGameMotivation_Reshuffle);
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
    };
    WatchAdGetPropTrait.prototype.onIptHitTips_exec = function (t, e) {
        var r = t.ins.gameContext.getGameData();
        if (t.ins.gameContext.getCanHitTips().length)
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        else {
            var o = t.ins.gameController.tileMapObject.getCanMatchTilesHint();
            if (r.isHitTipsEnough())
                e();
            else {
                if (o.length <= 0) {
                    e({
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return
                    });
                    return;
                }
                ControllerManager_1.default.getInstance().pushViewByController("WatchAdGetPropController", {
                    type: WatchAdGetPropView_1.WatchAdGetPropType.hitTips,
                    isShowAction: true
                });
                DAdRewardEnter_1.DotAdRewardEnter.dot(true, DGameAdShow_1.EAdPosition.InGameMotivation_Hint);
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
            }
        }
    };
    WatchAdGetPropTrait.traitKey = "WatchAdGetProp";
    WatchAdGetPropTrait = __decorate([
        mj.trait,
        mj.class("WatchAdGetPropTrait")
    ], WatchAdGetPropTrait);
    return WatchAdGetPropTrait;
}(Trait_1.default));
exports.default = WatchAdGetPropTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dhdGNoQWRHZXRQcm9wL1NjcmlwdHMvV2F0Y2hBZEdldFByb3BUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDJEQUEwRDtBQUMxRCwwRkFBcUY7QUFDckYsOEVBQXdGO0FBQ3hGLCtFQUFnRjtBQUNoRix5RUFBd0U7QUFDeEUsbUZBQWlGO0FBR2pGO0lBQWlELHVDQUFLO0lBQXREOztJQTBDQSxDQUFDO0lBeENDLCtDQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTTtZQUFFLENBQUMsRUFBRSxDQUFDO2FBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyw0QkFBWSxDQUFDLElBQUk7WUFBRSxDQUFDLEVBQUUsQ0FBQzthQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxFQUFFO1lBQUUsQ0FBQyxFQUFFLENBQUM7YUFBSztZQUNsSywyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQywwQkFBMEIsRUFBRTtnQkFDL0UsSUFBSSxFQUFFLHVDQUFrQixDQUFDLE9BQU87Z0JBQ2hDLFlBQVksRUFBRSxJQUFJO2FBQ25CLENBQUMsQ0FBQztZQUNILGlDQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUseUJBQVcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQ25FLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTthQUMzQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFDRCwrQ0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNO1lBQUUsQ0FBQyxDQUFDO2dCQUM5QyxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTthQUMzQyxDQUFDLENBQUM7YUFBSztZQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBQ2xFLElBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRTtnQkFBRSxDQUFDLEVBQUUsQ0FBQztpQkFBSztnQkFDaEMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtvQkFDakIsQ0FBQyxDQUFDO3dCQUNBLE9BQU8sRUFBRSxJQUFJO3dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO3FCQUMzQyxDQUFDLENBQUM7b0JBQ0gsT0FBTztpQkFDUjtnQkFDRCwyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQywwQkFBMEIsRUFBRTtvQkFDL0UsSUFBSSxFQUFFLHVDQUFrQixDQUFDLE9BQU87b0JBQ2hDLFlBQVksRUFBRSxJQUFJO2lCQUNuQixDQUFDLENBQUM7Z0JBQ0gsaUNBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSx5QkFBVyxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQzlELENBQUMsQ0FBQztvQkFDQSxPQUFPLEVBQUUsSUFBSTtvQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtpQkFDM0MsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtJQUNILENBQUM7SUF4Q00sNEJBQVEsR0FBRyxnQkFBZ0IsQ0FBQztJQURoQixtQkFBbUI7UUFGdkMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO09BQ1gsbUJBQW1CLENBMEN2QztJQUFELDBCQUFDO0NBMUNELEFBMENDLENBMUNnRCxlQUFLLEdBMENyRDtrQkExQ29CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBXYXRjaEFkR2V0UHJvcFR5cGUgfSBmcm9tICcuL1dhdGNoQWRHZXRQcm9wVmlldyc7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgeyBEb3RBZFJld2FyZEVudGVyIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREFkUmV3YXJkRW50ZXInO1xuaW1wb3J0IHsgRUFkUG9zaXRpb24gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZUFkU2hvdyc7XG5pbXBvcnQgeyBFU2h1ZmZsZUZyb20gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiV2F0Y2hBZEdldFByb3BUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2F0Y2hBZEdldFByb3BUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJXYXRjaEFkR2V0UHJvcFwiO1xuICBvbklwdFNodWZmbGVfZXhlYyh0LCBlKSB7XG4gICAgaWYgKHQuYXJnc1swXS5pc0ZyZWUpIGUoKTtlbHNlIGlmICh0LmFyZ3NbMF0uZnJvbSAmJiB0LmFyZ3NbMF0uZnJvbSA9PT0gRVNodWZmbGVGcm9tLkZyZWUpIGUoKTtlbHNlIGlmICh0Lmlucy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmlzU2h1ZmZsZUVub3VnaCgpKSBlKCk7ZWxzZSB7XG4gICAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiV2F0Y2hBZEdldFByb3BDb250cm9sbGVyXCIsIHtcbiAgICAgICAgdHlwZTogV2F0Y2hBZEdldFByb3BUeXBlLnNodWZmbGUsXG4gICAgICAgIGlzU2hvd0FjdGlvbjogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBEb3RBZFJld2FyZEVudGVyLmRvdCh0cnVlLCBFQWRQb3NpdGlvbi5JbkdhbWVNb3RpdmF0aW9uX1Jlc2h1ZmZsZSk7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgb25JcHRIaXRUaXBzX2V4ZWModCwgZSkge1xuICAgIHZhciByID0gdC5pbnMuZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKTtcbiAgICBpZiAodC5pbnMuZ2FtZUNvbnRleHQuZ2V0Q2FuSGl0VGlwcygpLmxlbmd0aCkgZSh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgfSk7ZWxzZSB7XG4gICAgICB2YXIgbyA9IHQuaW5zLmdhbWVDb250cm9sbGVyLnRpbGVNYXBPYmplY3QuZ2V0Q2FuTWF0Y2hUaWxlc0hpbnQoKTtcbiAgICAgIGlmIChyLmlzSGl0VGlwc0Vub3VnaCgpKSBlKCk7ZWxzZSB7XG4gICAgICAgIGlmIChvLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgZSh7XG4gICAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJXYXRjaEFkR2V0UHJvcENvbnRyb2xsZXJcIiwge1xuICAgICAgICAgIHR5cGU6IFdhdGNoQWRHZXRQcm9wVHlwZS5oaXRUaXBzLFxuICAgICAgICAgIGlzU2hvd0FjdGlvbjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgRG90QWRSZXdhcmRFbnRlci5kb3QodHJ1ZSwgRUFkUG9zaXRpb24uSW5HYW1lTW90aXZhdGlvbl9IaW50KTtcbiAgICAgICAgZSh7XG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19