
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/BeforeDailyChallengeWinBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb886C8ldtFz45RiR+5a4BR', 'BeforeDailyChallengeWinBehavior');
// Scripts/BeforeDailyChallengeWinBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BeforeDailyChallengeWinBehavior = void 0;
var GameInputEnum_1 = require("./simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./base/GameBehaviorsBase");
var BeforeDailyChallengeWinBehavior = /** @class */ (function (_super) {
    __extends(BeforeDailyChallengeWinBehavior, _super);
    function BeforeDailyChallengeWinBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 0;
        return _this;
    }
    BeforeDailyChallengeWinBehavior.prototype.start = function (e) {
        var t = this;
        this.doOtherLogic(function () {
            t.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }, e.data);
    };
    BeforeDailyChallengeWinBehavior.prototype.doOtherLogic = function (e) {
        e();
    };
    __decorate([
        mj.traitEvent("BeforeDCWinBhv_start")
    ], BeforeDailyChallengeWinBehavior.prototype, "start", null);
    __decorate([
        mj.traitEvent("BeforeDCWinBhv_doOthLgc")
    ], BeforeDailyChallengeWinBehavior.prototype, "doOtherLogic", null);
    return BeforeDailyChallengeWinBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.BeforeDailyChallengeWinBehavior = BeforeDailyChallengeWinBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0JlZm9yZURhaWx5Q2hhbGxlbmdlV2luQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvRUFBbUU7QUFDbkUsOERBQTZEO0FBQzdEO0lBQXFELG1EQUFpQjtJQUF0RTtRQUFBLHFFQWFDO1FBWkMsY0FBUSxHQUFHLENBQUMsQ0FBQzs7SUFZZixDQUFDO0lBVkMsK0NBQUssR0FBTCxVQUFNLENBQUM7UUFDTCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVELHNEQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1osQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBVEQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO2dFQU1yQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQzt1RUFHeEM7SUFDSCxzQ0FBQztDQWJELEFBYUMsQ0Fib0QscUNBQWlCLEdBYXJFO0FBYlksMEVBQStCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL2Jhc2UvR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGNsYXNzIEJlZm9yZURhaWx5Q2hhbGxlbmdlV2luQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIF90aW1lb3V0ID0gMDtcbiAgQG1qLnRyYWl0RXZlbnQoXCJCZWZvcmVEQ1dpbkJodl9zdGFydFwiKVxuICBzdGFydChlKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMuZG9PdGhlckxvZ2ljKGZ1bmN0aW9uICgpIHtcbiAgICAgIHQuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgfSwgZS5kYXRhKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkJlZm9yZURDV2luQmh2X2RvT3RoTGdjXCIpXG4gIGRvT3RoZXJMb2dpYyhlKSB7XG4gICAgZSgpO1xuICB9XG59Il19