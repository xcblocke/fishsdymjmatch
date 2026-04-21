"use strict";
cc._RF.push(module, 'a061ccYf5JJXrRAh4ZPny2k', 'UpdateMatchNumBehavior');
// Scripts/base/UpdateMatchNumBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMatchNumBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var UpdateMatchNumBehavior = /** @class */ (function (_super) {
    __extends(UpdateMatchNumBehavior, _super);
    function UpdateMatchNumBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateMatchNumBehavior.prototype.start = function (e) {
        this.context.gameView.gameUI.updateMatchNum(e.data.canMatchCardPairNum);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    __decorate([
        mj.traitEvent("UpdateMatchNumBhv_start")
    ], UpdateMatchNumBehavior.prototype, "start", null);
    return UpdateMatchNumBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.UpdateMatchNumBehavior = UpdateMatchNumBehavior;

cc._RF.pop();