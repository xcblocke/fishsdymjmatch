"use strict";
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