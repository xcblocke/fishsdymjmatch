"use strict";
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