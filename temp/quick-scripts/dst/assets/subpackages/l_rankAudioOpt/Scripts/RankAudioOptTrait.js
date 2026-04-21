
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rankAudioOpt/Scripts/RankAudioOptTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '17f29lu/45BArSCR4sqgmxJ', 'RankAudioOptTrait');
// subpackages/l_rankAudioOpt/Scripts/RankAudioOptTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RankAudioOptTrait = /** @class */ (function (_super) {
    __extends(RankAudioOptTrait, _super);
    function RankAudioOptTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankAudioOptTrait.prototype.onSelectBhv_rankCardAud = function (t, r) {
        t.ins.playNormalAudio();
        r({
            returnType: TraitCallbackReturnType.jump
        });
    };
    RankAudioOptTrait.prototype.onIptTchEnd_rankCardAud = function (t, r) {
        t.ins.playNormalAudio();
        r({
            returnType: TraitCallbackReturnType.jump
        });
    };
    RankAudioOptTrait.prototype.onClearBhv_matchAud = function (t, r) {
        if (t.ins._type != TileTypeEnum_1.ETileType.RankCard)
            r();
        else {
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.SpecialTouch);
            r({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
    };
    RankAudioOptTrait.traitKey = "RankAudioOpt";
    RankAudioOptTrait.BUNDLE_NAME = "l_rankAudioOpt";
    RankAudioOptTrait = __decorate([
        mj.trait,
        mj.class("RankAudioOptTrait")
    ], RankAudioOptTrait);
    return RankAudioOptTrait;
}(Trait_1.default));
exports.default = RankAudioOptTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmtBdWRpb09wdC9TY3JpcHRzL1JhbmtBdWRpb09wdFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBa0Y7QUFDbEYsaUZBQTZFO0FBQzdFLGdFQUEyRDtBQUczRDtJQUErQyxxQ0FBSztJQUFwRDs7SUF3QkEsQ0FBQztJQXJCQyxtREFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUM7WUFDQSxVQUFVLEVBQUUsdUJBQXVCLENBQUMsSUFBSTtTQUN6QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsbURBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDO1lBQ0EsVUFBVSxFQUFFLHVCQUF1QixDQUFDLElBQUk7U0FDekMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELCtDQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLHdCQUFTLENBQUMsUUFBUTtZQUFFLENBQUMsRUFBRSxDQUFDO2FBQUs7WUFDOUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsd0JBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNsRCxDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDM0MsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBdEJNLDBCQUFRLEdBQUcsY0FBYyxDQUFDO0lBQzFCLDZCQUFXLEdBQUcsZ0JBQWdCLENBQUM7SUFGbkIsaUJBQWlCO1FBRnJDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztPQUNULGlCQUFpQixDQXdCckM7SUFBRCx3QkFBQztDQXhCRCxBQXdCQyxDQXhCOEMsZUFBSyxHQXdCbkQ7a0JBeEJvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFQXVkaW9JRCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBFVGlsZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9UaWxlVHlwZUVudW0nO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiUmFua0F1ZGlvT3B0VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmtBdWRpb09wdFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlJhbmtBdWRpb09wdFwiO1xuICBzdGF0aWMgQlVORExFX05BTUUgPSBcImxfcmFua0F1ZGlvT3B0XCI7XG4gIG9uU2VsZWN0Qmh2X3JhbmtDYXJkQXVkKHQsIHIpIHtcbiAgICB0Lmlucy5wbGF5Tm9ybWFsQXVkaW8oKTtcbiAgICByKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXBcbiAgICB9KTtcbiAgfVxuICBvbklwdFRjaEVuZF9yYW5rQ2FyZEF1ZCh0LCByKSB7XG4gICAgdC5pbnMucGxheU5vcm1hbEF1ZGlvKCk7XG4gICAgcih7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wXG4gICAgfSk7XG4gIH1cbiAgb25DbGVhckJodl9tYXRjaEF1ZCh0LCByKSB7XG4gICAgaWYgKHQuaW5zLl90eXBlICE9IEVUaWxlVHlwZS5SYW5rQ2FyZCkgcigpO2Vsc2Uge1xuICAgICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3QoRUF1ZGlvSUQuU3BlY2lhbFRvdWNoKTtcbiAgICAgIHIoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSJdfQ==