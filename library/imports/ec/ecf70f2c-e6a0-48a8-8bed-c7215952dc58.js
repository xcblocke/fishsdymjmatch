"use strict";
cc._RF.push(module, 'ecf708s5qBIqIvtxyFZUtxY', 'UpdateShufflePropBehavior');
// Scripts/base/UpdateShufflePropBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var UpdateShufflePropBehavior = /** @class */ (function (_super) {
    __extends(UpdateShufflePropBehavior, _super);
    function UpdateShufflePropBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateShufflePropBehavior.prototype.start = function (e) {
        var t = e.data.curNum;
        this.context.gameView.gameUI.updateShuffleProp(t);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    __decorate([
        mj.traitEvent("UdShufflePropBhv_start")
    ], UpdateShufflePropBehavior.prototype, "start", null);
    return UpdateShufflePropBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.default = UpdateShufflePropBehavior;

cc._RF.pop();