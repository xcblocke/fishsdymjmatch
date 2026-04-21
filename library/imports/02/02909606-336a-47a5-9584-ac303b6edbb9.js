"use strict";
cc._RF.push(module, '02909YGM2pHpZWErDA7btu5', 'FailBehavior');
// Scripts/base/FailBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.FailBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var FailBehavior = /** @class */ (function (_super) {
    __extends(FailBehavior, _super);
    function FailBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FailBehavior.prototype.start = function () {
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    __decorate([
        mj.traitEvent("FailBhv_start")
    ], FailBehavior.prototype, "start", null);
    return FailBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.FailBehavior = FailBehavior;

cc._RF.pop();