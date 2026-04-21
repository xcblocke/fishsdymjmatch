
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/GoalAchieveBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47621XJcvhOMZYlNsnRASJ4', 'GoalAchieveBehavior');
// Scripts/base/GoalAchieveBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GoalAchieveBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var GoalAchieveItem_1 = require("../items/GoalAchieveItem");
var GameInteraction_1 = require("../GameInteraction/GameInteraction");
var GoalAchieveBehavior = /** @class */ (function (_super) {
    __extends(GoalAchieveBehavior, _super);
    function GoalAchieveBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 3000;
        return _this;
    }
    GoalAchieveBehavior.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e, t, o, n;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        n = this;
                        e = this.context.gameView.effectNode;
                        return [4 /*yield*/, GoalAchieveItem_1.default.createUI()];
                    case 1:
                        if (!(t = _a.sent())) {
                            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                            return [2 /*return*/];
                        }
                        t.setParent(e);
                        t.position = cc.v3(0, 0, 0);
                        if (!(o = t.getComponent(GoalAchieveItem_1.default))) {
                            t.destroy();
                            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                            return [2 /*return*/];
                        }
                        o.playSound();
                        o.playAnimation(function () {
                            GameInteraction_1.GameInteraction.input({
                                inputType: GameInputEnum_1.EGameInputEnum.StartAutoMerge,
                                type: "travelVictory"
                            });
                            n.finish(GameInputEnum_1.EBehaviorEnum.Success);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return GoalAchieveBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.GoalAchieveBehavior = GoalAchieveBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvR29hbEFjaGlldmVCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFvRjtBQUNwRix5REFBd0Q7QUFDeEQsNERBQXVEO0FBQ3ZELHNFQUFxRTtBQUNyRTtJQUF5Qyx1Q0FBaUI7SUFBMUQ7UUFBQSxxRUE2QkM7UUE1QkMsY0FBUSxHQUFHLElBQUksQ0FBQzs7SUE0QmxCLENBQUM7SUEzQk8sbUNBQUssR0FBWDs7Ozs7O3dCQUlJLENBQUMsR0FBRyxJQUFJLENBQUM7d0JBQ1gsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQzt3QkFDM0IscUJBQU0seUJBQWUsQ0FBQyxRQUFRLEVBQUUsRUFBQTs7d0JBQTFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFnQyxDQUFDLEVBQUU7NEJBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDbkMsc0JBQU87eUJBQ1I7d0JBQ0QsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDZixDQUFDLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDNUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMseUJBQWUsQ0FBQyxDQUFDLEVBQUU7NEJBQzFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs0QkFDWixJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQ25DLHNCQUFPO3lCQUNSO3dCQUNELENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQzt3QkFDZCxDQUFDLENBQUMsYUFBYSxDQUFDOzRCQUNkLGlDQUFlLENBQUMsS0FBSyxDQUFDO2dDQUNwQixTQUFTLEVBQUUsOEJBQWMsQ0FBQyxjQUFjO2dDQUN4QyxJQUFJLEVBQUUsZUFBZTs2QkFDdEIsQ0FBQyxDQUFDOzRCQUNILENBQUMsQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDbEMsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsc0JBQU87Ozs7S0FDUjtJQUNILDBCQUFDO0FBQUQsQ0E3QkEsQUE2QkMsQ0E3QndDLHFDQUFpQixHQTZCekQ7QUE3Qlksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSwgRUdhbWVJbnB1dEVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuaW1wb3J0IEdvYWxBY2hpZXZlSXRlbSBmcm9tICcuLi9pdGVtcy9Hb2FsQWNoaWV2ZUl0ZW0nO1xuaW1wb3J0IHsgR2FtZUludGVyYWN0aW9uIH0gZnJvbSAnLi4vR2FtZUludGVyYWN0aW9uL0dhbWVJbnRlcmFjdGlvbic7XG5leHBvcnQgY2xhc3MgR29hbEFjaGlldmVCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgX3RpbWVvdXQgPSAzMDAwO1xuICBhc3luYyBzdGFydCgpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQsXG4gICAgICBvLFxuICAgICAgbiA9IHRoaXM7XG4gICAgZSA9IHRoaXMuY29udGV4dC5nYW1lVmlldy5lZmZlY3ROb2RlO1xuICAgIGlmICghKHQgPSBhd2FpdCBHb2FsQWNoaWV2ZUl0ZW0uY3JlYXRlVUkoKSkpIHtcbiAgICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHQuc2V0UGFyZW50KGUpO1xuICAgIHQucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcbiAgICBpZiAoIShvID0gdC5nZXRDb21wb25lbnQoR29hbEFjaGlldmVJdGVtKSkpIHtcbiAgICAgIHQuZGVzdHJveSgpO1xuICAgICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgby5wbGF5U291bmQoKTtcbiAgICBvLnBsYXlBbmltYXRpb24oZnVuY3Rpb24gKCkge1xuICAgICAgR2FtZUludGVyYWN0aW9uLmlucHV0KHtcbiAgICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5TdGFydEF1dG9NZXJnZSxcbiAgICAgICAgdHlwZTogXCJ0cmF2ZWxWaWN0b3J5XCJcbiAgICAgIH0pO1xuICAgICAgbi5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbn0iXX0=