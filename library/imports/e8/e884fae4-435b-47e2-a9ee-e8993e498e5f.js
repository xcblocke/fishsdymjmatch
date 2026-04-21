"use strict";
cc._RF.push(module, 'e884frkQ1tH4qnu6Jk+SY5f', 'UpdateScoreBehavior');
// Scripts/base/UpdateScoreBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateScoreBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var UpdateScoreBehavior = /** @class */ (function (_super) {
    __extends(UpdateScoreBehavior, _super);
    function UpdateScoreBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateScoreBehavior.prototype.start = function (e) {
        var t, o = e.data.isShowCombo, n = e.data.addScore, i = e.data.targetScore, a = null === (t = this.context.gameView) || void 0 === t ? void 0 : t.scoreItem;
        a && a.updateScore(n, i, o);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return UpdateScoreBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.UpdateScoreBehavior = UpdateScoreBehavior;

cc._RF.pop();