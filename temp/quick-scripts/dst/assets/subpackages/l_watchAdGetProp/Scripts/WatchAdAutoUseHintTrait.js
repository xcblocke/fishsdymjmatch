
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_watchAdGetProp/Scripts/WatchAdAutoUseHintTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '48cd3U7xY9KOK4neRPhd0Mb', 'WatchAdAutoUseHintTrait');
// subpackages/l_watchAdGetProp/Scripts/WatchAdAutoUseHintTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var WatchAdAutoUseHintTrait = /** @class */ (function (_super) {
    __extends(WatchAdAutoUseHintTrait, _super);
    function WatchAdAutoUseHintTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WatchAdAutoUseHintTrait.prototype.onWatchAdCtrl_autoUse = function (t, e) {
        var r = t.args[0];
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal && "hitTips" === r) {
            GameInteraction_1.GameInteraction.input({
                inputType: GameInputEnum_1.EGameInputEnum.Tile2HitTips
            });
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    WatchAdAutoUseHintTrait.traitKey = "WatchAdAutoUseHint";
    WatchAdAutoUseHintTrait = __decorate([
        mj.trait,
        mj.class("WatchAdAutoUseHintTrait")
    ], WatchAdAutoUseHintTrait);
    return WatchAdAutoUseHintTrait;
}(Trait_1.default));
exports.default = WatchAdAutoUseHintTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dhdGNoQWRHZXRQcm9wL1NjcmlwdHMvV2F0Y2hBZEF1dG9Vc2VIaW50VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1GQUFtRjtBQUNuRix3RkFBb0Y7QUFDcEYsb0ZBQW1GO0FBQ25GLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsc0VBQWlFO0FBR2pFO0lBQXFELDJDQUFLO0lBQTFEOztJQWNBLENBQUM7SUFaQyx1REFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixJQUFJLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsS0FBSywwQkFBVSxDQUFDLFdBQVcsSUFBSSxTQUFTLEtBQUssQ0FBQyxFQUFFO1lBQzlGLGlDQUFlLENBQUMsS0FBSyxDQUFDO2dCQUNwQixTQUFTLEVBQUUsOEJBQWMsQ0FBQyxZQUFZO2FBQ3ZDLENBQUMsQ0FBQztZQUNILENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTthQUMzQyxDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFaTSxnQ0FBUSxHQUFHLG9CQUFvQixDQUFDO0lBRHBCLHVCQUF1QjtRQUYzQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUM7T0FDZix1QkFBdUIsQ0FjM0M7SUFBRCw4QkFBQztDQWRELEFBY0MsQ0Fkb0QsZUFBSyxHQWN6RDtrQkFkb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUdhbWVJbnB1dEVudW0gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgR2FtZUludGVyYWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9HYW1lSW50ZXJhY3Rpb24vR2FtZUludGVyYWN0aW9uJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJXYXRjaEFkQXV0b1VzZUhpbnRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2F0Y2hBZEF1dG9Vc2VIaW50VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiV2F0Y2hBZEF1dG9Vc2VIaW50XCI7XG4gIG9uV2F0Y2hBZEN0cmxfYXV0b1VzZSh0LCBlKSB7XG4gICAgdmFyIHIgPSB0LmFyZ3NbMF07XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpID09PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsICYmIFwiaGl0VGlwc1wiID09PSByKSB7XG4gICAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoe1xuICAgICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLlRpbGUySGl0VGlwc1xuICAgICAgfSk7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG59Il19