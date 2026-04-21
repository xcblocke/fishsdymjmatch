
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_t2RplcClkCardSnd/Scripts/T2RplcClkCardSndTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7cbdepNka5CwLnoL+mDPSg9', 'T2RplcClkCardSndTrait');
// subpackages/l_t2RplcClkCardSnd/Scripts/T2RplcClkCardSndTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var T2RplcClkCardSndTrait = /** @class */ (function (_super) {
    __extends(T2RplcClkCardSndTrait, _super);
    function T2RplcClkCardSndTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    T2RplcClkCardSndTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerOldGameplayEvents();
    };
    T2RplcClkCardSndTrait.prototype.registerOldGameplayEvents = function () {
        this.registerEvent([{
                event: "SelectBhv_playNmlAud"
            }, {
                event: "SelectBhv_rollCardAud"
            }]);
    };
    T2RplcClkCardSndTrait.prototype.onT2UpSlotBarBhv_playTchAud = function (t, e) {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Tile2Touch2);
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            isBreak: true
        });
    };
    T2RplcClkCardSndTrait.prototype.onT2RollCardBhv_playRvlAud = function (t, e) {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Check1);
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            isBreak: true
        });
    };
    T2RplcClkCardSndTrait.prototype.onSelectBhv_playNmlAud = function (t, e) {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Tile2Touch2);
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            isBreak: true
        });
    };
    T2RplcClkCardSndTrait.prototype.onSelectBhv_rollCardAud = function (t, e) {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Check1);
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            isBreak: true
        });
    };
    T2RplcClkCardSndTrait.traitKey = "T2RplcClkCardSnd";
    T2RplcClkCardSndTrait = __decorate([
        mj.trait,
        mj.class("T2RplcClkCardSndTrait")
    ], T2RplcClkCardSndTrait);
    return T2RplcClkCardSndTrait;
}(Trait_1.default));
exports.default = T2RplcClkCardSndTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3QyUnBsY0Nsa0NhcmRTbmQvU2NyaXB0cy9UMlJwbGNDbGtDYXJkU25kVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsd0ZBQWtGO0FBR2xGO0lBQW1ELHlDQUFLO0lBQXhEOztJQXlDQSxDQUFDO0lBdkNDLHNDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFDRCx5REFBeUIsR0FBekI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ2xCLEtBQUssRUFBRSxzQkFBc0I7YUFDOUIsRUFBRTtnQkFDRCxLQUFLLEVBQUUsdUJBQXVCO2FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNELDJEQUEyQixHQUEzQixVQUE0QixDQUFDLEVBQUUsQ0FBQztRQUM5QixFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyx3QkFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxJQUFJO1lBQ3hDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELDBEQUEwQixHQUExQixVQUEyQixDQUFDLEVBQUUsQ0FBQztRQUM3QixFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyx3QkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxJQUFJO1lBQ3hDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHNEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyx3QkFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxJQUFJO1lBQ3hDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHVEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyx3QkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxJQUFJO1lBQ3hDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXZDTSw4QkFBUSxHQUFHLGtCQUFrQixDQUFDO0lBRGxCLHFCQUFxQjtRQUZ6QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7T0FDYixxQkFBcUIsQ0F5Q3pDO0lBQUQsNEJBQUM7Q0F6Q0QsQUF5Q0MsQ0F6Q2tELGVBQUssR0F5Q3ZEO2tCQXpDb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCB7IEVBdWRpb0lEIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVDJScGxjQ2xrQ2FyZFNuZFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUMlJwbGNDbGtDYXJkU25kVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVDJScGxjQ2xrQ2FyZFNuZFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5yZWdpc3Rlck9sZEdhbWVwbGF5RXZlbnRzKCk7XG4gIH1cbiAgcmVnaXN0ZXJPbGRHYW1lcGxheUV2ZW50cygpIHtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoW3tcbiAgICAgIGV2ZW50OiBcIlNlbGVjdEJodl9wbGF5Tm1sQXVkXCJcbiAgICB9LCB7XG4gICAgICBldmVudDogXCJTZWxlY3RCaHZfcm9sbENhcmRBdWRcIlxuICAgIH1dKTtcbiAgfVxuICBvblQyVXBTbG90QmFyQmh2X3BsYXlUY2hBdWQodCwgZSkge1xuICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELlRpbGUyVG91Y2gyKTtcbiAgICBlKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICBpc0JyZWFrOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgb25UMlJvbGxDYXJkQmh2X3BsYXlSdmxBdWQodCwgZSkge1xuICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELkNoZWNrMSk7XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgaXNCcmVhazogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIG9uU2VsZWN0Qmh2X3BsYXlObWxBdWQodCwgZSkge1xuICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELlRpbGUyVG91Y2gyKTtcbiAgICBlKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICBpc0JyZWFrOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgb25TZWxlY3RCaHZfcm9sbENhcmRBdWQodCwgZSkge1xuICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELkNoZWNrMSk7XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgaXNCcmVhazogdHJ1ZVxuICAgIH0pO1xuICB9XG59Il19