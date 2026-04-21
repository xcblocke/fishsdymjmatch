
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_journey/Scripts/JourneyUnlockTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18e0bsYMoFAPq9JM2qIa9tp', 'JourneyUnlockTrait');
// subpackages/l_journey/Scripts/JourneyUnlockTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var JourneyUnlockTrait = /** @class */ (function (_super) {
    __extends(JourneyUnlockTrait, _super);
    function JourneyUnlockTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JourneyUnlockTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerEvent([{
                event: "Tile2BfWinBhv_doOthLgc",
                priority: 20
            }]);
    };
    JourneyUnlockTrait.prototype.onJourney_getLimitDay = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this.traitData.installDay
        });
    };
    JourneyUnlockTrait.prototype.onJourney_getLimitLevel = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this.traitData.levelLimit
        });
    };
    JourneyUnlockTrait.prototype.onJourney_IsLevelValid = function (t, e) {
        var r = UserModel_1.default.getInstance().getMainGameData().getLevelId();
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: r >= t.ins.getLimitLevel()
        });
    };
    JourneyUnlockTrait.prototype.onBeforeWinBhv_doOthLgc = function (t, e) {
        this.checkRedPoint();
        e();
    };
    JourneyUnlockTrait.prototype.onTile2BfWinBhv_doOthLgc = function (t, e) {
        this.checkRedPoint();
        e();
    };
    JourneyUnlockTrait.prototype.checkRedPoint = function () {
        var t = UserModel_1.default.getInstance().getMainGameData().getLevelId(), e = TravelGameModel_1.default.getInstance().isUnlocked(), r = TravelGameModel_1.default.getInstance().getRedPointState();
        if (!e && r === TravelGameModel_1.ETravelRedPointState.None && t >= this.traitData.levelLimit) {
            TravelGameModel_1.default.getInstance().setRedPointState(TravelGameModel_1.ETravelRedPointState.Show);
            mj.EventManager.emit(GameEvent_1.EGameEvent.RedDot_addNotify, "journey");
        }
    };
    JourneyUnlockTrait.traitKey = "JourneyUnlock";
    JourneyUnlockTrait = __decorate([
        mj.trait,
        mj.class("JourneyUnlockTrait")
    ], JourneyUnlockTrait);
    return JourneyUnlockTrait;
}(Trait_1.default));
exports.default = JourneyUnlockTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2pvdXJuZXkvU2NyaXB0cy9Kb3VybmV5VW5sb2NrVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUEyRTtBQUMzRSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLDBGQUErRztBQUMvRyxzRUFBaUU7QUFHakU7SUFBZ0Qsc0NBQUs7SUFBckQ7O0lBZ0RBLENBQUM7SUE5Q0MsbUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNsQixLQUFLLEVBQUUsd0JBQXdCO2dCQUMvQixRQUFRLEVBQUUsRUFBRTthQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNELGtEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUM7WUFDQSxPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO1lBQzFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVU7U0FDckMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELG9EQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUM7WUFDQSxPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO1lBQzFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVU7U0FDckMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELG1EQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQy9ELENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07WUFDMUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRTtTQUN0QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsb0RBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxxREFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELDBDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUM1RCxDQUFDLEdBQUcseUJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLEVBQUUsRUFDOUMsQ0FBQyxHQUFHLHlCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxzQ0FBb0IsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQzNFLHlCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsc0NBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsc0JBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUM5RDtJQUNILENBQUM7SUE5Q00sMkJBQVEsR0FBRyxlQUFlLENBQUM7SUFEZixrQkFBa0I7UUFGdEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDO09BQ1Ysa0JBQWtCLENBZ0R0QztJQUFELHlCQUFDO0NBaERELEFBZ0RDLENBaEQrQyxlQUFLLEdBZ0RwRDtrQkFoRG9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVHYW1lRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9HYW1lRXZlbnQnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBUcmF2ZWxHYW1lTW9kZWwsIHsgRVRyYXZlbFJlZFBvaW50U3RhdGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3RyYXZlbC9tb2RlbC9UcmF2ZWxHYW1lTW9kZWwnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiSm91cm5leVVubG9ja1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKb3VybmV5VW5sb2NrVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiSm91cm5leVVubG9ja1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFt7XG4gICAgICBldmVudDogXCJUaWxlMkJmV2luQmh2X2RvT3RoTGdjXCIsXG4gICAgICBwcmlvcml0eTogMjBcbiAgICB9XSk7XG4gIH1cbiAgb25Kb3VybmV5X2dldExpbWl0RGF5KHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICByZXR1cm5WYWw6IHRoaXMudHJhaXREYXRhLmluc3RhbGxEYXlcbiAgICB9KTtcbiAgfVxuICBvbkpvdXJuZXlfZ2V0TGltaXRMZXZlbCh0LCBlKSB7XG4gICAgZSh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiB0aGlzLnRyYWl0RGF0YS5sZXZlbExpbWl0XG4gICAgfSk7XG4gIH1cbiAgb25Kb3VybmV5X0lzTGV2ZWxWYWxpZCh0LCBlKSB7XG4gICAgdmFyIHIgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRNYWluR2FtZURhdGEoKS5nZXRMZXZlbElkKCk7XG4gICAgZSh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiByID49IHQuaW5zLmdldExpbWl0TGV2ZWwoKVxuICAgIH0pO1xuICB9XG4gIG9uQmVmb3JlV2luQmh2X2RvT3RoTGdjKHQsIGUpIHtcbiAgICB0aGlzLmNoZWNrUmVkUG9pbnQoKTtcbiAgICBlKCk7XG4gIH1cbiAgb25UaWxlMkJmV2luQmh2X2RvT3RoTGdjKHQsIGUpIHtcbiAgICB0aGlzLmNoZWNrUmVkUG9pbnQoKTtcbiAgICBlKCk7XG4gIH1cbiAgY2hlY2tSZWRQb2ludCgpIHtcbiAgICB2YXIgdCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldE1haW5HYW1lRGF0YSgpLmdldExldmVsSWQoKSxcbiAgICAgIGUgPSBUcmF2ZWxHYW1lTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc1VubG9ja2VkKCksXG4gICAgICByID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0UmVkUG9pbnRTdGF0ZSgpO1xuICAgIGlmICghZSAmJiByID09PSBFVHJhdmVsUmVkUG9pbnRTdGF0ZS5Ob25lICYmIHQgPj0gdGhpcy50cmFpdERhdGEubGV2ZWxMaW1pdCkge1xuICAgICAgVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuc2V0UmVkUG9pbnRTdGF0ZShFVHJhdmVsUmVkUG9pbnRTdGF0ZS5TaG93KTtcbiAgICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KEVHYW1lRXZlbnQuUmVkRG90X2FkZE5vdGlmeSwgXCJqb3VybmV5XCIpO1xuICAgIH1cbiAgfVxufSJdfQ==