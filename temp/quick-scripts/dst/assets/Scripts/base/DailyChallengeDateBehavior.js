
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/DailyChallengeDateBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '27735tmZsZNlrF56s4yaGen', 'DailyChallengeDateBehavior');
// Scripts/base/DailyChallengeDateBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyChallengeDateBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var DailyChallengeDateBehavior = /** @class */ (function (_super) {
    __extends(DailyChallengeDateBehavior, _super);
    function DailyChallengeDateBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DailyChallengeDateBehavior.prototype.start = function (e) {
        var t = e.data.date;
        this.context.gameView.gameUI.updateDailyChallengeDate(t);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return DailyChallengeDateBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.DailyChallengeDateBehavior = DailyChallengeDateBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvRGFpbHlDaGFsbGVuZ2VEYXRlQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBb0U7QUFDcEUseURBQXdEO0FBQ3hEO0lBQWdELDhDQUFpQjtJQUFqRTs7SUFNQSxDQUFDO0lBTEMsMENBQUssR0FBTCxVQUFNLENBQUM7UUFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDSCxpQ0FBQztBQUFELENBTkEsQUFNQyxDQU4rQyxxQ0FBaUIsR0FNaEU7QUFOWSxnRUFBMEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFQmVoYXZpb3JFbnVtIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmV4cG9ydCBjbGFzcyBEYWlseUNoYWxsZW5nZURhdGVCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgc3RhcnQoZSkge1xuICAgIHZhciB0ID0gZS5kYXRhLmRhdGU7XG4gICAgdGhpcy5jb250ZXh0LmdhbWVWaWV3LmdhbWVVSS51cGRhdGVEYWlseUNoYWxsZW5nZURhdGUodCk7XG4gICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgfVxufSJdfQ==