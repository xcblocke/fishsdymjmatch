
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2NotEnoughItemsBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba73e8D8khM963DhlYQXKYX', 'Tile2NotEnoughItemsBehavior');
// Scripts/base/Tile2NotEnoughItemsBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2NotEnoughItemsBehavior = void 0;
var I18NStrings_1 = require("../framework/data/I18NStrings");
var ControllerManager_1 = require("../framework/manager/ControllerManager");
var DAdRewardEnter_1 = require("../gamePlay/dot/DAdRewardEnter");
var DGameAdShow_1 = require("../gamePlay/dot/DGameAdShow");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var p = {
    shuffle: 0,
    hitTips: 1,
    revert: 2
};
var f = {
    shuffle: DGameAdShow_1.EAdPosition.InGameMotivation_Reshuffle,
    hitTips: DGameAdShow_1.EAdPosition.InGameMotivation_Hint,
    revert: DGameAdShow_1.EAdPosition.InGameMotivation_Revert
};
var Tile2NotEnoughItemsBehavior = /** @class */ (function (_super) {
    __extends(Tile2NotEnoughItemsBehavior, _super);
    function Tile2NotEnoughItemsBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2NotEnoughItemsBehavior.prototype.start = function (e) {
        var t = e.data.from;
        if (t) {
            ControllerManager_1.default.getInstance().pushViewByController("WatchAdGetPropController", {
                type: p[t],
                isShowAction: true
            });
            DAdRewardEnter_1.DotAdRewardEnter.dot(true, f[t]);
        }
        else {
            var o = I18NStrings_1.default.get("Tile4_item_not_enough", "Not enough items");
            mj.EventManager.emit("SHOWTILE2TIPS", o);
        }
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return Tile2NotEnoughItemsBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2NotEnoughItemsBehavior = Tile2NotEnoughItemsBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJOb3RFbm91Z2hJdGVtc0JlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQXdEO0FBQ3hELDRFQUF1RTtBQUN2RSxpRUFBa0U7QUFDbEUsMkRBQTBEO0FBQzFELHFFQUFvRTtBQUNwRSx5REFBd0Q7QUFDeEQsSUFBSSxDQUFDLEdBQUc7SUFDTixPQUFPLEVBQUUsQ0FBQztJQUNWLE9BQU8sRUFBRSxDQUFDO0lBQ1YsTUFBTSxFQUFFLENBQUM7Q0FDVixDQUFDO0FBQ0YsSUFBSSxDQUFDLEdBQUc7SUFDTixPQUFPLEVBQUUseUJBQVcsQ0FBQywwQkFBMEI7SUFDL0MsT0FBTyxFQUFFLHlCQUFXLENBQUMscUJBQXFCO0lBQzFDLE1BQU0sRUFBRSx5QkFBVyxDQUFDLHVCQUF1QjtDQUM1QyxDQUFDO0FBQ0Y7SUFBaUQsK0NBQWlCO0lBQWxFOztJQWVBLENBQUM7SUFkQywyQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxFQUFFO1lBQ0wsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsb0JBQW9CLENBQUMsMEJBQTBCLEVBQUU7Z0JBQy9FLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNWLFlBQVksRUFBRSxJQUFJO2FBQ25CLENBQUMsQ0FBQztZQUNILGlDQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNMLElBQUksQ0FBQyxHQUFHLHFCQUFXLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFDckUsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDSCxrQ0FBQztBQUFELENBZkEsQUFlQyxDQWZnRCxxQ0FBaUIsR0FlakU7QUFmWSxrRUFBMkIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuaW1wb3J0IENvbnRyb2xsZXJNYW5hZ2VyIGZyb20gJy4uL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCB7IERvdEFkUmV3YXJkRW50ZXIgfSBmcm9tICcuLi9nYW1lUGxheS9kb3QvREFkUmV3YXJkRW50ZXInO1xuaW1wb3J0IHsgRUFkUG9zaXRpb24gfSBmcm9tICcuLi9nYW1lUGxheS9kb3QvREdhbWVBZFNob3cnO1xuaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG52YXIgcCA9IHtcbiAgc2h1ZmZsZTogMCxcbiAgaGl0VGlwczogMSxcbiAgcmV2ZXJ0OiAyXG59O1xudmFyIGYgPSB7XG4gIHNodWZmbGU6IEVBZFBvc2l0aW9uLkluR2FtZU1vdGl2YXRpb25fUmVzaHVmZmxlLFxuICBoaXRUaXBzOiBFQWRQb3NpdGlvbi5JbkdhbWVNb3RpdmF0aW9uX0hpbnQsXG4gIHJldmVydDogRUFkUG9zaXRpb24uSW5HYW1lTW90aXZhdGlvbl9SZXZlcnRcbn07XG5leHBvcnQgY2xhc3MgVGlsZTJOb3RFbm91Z2hJdGVtc0JlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBzdGFydChlKSB7XG4gICAgdmFyIHQgPSBlLmRhdGEuZnJvbTtcbiAgICBpZiAodCkge1xuICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIldhdGNoQWRHZXRQcm9wQ29udHJvbGxlclwiLCB7XG4gICAgICAgIHR5cGU6IHBbdF0sXG4gICAgICAgIGlzU2hvd0FjdGlvbjogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBEb3RBZFJld2FyZEVudGVyLmRvdCh0cnVlLCBmW3RdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG8gPSBJMThOU3RyaW5ncy5nZXQoXCJUaWxlNF9pdGVtX25vdF9lbm91Z2hcIiwgXCJOb3QgZW5vdWdoIGl0ZW1zXCIpO1xuICAgICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoXCJTSE9XVElMRTJUSVBTXCIsIG8pO1xuICAgIH1cbiAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG59Il19